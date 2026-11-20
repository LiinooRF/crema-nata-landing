import '../styles/halos.css'

/**
 * Firma visual: halo orgánico (borde irregular tipo acuarela) detrás de una
 * palabra o frase clave. Solo decorativo: no cambia el tamaño del texto.
 *
 * Props:
 * - color: 'rosa' (halo rosa, default) | 'sage' (halo sage).
 * - como (opcional): cambia la tipografía del contenido al lema script
 *   (Dancing Script). Úsalo para frases completas, no para palabras sueltas.
 * - nivel: 'h1' | 'h2' | 'h3'. Con nivel, renderiza ese encabezado y aplica
 *   el tamaño correspondiente (para lemas que son el título de una sección).
 *
 * Ejemplos:
 *   <Halo>compartir</Halo>                              → palabra del h1
 *   <Halo color="sage" como="script">Tu tabla...</Halo> → lema suelto
 *   <Halo color="sage" como="script" nivel="h2">tres pasos</Halo>
 */
const NIVELES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
}

export default function Halo({ color = 'rosa', como, nivel, children }) {
  const clases = ['halo', `halo-${color}`]
  if (como === 'script') clases.push('halo-script')

  let tamano
  if (nivel === 'h1') tamano = 'var(--fs-h1)'
  else if (nivel === 'h2') tamano = 'var(--fs-h2)'
  else if (nivel === 'h3') tamano = 'var(--fs-tarjeta)'
  const estilo = tamano ? { fontSize: tamano } : undefined

  const Etiqueta = nivel ? NIVELES[nivel] : 'span'
  return (
    <Etiqueta className={clases.join(' ')} style={estilo}>
      {children}
    </Etiqueta>
  )
}
