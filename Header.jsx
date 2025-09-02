//project to chnage
import QuentlexLogo from "../k (1)/src/components/ui/QuentlexLogo"
const Header = () => {
  return (
    <header className="py-2 border-b border-gray-100">
      <div className="ql-container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src="/expert-avatar-2.png" alt="Quentlex" className="h-8 mr-3" /> */}
            <div className="flex items-center space-x-4">
              <QuentlexLogo size="header" showText={true} />
            </div>
            {/* <span className="ql-text-dark text-xl font-semibold font-serif">Quentlex</span> */}
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="ql-text-warm hover:ql-text-dark transition-colors duration-200 ql-focus-visible">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="ql-text-warm hover:ql-text-dark transition-colors duration-200 ql-focus-visible">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="ql-text-warm hover:ql-text-dark transition-colors duration-200 ql-focus-visible">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="ql-text-warm hover:ql-text-dark transition-colors duration-200 ql-focus-visible">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* CTA */}
          <button className="ql-btn-primary ql-focus-visible">
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

