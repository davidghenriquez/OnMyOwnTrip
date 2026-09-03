// Convierte data/core.js + data/cities/<id>.js a JSON puro (solo el array
// pois[] de cada ciudad), para poder subirlo después a Cloudflare KV y
// servirlo desde el Worker con gate de licencia, en vez de como archivo
// estático público.
//
// Los .js de ciudad siguen siendo la fuente de verdad para autoría (se
// editan igual que hasta ahora); este script es el paso de "build" que
// los aplana a JSON justo antes de subirlos a KV. No toca data/core.js ni
// data/cities/*.js, solo los lee.
//
// Uso: node scripts/build-city-content.js [carpeta_salida]
// Por defecto escribe en scratchpad, fuera del repo controlado por git.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const CORE_PATH = path.join(ROOT, 'data', 'core.js');
const CITIES_DIR = path.join(ROOT, 'data', 'cities');
const OUT_DIR = path.resolve(
  process.argv[2] || 'C:/Users/DEEPGAMING/AppData/Local/Temp/claude/C--Users-DEEPGAMING-Desktop-OnMyOwnTrip/f50b5b12-dfe0-4d0a-b558-e7b8fc91052a/scratchpad/city-content-json'
);

const coreSource = fs.readFileSync(CORE_PATH, 'utf8');
const cityFiles = fs.readdirSync(CITIES_DIR).filter((f) => f.endsWith('.js'));

fs.mkdirSync(OUT_DIR, { recursive: true });

const results = [];

for (const file of cityFiles) {
  const cityId = file.replace(/\.js$/, '');
  const citySource = fs.readFileSync(path.join(CITIES_DIR, file), 'utf8');

  // Contexto nuevo por ciudad: evita que una ciudad contamine a la
  // siguiente si algo se filtrara accidentalmente entre ejecuciones.
  const context = vm.createContext({ console });
  vm.runInContext(coreSource, context, { filename: 'core.js' });
  vm.runInContext(citySource, context, { filename: file });
  // `const CITIES = ...` en core.js queda en el entorno léxico del
  // contexto, no como propiedad del objeto global — no es visible desde
  // fuera (context.CITIES) hasta que se asigna explícitamente así.
  vm.runInContext(
    `globalThis.__RESULT__ = CITIES[${JSON.stringify(cityId)}];`,
    context,
    { filename: 'extract.js' }
  );

  const city = context.__RESULT__;
  if (!city || !Array.isArray(city.pois)) {
    throw new Error(`${file}: no se encontró CITIES.${cityId}.pois tras evaluar el archivo`);
  }

  const json = JSON.stringify(city.pois);
  fs.writeFileSync(path.join(OUT_DIR, `${cityId}.json`), json, 'utf8');
  results.push({ cityId, pois: city.pois.length, bytes: Buffer.byteLength(json, 'utf8') });
}

console.log('Ciudad'.padEnd(24), 'POIs'.padStart(6), 'JSON (KB)'.padStart(12));
for (const r of results) {
  console.log(r.cityId.padEnd(24), String(r.pois).padStart(6), (r.bytes / 1024).toFixed(1).padStart(12));
}
console.log(`\n${results.length} ciudades escritas en ${OUT_DIR}`);
