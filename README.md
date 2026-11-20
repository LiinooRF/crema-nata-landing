# Crema&NataGdl — Landing

Landing de tablas para compartir (Guadalajara). React + Vite, estática, sin backend.
Deploy automático por push a main vía Vercel.

## Antes de publicar

En `src/config.js`, reemplazar los dos TODO:

1. `whatsapp: '523310000000'` → número real (formato internacional, sin `+`)
2. `instagram: 'cremanatagdl'` → usuario real de Instagram

Con eso quedan vivos los 7 links de WhatsApp (hero, 4 tarjetas, banda final,
footer y el flotante de móvil) y el enlace de Instagram.

## Comandos

```bash
npm install
npm run dev      # desarrollo en localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build para verificar
```

## Estructura

- `src/config.js` — nombre, WhatsApp, Instagram y el helper `wa(texto)` que arma
  los links con mensaje prefijado. Es lo único que se toca para producción.
- `src/components/` — Header, Hero, Tablas (4 tarjetas, Posadas destacada en vino),
  Pedir (3 pasos), Preguntas (FAQ con `<details>`), Cierre (banda vino), Footer,
  WACta (botón WhatsApp con variantes), Halo (halos rosa/sage, firma visual), Icons.
- `public/assets/` — foto de la tabla, guarniciones webp y og.jpg (1200×630).
