import useReveal from '../hooks/useReveal.js'
import { IconMail, IconWhatsapp, IconLinkedIn, IconCode } from './Icons.jsx'

const CONTACTS = [
  {
    key: 'Email',
    value: 'matiasdbruyn@gmail.com',
    href: 'mailto:matiasdbruyn@gmail.com',
    Icon: IconMail,
  },
  {
    key: 'WhatsApp',
    value: '11 3569-8876',
    href: 'https://wa.me/5491135698876',
    Icon: IconWhatsapp,
    external: true,
  },
  {
    key: 'LinkedIn',
    value: '/in/matiasdbruyn',
    href: 'https://www.linkedin.com/in/matiasdbruyn',
    Icon: IconLinkedIn,
    external: true,
  },
  {
    key: 'GitHub',
    value: 'github.com/Matiasdbruyn',
    href: 'https://github.com/Matiasdbruyn',
    Icon: IconCode,
    external: true,
  },
]

export default function Contact() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="contacto">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow">Contacto</p>
          <p>Disponible para nuevas oportunidades laborales.
            <br /> Elegí el medio de contacto que prefieras.</p>
        </div>

        <div className="contact-grid reveal" ref={gridRef}>
          {CONTACTS.map(({ key, value, href, Icon, external }) => (
            <a
              className="contact-card"
              href={href}
              key={key}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact-ic">
                <Icon />
              </span>
              <span>
                <span className="k">{key}</span>
                <br />
                <span className="v">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
