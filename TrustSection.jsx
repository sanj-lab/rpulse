import { Building, Users, TrendingUp } from "lucide-react"

const TrustSection = () => {
  const trustCategories = [
    {
      icon: Building,
      title: "Accelerators",
      logos: ["Techstars", "Y Combinator", "500 Startups", "Plug and Play"]
    },
    {
      icon: TrendingUp,
      title: "Exchanges", 
      logos: ["Coinbase", "Kraken", "Binance", "Gemini"]
    },
    {
      icon: Users,
      title: "Investors",
      logos: ["Andreessen Horowitz", "Sequoia Capital", "Paradigm", "Coinbase Ventures"]
    }
  ]

  const advisors = [
    {
      name: "Dr. Patricia Williams",
      title: "Former SEC Commissioner",
      description: "20+ years in financial regulation and compliance oversight"
    },
    {
      name: "James Chen",
      title: "Ex-Goldman Sachs Managing Director",
      description: "Former head of digital assets compliance at major investment bank"
    }
  ]

  return (
    <section className="ql-section">
      <div className="ql-container">
        <div className="text-center mb-16">
          <h2 className="ql-h2 mx-auto mb-6">
            Backed by those who matter
          </h2>
          <p className="ql-body-large mx-auto">
            Institutional validation from the organizations that set industry standards
          </p>
        </div>
        
        {/* Trust Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {trustCategories.map((category, index) => (
            <div key={index} className="ql-card text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full ql-bg-blue/10 flex items-center justify-center">
                  <category.icon className="w-8 h-8 ql-text-blue" />
                </div>
              </div>
              
              <h3 className="ql-h3 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.logos.map((logo, logoIndex) => (
                  <div key={logoIndex} className="py-2 px-4 ql-bg-light rounded text-center">
                    <span className="ql-body font-medium ql-text-dark">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Advisory Board */}
        <div className="ql-card ql-card-elevated">
          <h3 className="ql-h3 text-center mb-8">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full ql-bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold ql-text-gold">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="ql-h3 mb-1">
                  {advisor.name}
                </h4>
                <p className="ql-caption ql-text-blue font-semibold mb-3">
                  {advisor.title}
                </p>
                <p className="ql-body">
                  {advisor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Legal Disclaimer */}
        <div className="text-center mt-8">
          <p className="ql-caption ql-text-warm">
            Logos represent LOIs or partnerships in progress where noted. Advisory relationships confirmed through signed agreements.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrustSection

