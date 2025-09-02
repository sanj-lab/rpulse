import { Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="ql-bg-dark ql-section">
      <div className="ql-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold font-serif mb-4">Quentlex</h3>
            <p className="ql-text-warm text-sm">
              © {new Date().getFullYear()} Quentlex. All rights reserved.
            </p>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold font-serif mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="ql-text-warm hover:text-white transition-colors duration-200 ql-focus-visible">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="ql-text-warm hover:text-white transition-colors duration-200 ql-focus-visible">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="ql-text-warm hover:text-white transition-colors duration-200 ql-focus-visible">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-white text-lg font-semibold font-serif mb-4">Connect</h3>
            <a 
              href="#" 
              className="ql-text-warm hover:text-white transition-colors duration-200 ql-focus-visible inline-block"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

