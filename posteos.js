/* Contenido del mes. Se regenera cada mes desde la carpeta de Drive.
   brand: "ac" (American Cola) o "pf" (Planet Fruit)
   type: "fija", "carrusel", "historia" o "reel"
   file: una pieza (jpg, png o mp4) dentro de media/
   files: varias imágenes en orden, para los carruseles
   caption: puede quedar vacío (por ejemplo, en historias) */
window.MONTH = { title: "Septiembre 2026", tag: "Ejemplo" };
window.POSTS = [
  { brand: "ac", date: "2026-09-04", type: "fija", file: "media/ac-2026-09-04-feed.jpg",
    caption: "50 años después, recién nos estás conociendo.\n\nAmerican Cola está desde los años 70. Y recién ahora empieza a aparecer en tu mesa.\n\n¿La conocías antes de verla acá?" },
  { brand: "ac", date: "2026-09-18", type: "fija", file: "media/ac-2026-09-18-feed.jpg",
    caption: "Viernes. 21:37.\n\nLa caja abierta, los vasos llenos, nadie posando. American Cola es para poner en la mesa, no en un pedestal.\n\n¿Cuál es tu comida de viernes?" },
  { brand: "ac", date: "2026-09-26", type: "fija", file: "media/ac-2026-09-26-feed.jpg",
    caption: "Esta noche, pedila.\n\nAmerican Cola ya está en PedidosYa Market.\n\nBuscala. Pedila. Probala." },
  { brand: "pf", date: "2026-09-09", type: "fija", file: "media/pf-2026-09-09-feed.jpg",
    caption: "¿Otra vez lo mismo?\n\nHoy no tomo lo de siempre. Planet Fruit Lima-Limón, bien fría.\n\n¿Cuál sos hoy?" }
];
