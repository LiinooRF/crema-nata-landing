import { wa } from '../config.js'
import './Tablas.css'

const TABLAS = [
  {
    chip: 'Para 2',
    nombre: 'La cena de dos',
    detalle: 'Una noche tranquila y rica, sin cocinar y sin trastes que lavar.',
    texto: '¡Hola! Quiero cotizar una tabla para dos',
  },
  {
    chip: '6–8',
    nombre: 'La reunión',
    detalle: 'El pendiente que se armó en la tarde: tabla con de todo un poco.',
    texto: '¡Hola! Quiero cotizar una tabla para 6 a 8 personas',
  },
  {
    chip: '12+',
    nombre: 'La fiesta',
    detalle: 'Cuando la casa se llena: tabla grande y variedad para todos.',
    texto: '¡Hola! Quiero cotizar una tabla para 12 o más personas',
  },
  {
    chip: 'Posadas',
    nombre: 'La posada',
    detalle: 'Tu fecha apartada y una tabla del tamaño de tu lista de invitados.',
    texto: '¡Hola! Quiero apartar fecha para una posada',
    destacada: true,
  },
]

export default function Tablas() {
  return (
    <section className="section" id="tablas">
      <h2>
        Tablas para <span className="hl">cada ocasión</span>
      </h2>
      <p className="lead">Dinos cuántos son y te armamos la tabla que le queda a tu noche</p>
      <div className="cards">
        {TABLAS.map((t) => (
          <article key={t.nombre} className={`card${t.destacada ? ' card-destacada' : ''}`}>
            <span className="chip">{t.chip}</span>
            <h3>{t.nombre}</h3>
            <p>{t.detalle}</p>
            <a href={wa(t.texto)} target="_blank" rel="noopener">
              {t.destacada ? 'Aparta tu fecha' : 'Cotiza esta tabla'}
            </a>
          </article>
        ))}
      </div>
      <p className="cardsnote">¿Otra medida o una idea distinta? Cuéntanosla y la cotizamos</p>
    </section>
  )
}
