import { wa } from '../config.js'
import { tablas } from '../content.js'
import '../styles/secciones.css'

export default function Tablas() {
  return (
    <section className="section" id="tablas">
      <h2>
        Tablas para <span className="hl">cada ocasión</span>
      </h2>
      <p className="lead">Dinos cuántos son y te armamos la tabla que le queda a tu noche</p>
      <div className="cards">
        {tablas.map((t) => (
          <article key={t.nombre} className={`card${t.destacada ? ' card-destacada' : ''}`}>
            <span className="chip">{t.chip}</span>
            <h3>{t.nombre}</h3>
            <p>{t.detalle}</p>
            <ul className="incluye" aria-label={`Incluye ${t.nombre.toLowerCase()}`}>
              {t.incluye.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <a
              className="card-cta"
              href={wa(t.mensaje)}
              target="_blank"
              rel="noopener"
            >
              {t.cta}
            </a>
          </article>
        ))}
      </div>
      <p className="cardsnote">¿Otra medida o una idea distinta? Cuéntanosla y la cotizamos</p>
    </section>
  )
}
