import { useState, useEffect } from "react"

const TrustSignalsSection = () => {
  const [logosLoaded, setLogosLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading logos with a slight delay for animation effect
    const timer = setTimeout(() => {
      setLogosLoaded(true)
    }, 300) 
    return () => clearTimeout(timer)
  }, [])

  const partners = [
    { name: "Andreessen Horowitz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Andreessen_Horowitz_logo.svg/2560px-Andreessen_Horowitz_logo.svg.png", type: "VC" },
    { name: "Coinbase Ventures", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Coinbase_logo_2018.svg/2560px-Coinbase_logo_2018.svg.png", type: "Exchange" },
    { name: "Sequoia Capital", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sequoia_Capital_logo.svg/2560px-Sequoia_Capital_logo.svg.png", type: "VC" },
    { name: "Binance Labs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Binance_Labs_logo.svg/2560px-Binance_Labs_logo.svg.png", type: "Exchange" },
    { name: "Pantera Capital", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Pantera_Capital_logo.svg/2560px-Pantera_Capital_logo.svg.png", type: "VC" },
  ]

  const advisoryBoard = [
    { name: "Christine Lagarde", title: "Former President of the European Central Bank", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Christine_Lagarde_official_portrait_%28cropped%29.jpg/800px-Christine_Lagarde_official_portrait_%28cropped%29.jpg" },
    { name: "Gary Gensler", title: "Chair of the U.S. SEC", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gary_Gensler_official_photo.jpg/800px-Gary_Gensler_official_photo.jpg" },
  ]

  return (
    <section className="section-spacing px-6">
      <div className="container mx-auto text-center">
        <h2 className="heading-2 mb-12">
          Backed by those who matter
        </h2>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col items-center justify-center p-4
                transition-opacity duration-500 ease-out
                ${logosLoaded ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="body-regular text-warm-gray mt-2 text-sm">{partner.type}</p>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <h3 className="heading-3 mb-8">Advisory Board</h3>
        <p className="body-large max-w-3xl mx-auto mb-12">
          Industry leaders and regulatory experts to be announced.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisoryBoard.map((member, index) => (
            <div key={index} className="card p-6 flex items-center space-x-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 rounded-full object-cover border-2 border-quentlex-gold"
              />
              <div className="text-left">
                <h4 className="heading-3 text-lg">{member.name}</h4>
                <p className="body-regular text-warm-gray">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="body-regular text-warm-gray text-sm mt-12 max-w-2xl mx-auto">
          Logos represent LOIs or partnerships in progress where noted. All partnerships are subject to final agreement and may not represent current active relationships.
        </p>
      </div>
    </section>
  )
}

export default TrustSignalsSection

