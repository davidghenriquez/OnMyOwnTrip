# Proxy de IA para OnMyOwnTrip (Cloudflare Workers)

Este pequeño servidor guarda tu API key de Gemini de forma segura y reenvía
las peticiones de la web pública, para que la key nunca aparezca en el
navegador de quien visite la app.

## Despliegue (todo desde el navegador, sin instalar nada)

1. Ve a **https://dash.cloudflare.com** y crea una cuenta gratuita (no debería
   pedir tarjeta para el plan gratuito de Workers).
2. En el menú lateral: **Workers & Pages → Create → Create Worker**.
   Ponle un nombre, por ejemplo `onmyowntrip-proxy`, y créalo.
3. Pulsa **Edit code** (o "Quick edit") para abrir el editor online.
4. Borra el código de ejemplo y pega el contenido completo de `proxy.js`
   (el archivo que está en esta misma carpeta).
5. Pulsa **Deploy** / **Save and deploy**.
6. Ve a **Settings → Variables and Secrets** de ese Worker → **Add** →
   - Nombre: `GEMINI_API_KEY`
   - Tipo: **Secret** (encriptado, nunca se muestra después)
   - Valor: tu API key real de Gemini
   - Guarda.
7. Copia la URL del Worker que te da Cloudflare (algo como
   `https://onmyowntrip-proxy.TU-USUARIO.workers.dev`).

## Audioguía en voz real (opcional): Google Cloud Text-to-Speech

Esto es aparte del chat con Gemini — activa una voz de verdad (Google
Cloud TTS) para el resumen narrado de cada POI, en vez de la voz del
navegador. Es completamente opcional: si no añades este secret, la app
sigue funcionando igual, solo que con la voz de siempre.

1. Sigue los pasos de "Prueba antes de tocar nada" más abajo para crear la
   API key en Google Cloud (**Cloud Text-to-Speech API**, restringida a esa
   API).
2. En el mismo Worker de arriba, **Settings → Variables and Secrets → Add**:
   - Nombre: `GOOGLE_TTS_API_KEY`
   - Tipo: **Secret**
   - Valor: tu API key de Google Cloud
   - Guarda.

Con eso ya está — la app detecta sola que el endpoint `/tts` responde y
empieza a usarlo para el resumen inicial de cada POI (cacheado por texto,
así no se vuelve a pagar la misma narración dos veces). Si algo falla
(sin key, cuota agotada, sin red…) cae automáticamente a la voz del
navegador, sin ningún error visible para quien usa la app.

### Prueba antes de tocar nada (recomendado)

Antes de meter la key en el Worker, prueba que funciona directamente:
1. Ve a **console.cloud.google.com**, crea o elige un proyecto.
2. **APIs y servicios → Biblioteca** → busca **"Cloud Text-to-Speech API"** → **Habilitar**.
3. **APIs y servicios → Credenciales → Crear credenciales → Clave de API**.
4. Pulsa **Restringir clave** y limítala a **"Cloud Text-to-Speech API"** únicamente.
5. En **Facturación → Presupuestos y alertas**, pon una alerta de $1 — así
   te avisa si algún día te acercas a superar el nivel gratis, aunque con
   el volumen de esta app es difícil que pase (ver el comentario de
   `TTS_VOICE`/`TTS_SPEAKING_RATE` en `proxy.js`: usa la voz WaveNet, la
   más barata de las voces de calidad).

## Configurar la app para usar el proxy

Con esa URL, tu `llm-config.js` local (o, una vez probado, el que subamos a
git) debe quedar así — **ya no hace falta tu key real aquí**, cualquier
texto sirve en `apiKey` porque el Worker no la usa para autenticar:

```js
window.LLM_CONFIG = {
  provider: 'openai',
  baseUrl: 'https://onmyowntrip-proxy.TU-USUARIO.workers.dev',
  apiKey: 'proxy',
  model: 'gemini-flash-latest',
  maxTokens: 3500,
  extraBody: { reasoning_effort: 'low' }
};
```

## Nota sobre abuso

El Worker solo acepta peticiones cuyo origen (`Origin`) sea tu web de
GitHub Pages (o `localhost:8791` para pruebas) — así que copiar y pegar la
URL del Worker en otra web no funcionaría desde un navegador normal. No es
una protección perfecta (alguien con conocimientos técnicos podría
saltársela), pero es suficiente para un proyecto personal. Si más adelante
quieres más protección, Cloudflare tiene reglas de "Rate Limiting" gratuitas
que se activan desde el panel, sin tocar código.
