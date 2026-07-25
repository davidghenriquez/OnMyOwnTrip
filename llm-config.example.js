// ============================================================
// Copia este archivo como "llm-config.js" (en la misma carpeta)
// y rellena tu propia API key. Ese archivo NO se sube a git
// (está en .gitignore) — así tu key nunca queda pública.
//
// Si no creas llm-config.js, la app funciona igual pero con el
// simulador local en vez de una IA real.
// ============================================================
window.LLM_CONFIG = {
  provider: 'openai', // 'openai' | 'anthropic' — usa 'openai' también para endpoints compatibles (Gemini, Groq, OpenRouter, Mistral...)
  baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai', // endpoint compatible con OpenAI de Gemini
  apiKey: 'TU_KEY_AQUI',
  model: 'gemini-flash-latest',
  maxTokens: 3500, // algunos modelos "razonadores" necesitan un margen alto
  extraBody: { reasoning_effort: 'low' } // opcional: baja el "pensamiento" interno para no cortar la respuesta
};
