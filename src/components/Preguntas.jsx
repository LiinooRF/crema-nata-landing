import Halo from './Halo.jsx'
import './Preguntas.css'

const FAQS = [
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

export default function Preguntas() {
  return (
    <section className="section" id="preguntas">
      <h2>
        Preguntas <Halo>rápidas</Halo>
      </h2>
      <div className="faq">
        {FAQS.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p className="resp">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
