import { site } from '../config.js'
import { decoD } from '../assets.js'
import './Header.css'

export default function Header() {
  return (
    <header className="top">
      <div className="brand">{site.nombre}</div>
      <div className="rule">
        <img src={decoD} alt="" aria-hidden="true" />
      </div>
      <nav className="nav" aria-label="Secciones">
        <a href="#tablas">Tablas</a>
        <a href="#pedir">Cómo pedir</a>
        <a href="#preguntas">Preguntas</a>
      </nav>
    </header>
  )
}
