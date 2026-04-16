import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home',    href: '#',        active: true  },
  { label: 'QSAS',   href: '#qsas',    active: false },
  { label: 'API',    href: '#api',     active: false },
  { label: 'About',  href: '#about',   active: false },
  { label: 'Contact',href: '#contact', active: false },
]

export default function Navbar() {
  return (
    <nav
      className="relative z-20 w-full"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <img
            src={logo}
            alt="David Carealle Digital Services"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-sans transition-colors duration-200 no-underline"
                style={{ color: link.active ? '#000000' : '#6F6F6F' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = '#000000')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = link.active
                    ? '#000000'
                    : '#6F6F6F')
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm font-sans font-medium no-underline
                     rounded-full px-6 py-2.5 transition-transform duration-200
                     hover:scale-[1.03]"
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
          }}
        >
          Explore Services
        </a>

        {/* Mobile hamburger — simple */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="block w-5 h-0.5 bg-black" />
          <span className="block w-5 h-0.5 bg-black" />
          <span className="block w-5 h-0.5 bg-black" />
        </button>

      </div>
    </nav>
  )
}
