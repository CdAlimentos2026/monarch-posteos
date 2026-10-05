# Contenidos Monarch

Página con los posteos del mes de American Cola y Planet Fruit, en orden de publicación. Cada pieza se puede compartir directo a WhatsApp (imagen + texto), descargar o copiar su texto.

Link: https://cdalimentos2026.github.io/monarch-posteos/

## Cómo se carga cada mes

Barbi sube las piezas en Drive, dentro de la carpeta compartida **Monarch**:

```
Monarch / American Cola / 2026-10 Octubre /
   2026-10-03_feed.jpg
   2026-10-07_reel.mp4
   2026-10-10_historia.jpg
   Captions   ← Google Sheet con columnas: fecha | tipo | caption
```

Lo mismo en `Monarch / Planet Fruit / 2026-10 Octubre /`.

- Nombre de cada archivo: `AAAA-MM-DD_tipo`. Tipos válidos: `feed`, `reel`, `historia`.
- Dos piezas el mismo día: agregar `_2` al final (`2026-10-03_feed_2.jpg`).
- En el Sheet, una fila por pieza, con la misma fecha y tipo que el nombre del archivo.

Después se le pide a Claude en el proyecto Monarch: **"armá octubre"**. Claude lee Drive, actualiza `posteos.js` y la carpeta `media/`, y la página se renueva en el mismo link en uno o dos minutos.

## Archivos

- `index.html`: la página.
- `posteos.js`: el contenido del mes (marca, fecha, tipo, archivo y caption de cada pieza).
- `media/`: las piezas del mes.
