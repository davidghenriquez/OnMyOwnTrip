# licenses.json — control de acceso

Este fichero es la única "base de datos" de accesos a la app: se edita a
mano y se sube con un commit normal (`git add licenses.json`, commit,
push). Cada clave es el nombre de usuario que la persona escribirá en la
pantalla de acceso ("Acceso privado") antes de poder usar la app; el
valor indica hasta cuándo es válido.

## Dar de alta un acceso nuevo

Añade una línea así (recuerda la coma si no es la última entrada):

```json
"nombre-que-le-des": { "expires": "2026-08-30" }
```

- `expires`: fecha en formato `YYYY-MM-DD` (año-mes-día). Ese día incluido
  todavía funciona; al día siguiente, deja de funcionar.
- **Criterio estándar: una semana desde hoy**, salvo que acuerdes otra
  cosa con esa persona.
- Para acceso vitalicio/libre (sin caducidad), usa `"expires": null`.

## Revocar o acortar un acceso

Borra su entrada del fichero (o cámbiale la fecha a una ya pasada) y haz
commit + push. Quien ya tenía la app abierta con ese acceso seguirá
funcionando hasta que se revalide contra este fichero — al reabrir la
app, o al ratito si la tiene abierta de fondo — no es instantáneo, pero
no hace falta tocar nada más que este fichero.

## Cómo funciona por dentro

- Al abrir la app por primera vez (o sin un acceso guardado válido) se
  muestra una pantalla pidiendo el nombre de usuario, que se comprueba
  contra este mismo fichero (`fetch('licenses.json')`, ver `LICENSE` en
  `app.js`).
- Si es válido, se guarda en el propio dispositivo (`localStorage`) para
  no tener que volver a escribirlo cada vez, y para poder seguir usando
  la app sin red (piensa que es una app para usar caminando por la calle).
- En cada arranque con un acceso ya guardado, además de dejar entrar al
  momento con lo guardado, se revalida en segundo plano contra este
  fichero real — así una revocación o una fecha ya pasada se detecta sin
  esperar a que "expire" solo en el propio móvil.

## Importante: esto no es una protección real

El repositorio de GitHub es público, así que este fichero y el propio
código que lo comprueba (`app.js`) son visibles para cualquiera. Sirve
para controlar de forma sencilla quién tiene acceso y durante cuánto
tiempo — no es un sistema anti-piratería: alguien con conocimientos
técnicos podría leer este fichero o saltarse el chequeo desde las
herramientas de desarrollador del navegador.
