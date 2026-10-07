# Contenidos Monarch

Página con los posteos del mes de American Cola y Planet Fruit, en orden de publicación. Cada pieza se puede compartir directo a WhatsApp (imagen + texto), descargar o copiar su texto.

Link: https://cdalimentos2026.github.io/monarch-posteos/

## Cómo se carga cada mes

Barbi sube las piezas en Drive, dentro de la carpeta compartida **Monarch**:

```
Monarch / Posteos Monarch /
   2026-10 Octubre /
      Captions 2026-10        ← Google Sheet: marca | fecha | tipo | archivo | caption
      American Cola /
         2026-10-03_feed.jpg
         2026-10-07_reel.mp4
         2026-10-10_historia.jpg
      Planet Fruit /
         2026-10-05_feed.jpg
   2026-11 Noviembre /
```

- Nombre de cada archivo: `AAAA-MM-DD_tipo`, con la fecha de publicación en Instagram. Tipos válidos: `feed`, `reel`, `historia`.
- Dos piezas el mismo día: agregar `_2` al final (`2026-10-03_feed_2.jpg`).
- Formatos: `jpg` o `png` para imágenes, `mp4` para video, de menos de 50 MB.
- En el Sheet, una fila por pieza. `marca` es `American Cola` o `Planet Fruit`, y `archivo` es el nombre exacto del archivo.
- En la carpeta van solo las piezas finales.

Después se le pide a Claude en el proyecto Monarch: **"armá octubre"**. Claude lee Drive, actualiza `posteos.js` y la carpeta `media/`, y la página se renueva en el mismo link en uno o dos minutos.

## Archivos

- `index.html`: la página.
- `posteos.js`: el contenido del mes (marca, fecha, tipo, archivo y caption de cada pieza).
- `media/`: las piezas del mes.
