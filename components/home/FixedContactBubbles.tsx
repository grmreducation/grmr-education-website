import { FaDiscord, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:education@grmruf.org',
    icon: MdEmail,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/grmruf/',
    icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/UFGRMR/',
    icon: FaFacebookF,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/db4dJS7WX3',
    icon: FaDiscord,
  },
]

const FixedContactBubbles = () => {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2 rounded-full border border-purple-100 bg-white/85 px-2 py-3 shadow-lg backdrop-blur-md">
      {contactLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          title={label}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary text-white shadow-sm transition-colors duration-300 hover:bg-white hover:text-primary"
        >
          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  )
}

export default FixedContactBubbles
