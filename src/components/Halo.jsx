import './Halos.css'

/**
 * Firma visual: halos orgánicos (rosa / sage) detrás de una palabra clave.
 * <Halo color="rosa">compartir</Halo>
 */
export default function Halo({ color = 'rosa', children }) {
  return <span className={`halo halo-${color}`}>{children}</span>
}
