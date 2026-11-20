# Crema&NataGdl — Landing

Landing de tablas para compartir (Guadalajara). React + Vite, estática, sin backend.
Deploy automático por push a main vía Vercel.

## Antes de publicar

En `src/config.js`, reemplazar los dos TODO:

1. `whatsapp: '523310000000'` → número real (formato internacional, sin `+`)
2. `instagram: 'cremanatagdl'` → usuario real de Instagram

Con eso quedan vivos los 8 links de WhatsApp (hero, 4 tarjetas, banda final,
footer y el flotante de móvil) y el enlace de Instagram.

## Comandos

```bash
npm install
npm run dev      # desarrollo en localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build para verificar
```

## Estructura

- `src/config.js` — configuración técnica: nombre, WhatsApp, Instagram y el
  helper `wa(texto)` que arma los links con mensaje prefijado. Es lo único
  que se toca para producción.
- `src/content.js` — contenido visible: tarjetas de tablas, pasos, FAQ y los
  mensajes prefijados de los CTAs (`waMessages`). Separado de la presentación
  a propósito: cambiar un texto no toca componentes.
- `src/styles/` — CSS por concepto, sin estilos sueltos en componentes:
  - `tokens.css` — TODO el diseño en variables: paleta, escala tipográfica,
    radios, espaciado (múltiplos de 4), sombras, curva de animación. Ningún
    otro archivo define colores literales (solo transparencias via `--*-rgb`).
  - `global.css` — base del documento y el estilo compartido de `:focus-visible`.
  - `layout.css` — contenedor central, guarniciones fijas y corte responsivo.
  - `halos.css` — la firma visual: halos rosa/sage y la variante script.
  - `header.css`, `hero.css`, `secciones.css`, `cierre.css`, `footer.css`,
    `wacta.css` — un archivo por bloque de la página.
- `src/components/` — Header, Hero, Tablas, Pedir, Preguntas, Cierre (banda
  vino), Footer, WACta (botón WhatsApp: variantes `base`/`claro`/`flotante`),
  Halo (halo detrás de una palabra; `como="script"` para lemas en Dancing
  Script), Icons.

## Accesibilidad

- Contraste AA en todos los textos (el oliva y el muted calculados sobre crema
  pasan 4.5:1 con holgura).
- `:focus-visible` global (anillo oliva) en enlaces, tarjetas y FAQ.
- Objetivos táctiles de al menos 44px en móvil (nav del footer y CTAs de
  tarjetas incluyen padding de golpe).
- Decoraciones con `aria-hidden` y `pointer-events: none`.
- Sin scroll horizontal en ningún breakpoint: la página se clippea en `body`
  y las guarniciones quedan dentro del viewport.
