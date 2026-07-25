# DEBUG SESSION: ios-localhost-regression
- Session ID: `ios-localhost-regression`
- Status: **[OPEN]**
- Symptom: "En iPhone nada funciona al hacer click, y TAMBIÉN falla en localhost del PC. Click no hace nada (sheet, tabs, audio, chips). Regresión tras fixes iOS commit 4e456a3"
- Environment:
  - Servidor local: PowerShell HttpListener / TcpListener (antiguos) o serve-movil-tcp en puerto 5173/5174
  - Navegador local (Chrome/Edge) y Safari iOS 17
- Regression window: Últimos cambios en `app.js` (bloque SPEECH + initDrag + setStateMode) y `styles.css` (bloque fix IOS click)

---

## HIPÓTESIS FALSABLES (5)
1. **H1 (Syntax Error en app.js)**: 90% probabilidad — en el último `Edit` del `SPEECH IIFE` o `initDrag` se introdujo un error de sintaxis JS. Como app.js falla en `parse`, todo el código JS no corre: Leaflet no inicia, no hay wiring de eventos, clicks = sin efecto. Confirmar: abrir DevTools → Consola y ver SyntaxError + línea.
2. **H2 (DOM query `#metaThemeColor` roto)**: setStateMode ahora usa `document.getElementById('metaThemeColor')`. Si hubiera un typo o el id no existe en el HTML actual, se lanza excepción y rompe setStateMode → posiblemente rompa el init.
3. **H3 (IIFE SPEECH con excepcion temprana)**: `SPEECH` es un IIFE que corre durante el parseo top-level. Si alguna línea (ej. `synth.onvoiceschanged`, `navigator.maxTouchPoints` etc.) lanza un TypeError en navegadores antiguos o sandbox, el script app.js se aborta y no llega a `wireEvents` / `init()`.
4. **H4 (CSS pointer-events bloqueado globalmente)**: En el bloque "FIX IOS" de styles.css alguna regla CSS nueva (ej. `* { pointer-events: none }` accidental, o touch-action none aplicado a todo el body) impide que el navegador entregue eventos click.
5. **H5 (initDrag onMove touch passive:false preventDefault)**: Aunque se añadió threshold, el `try/catch` al `window.addEventListener('touchmove', ..., {passive:false})` podría haber bloqueado mouse events en desktop si hubo un typo. Confirmar: click en botones header (Modo Dual / Filtros) tampoco funciona → si falla el header es H1/H3 error JS global.

---

## PASOS A SEGUIR
1. Levantar Debug Server (PowerShell TcpListener puerto 9229)
2. Añadir window.onerror + try/catch wrapper init + 6 puntos de instrumentación (log por HTTP).
3. Reproducir en localhost:5174 → recoger logs.
4. Corroborar H1-H5. Implementar fix mínimo.
5. Comparar pre/post. Limpiar instrumentación. Subir a GitHub.
