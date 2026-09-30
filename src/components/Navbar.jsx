import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080d1a]/85 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Name / Personal Branding */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
        >
          {portfolioData.personal.name}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 transition-all"
          >
            CV / Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080d1a] border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-300 hover:text-blue-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-4 rounded-lg text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800"
            >
              CV / Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-4 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
