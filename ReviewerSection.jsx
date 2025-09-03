import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Award, MapPin, Shield } from "lucide-react"

const ReviewerSection = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef(null)

  const reviewers = [
    {
      name: "Sarah Chen, Esq.",
      license: "NY Bar #1234567",
      jurisdiction: "United States",
      initials: "SC",
      specialties: ["Securities Law", "DeFi Protocols", "Token Economics"],
      experience: "12 years",
      cases: "200+",
      avatar: "/expert-avatar-1.png",
      gradient: "from-[hsl(var(--ql-gold))] to-[hsl(var(--ql-gold-dark))]"
    },
    {
      name: "Michael Rodriguez, Esq.",
      license: "CA Bar #7891234", 
      jurisdiction: "United States",
      initials: "MR",
      specialties: ["Financial Services", "Regulatory Compliance", "Fintech"],
      experience: "15 years",
      cases: "350+",
      avatar: "/expert-avatar-2.png",
      gradient: "from-[hsl(var(--ql-trust-blue))] to-blue-600"
    },
    {
      name: "Emma Wilson, Solicitor",
      license: "SRA #5678901",
      jurisdiction: "United Kingdom", 
      initials: "EW",
      specialties: ["Digital Assets", "Banking Law", "Privacy"],
      experience: "10 years",
      cases: "180+",
      avatar: "/expert-avatar-1.png",
      gradient: "from-[hsl(var(--ql-success-green))] to-green-600"
    },
    {
      name: "Dr. Hans Mueller",
      license: "BRA #9876543",
      jurisdiction: "Germany",
      initials: "HM",
      specialties: ["GDPR Compliance", "Crypto Regulation", "Cross-border"],
      experience: "18 years",
      cases: "400+",
      avatar: "/expert-avatar-2.png",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      name: "Yuki Tanaka, Esq.",
      license: "JFBA #1357924",
      jurisdiction: "Japan",
      initials: "YT",
      specialties: ["Digital Currency", "Financial Innovation", "Tech Law"],
      experience: "8 years",
      cases: "120+",
      avatar: "/expert-avatar-1.png",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Sophie Dubois, Avocate",
      license: "Paris Bar #2468135",
      jurisdiction: "France",
      initials: "SD",
      specialties: ["MiCA Regulation", "EU Digital Finance", "Compliance"],
      experience: "14 years",
      cases: "280+",
      avatar: "/expert-avatar-2.png",
      gradient: "from-indigo-500 to-blue-600"
    }
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons() // Initial check
      
      return () => container.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  return (
    <section className="ql-reviewer-band ql-section relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="ql-gradient-orb w-[600px] h-[600px] -top-80 -left-80 opacity-15" />
      <div className="ql-gradient-orb--blue w-[400px] h-[400px] -bottom-40 -right-40 opacity-20" />
      
      <div className="ql-container relative">
        <div className="text-center mb-12 ql-fade-in-up">
          <h2 className="ql-h2 mx-auto mb-6">
            Licensed expertise you can point to
          </h2>
          <p className="ql-body-large mx-auto">
            Licensed professionals attach name, license, and signature to every review. No vanity badges. Just accountable expertise.
          </p>
        </div>

        {/* Harvey Grade Scrolling Reviewers */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="ql-horizontal-scroll pb-8"
            onScroll={checkScrollButtons}
          >
            {reviewers.map((reviewer, index) => (
              <div key={index} className="ql-scroll-item ql-luxury-hover group">
                <div className="ql-card-elevated h-full relative overflow-hidden">
                  {/* Luxury Corner Accent */}
                  <div className={`
                    absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-10
                    bg-gradient-to-br ${reviewer.gradient}
                  `} />
                  
                  {/* Professional Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`
                        w-24 h-24 rounded-full flex items-center justify-center text-white 
                        font-bold text-xl shadow-lg
                        bg-gradient-to-br ${reviewer.gradient}
                        group-hover:scale-110 transition-all duration-500
                      `}>
                        {reviewer.initials}
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 
                        bg-gradient-to-br from-[hsl(var(--ql-success-green))] to-green-600 
                        rounded-full flex items-center justify-center
                        shadow-lg group-hover:scale-125 transition-transform duration-300">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Reviewer Info */}
                  <div className="text-center mb-6">
                    <h3 className="ql-h3 mb-2 text-lg">
                      {reviewer.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="ql-caption ql-text-warm">
                        License: {reviewer.license}
                      </p>
                      
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4 ql-text-blue" />
                        <span className="inline-block px-3 py-1 bg-[hsl(var(--ql-trust-blue))]/10 
                          text-[hsl(var(--ql-trust-blue))] text-sm font-medium rounded-full
                          border border-[hsl(var(--ql-trust-blue))]/20">
                          {reviewer.jurisdiction}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="text-2xl font-bold ql-text-gold">{reviewer.experience}</div>
                      <div className="text-xs ql-text-warm font-medium">Experience</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="text-2xl font-bold ql-text-blue">{reviewer.cases}</div>
                      <div className="text-xs ql-text-warm font-medium">Cases</div>
                    </div>
                  </div>
                  
                  {/* Specialties */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 ql-text-gold" />
                      <span className="text-sm font-semibold ql-text-dark">Specialties</span>
                    </div>
                    <div className="space-y-1">
                      {reviewer.specialties.map((specialty, idx) => (
                        <div key={idx} className="text-xs px-3 py-1 rounded-full 
                          bg-gradient-to-r from-gray-50 to-white border border-gray-100
                          ql-text-warm font-medium">
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Luxury Bottom Accent */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-r ${reviewer.gradient}
                  `} />
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Scroll Controls */}
          <div className="ql-scroll-controls">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="ql-scroll-btn ql-focus-visible"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="ql-scroll-btn ql-focus-visible"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto ql-card border border-[hsl(var(--ql-gold))]/20 
            bg-gradient-to-r from-[hsl(var(--ql-gold))]/5 to-transparent">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--ql-gold))] 
                  to-[hsl(var(--ql-gold-dark))] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h4 className="ql-h3 mb-3 ql-text-dark">Licensed & Accountable</h4>
                <p className="ql-body ql-text-warm">
                  All reviewers are verified licensed attorneys in their respective jurisdictions. 
                  Each review includes full attorney identification and digital signature for complete accountability. 
                  No anonymous reviews, no vanity badges—just professional expertise you can verify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewerSection