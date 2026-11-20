import Halo from './Halo.jsx'
import './Pedir.css'

const PASOS = [
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

export default function Pedir() {
  return (
    <section className="section" id="pedir">
      <h2>
        Pedir tu tabla, en <Halo>tres pasos</Halo>
      </h2>
      <p className="lead">Sin formularios ni vueltas: todo por WhatsApp</p>
      <ol className="steps">
        {PASOS.map((p, i) => (
          <li key={p.titulo} className="step">
            <span className="num" aria-hidden="true">{i + 1}</span>
            <h3>{p.titulo}</h3>
            <p>{p.detalle}</p>
          </li>
        ))}
      </ol>
      <p className="zonanote">
        Entregamos en Guadalajara y zona metropolitana; el día y la hora los acomodamos al cotizar
      </p>
    </section>
  )
}
