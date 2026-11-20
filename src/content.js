/**
 * Contenido editable del sitio: datos que se muestran y los mensajes
 * prefijados de WhatsApp. Separado de la presentación a propósito.
 * La configuración técnica (número, usuario, nombre) vive en config.js.
 */

/** Mensajes prefijados de los CTAs de WhatsApp. Claves por ocasión. */
export const waMessages = {
  /** Hero y CTA flotante de móvil. */
  hero: '¡Hola! Quiero cotizar una tabla para compartir',
  /** Tarjeta "La cena de dos". */
  dos: '¡Hola! Quiero cotizar una tabla para dos',
  /** Tarjeta "La reunión" (6–8 personas). */
  media: '¡Hola! Quiero cotizar una tabla para 6 a 8 personas',
  /** Tarjeta "La fiesta" (12+ personas). */
  grande: '¡Hola! Quiero cotizar una tabla para 12 o más personas',
  /** Tarjeta destacada "La posada". */
  posada: '¡Hola! Quiero apartar fecha para una posada',
  /** Banda de cierre y footer. */
  general: '¡Hola! Quiero cotizar una tabla',
}

/** Tarjetas de la sección "Tablas para cada ocasión". */
export const tablas = [
  {
    chip: 'Para 2',
    nombre: 'La cena de dos',
    detalle: 'Una noche tranquila y rica, sin cocinar y sin trastes que lavar.',
    mensaje: waMessages.dos,
    cta: 'Cotiza esta tabla',
  },
  {
    chip: '6–8',
    nombre: 'La reunión',
    detalle: 'El pendiente que se armó en la tarde: tabla con de todo un poco.',
    mensaje: waMessages.media,
    cta: 'Cotiza esta tabla',
  },
  {
    chip: '12+',
    nombre: 'La fiesta',
    detalle: 'Cuando la casa se llena: tabla grande y variedad para todos.',
    mensaje: waMessages.grande,
    cta: 'Cotiza esta tabla',
  },
  {
    chip: 'Posadas',
    nombre: 'La posada',
    detalle: 'Tu fecha apartada y una tabla del tamaño de tu lista de invitados.',
    mensaje: waMessages.posada,
    cta: 'Aparta tu fecha',
    destacada: true,
  },
]

/** Pasos de la sección "Cómo pedir". */
export const pasos = [
  {
    titulo: 'Escríbenos',
    detalle: 'Cuéntanos cuántos son, qué día y dónde entregamos.',
  },
  {
    titulo: 'Te cotizamos',
    detalle: 'Te proponemos la tabla para tu ocasión, con su precio.',
  },
  {
    titulo: 'Aparta tu fecha',
    detalle: 'Ya con la cotización, tu día queda reservado.',
  },
]

/** Preguntas frecuentes. */
export const faqs = [
  {
    q: '¿Con cuánto tiempo aparto mi fecha?',
    a: 'En temporada de posadas conviene escribirnos con varios días de anticipación. Igual escríbenos y vemos si te podemos acomodar.',
  },
  {
    q: '¿Qué lleva una tabla?',
    a: 'Quesos, carnes, frutas, pan y dulces. El armado cambia según el tamaño y la ocasión.',
  },
  {
    q: '¿Puedo pedir una tabla distinta?',
    a: 'Claro. Cuéntanos tu idea —temática, colores, antojos— y te la cotizamos.',
  },
  {
    q: '¿Cómo se aparta y cómo se paga?',
    a: 'Todo se acomoda por WhatsApp al cotizar: ahí mismo apartas tu fecha y coordinamos el pago.',
  },
]
