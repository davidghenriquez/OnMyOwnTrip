// ============================================================
// Copia este archivo como "llm-config.js" (en la misma carpeta)
// y rellena tu configuración. Ese archivo NO se sube a git (está
// en .gitignore).
//
// Si no creas llm-config.js, la app funciona igual pero con el
// simulador local en vez de una IA real.
// ============================================================

// --- Opción A: llamar directamente a Gemini (solo para pruebas locales,
//     tu key quedaría expuesta si esto se llega a publicar) ---
// window.LLM_CONFIG = {
//   provider: 'openai',
//   baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
//   apiKey: 'TU_KEY_AQUI',
//   model: 'gemini-3.6-flash', // estable; evita "gemini-flash-latest" (experimental, 503 frecuentes)
//   maxTokens: 3500,
//   extraBody: { reasoning_effort: 'low' }
// };

// --- Opción B: a través del proxy (ver worker/README.md) — así la key
//     nunca sale del servidor y esto SÍ se puede usar en la web pública ---
window.LLM_CONFIG = {
  provider: 'openai',
  baseUrl: 'https://TU-WORKER.TU-USUARIO.workers.dev',
  apiKey: 'proxy', // no autentica nada real, el Worker ignora este valor
  model: 'gemini-3.6-flash', // estable; evita "gemini-flash-latest" (experimental, 503 frecuentes)
  maxTokens: 3500,
  extraBody: { reasoning_effort: 'low' }
};
