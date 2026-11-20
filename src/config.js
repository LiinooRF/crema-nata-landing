// Configuración del sitio — lo único que hay que tocar para producción.
export const site = {
  nombre: 'Crema&NataGdl',
  ciudad: 'Guadalajara, Jalisco',
  // WhatsApp en formato internacional sin + (52 = México, 33 = Guadalajara)
  whatsapp: '523310000000', // TODO: número real
  instagram: 'cremanatagdl', // TODO: usuario real
}

/** Link de WhatsApp con mensaje prefijado. */
export function wa(texto) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`
}
