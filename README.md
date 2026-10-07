# Contenidos Monarch

Página con los posteos del mes de American Cola y Planet Fruit, en orden de publicación. Cada pieza se puede compartir directo a WhatsApp (imagen + texto), descargar o copiar su texto.

Link: https://cdalimentos2026.github.io/monarch-posteos/

## Cómo se carga cada mes

En Drive, dentro de **Monarch**, hay dos carpetas:

- **1 · Interno** (privada): `Marca` (manuales, logos, recursos) y `Estrategia mensual` (PDF de cada mes, por marca).
- **2 · Posteos** (compartida por link): solo las piezas finales que se publican. De acá sale la página.

```
Monarch / 2 · Posteos /
   2026-10 Octubre /
      Captions 2026-10            ← Google Sheet: marca | tipo | fecha | archivo | caption
      American Cola /
         Fijas /       2026-10-03.jpg
         Carruseles /  2026-10-08 /  01.jpg  02.jpg  03.jpg
         Historias /   2026-10-10.jpg   2026-10-14.mp4
         Reels /       2026-10-07.mp4
      Planet Fruit /
         Fijas / Carruseles / Historias / Reels   (igual)
   2026-11 Noviembre /
```

- Cada archivo se llama con la fecha en que sale en Instagram: `AAAA-MM-DD`. Si hay dos del mismo tipo el mismo día: `AAAA-MM-DD_2`.
- Cada carrusel es una carpeta con su fecha, y adentro las imágenes numeradas en el orden en que se publican (`01`, `02`, `03`…).
- Formatos: `jpg` o `png` para imágenes, `mp4` para video, de menos de 50 MB.
- En el Sheet, una fila por pieza (un carrusel es una sola fila). `marca`: American Cola o Planet Fruit. `tipo`: fija, carrusel, historia o reel. `archivo`: el nombre exacto del archivo, o de la carpeta en los carruseles. `caption` puede quedar vacío en las historias.

Después se le pide a Claude en el proyecto Monarch: **"armá octubre"**. Claude lee Drive, actualiza `posteos.js` y la carpeta `media/`, y la página se renueva en el mismo link en uno o dos minutos.

## Archivos

- `index.html`: la página.
- `posteos.js`: el contenido del mes (marca, fecha, tipo, archivo y caption de cada pieza).
- `media/`: las piezas del mes.
