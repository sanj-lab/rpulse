import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import QuentlexLogo from "./src/components/ui/QuentlexLogo"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "#problem", label: "Problem" },
    { href: "#solutions", label: "Solutions" },
    { href: "#compliance", label: "Compliance" },
    { href: "#backed-by", label: "Backed By" },
  ]

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg shadow-black/5' 
        : 'bg-transparent'
      }
    `}>
      <div className="ql-container">
        <div className="flex justify-between items-center py-4">
          {/* Enterprise Logo */}
          <div className="flex items-center ql-luxury-hover">
            <QuentlexLogo size="header" showText={true} />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative ql-text-warm hover:ql-text-dark 
                  transition-all duration-300 cubic-bezier(0.2, 0.8, 0.2, 1)
                  ql-focus-visible font-medium
                  after:content-[''] after:absolute after:w-0 after:h-0.5 
                  after:bottom-0 after:left-0 after:bg-gradient-to-r 
                  after:from-[hsl(var(--ql-gold))] after:to-[hsl(var(--ql-trust-blue))]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="ql-btn-primary ql-focus-visible">
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center ql-luxury-hover rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 ql-text-dark" />
            ) : (
              <Menu className="w-6 h-6 ql-text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <nav className="py-6 space-y-4 border-t border-gray-100/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  block px-4 py-3 rounded-lg ql-text-warm hover:ql-text-dark 
                  hover:bg-gray-50 transition-all duration-300
                  ql-focus-visible font-medium
                "
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <button 
                className="w-full ql-btn-primary ql-focus-visible"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Luxury Background Gradient Orb */}
      <div 
        className={`
          ql-gradient-orb w-96 h-96 -top-48 -right-48 transition-opacity duration-700
          ${isScrolled ? 'opacity-30' : 'opacity-60'}
        `} 
      />
      <div 
        className={`
          ql-gradient-orb--blue w-64 h-64 -top-32 -left-32 transition-opacity duration-700
          ${isScrolled ? 'opacity-20' : 'opacity-40'}
        `} 
      />
    </header>
  )
}

export default Header