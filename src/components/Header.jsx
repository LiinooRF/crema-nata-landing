import { site } from '../config.js'
import { decoD } from '../assets.js'
import '../styles/header.css'

const SECCIONES = [
  { href: '#tablas', etiqueta: 'Tablas' },
  { href: '#pedir', etiqueta: 'Cómo pedir' },
  { href: '#preguntas', etiqueta: 'Preguntas' },
]

export default function Header() {
  return (
    <header className="top">
      <p className="brand">{site.nombre}</p>
      <div className="rule" aria-hidden="true">
        <img src={decoD} alt="" />
      </div>
      <nav className="nav" aria-label="Secciones">
        {SECCIONES.map((s) => (
          <a key={s.href} href={s.href}>
            {s.etiqueta}
          </a>
        ))}
      </nav>
    </header>
  )
}
