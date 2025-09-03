import { Shield, Zap, Link2 } from "lucide-react"

const SolutionSection = ({ id }) => {
  const solutions = [
    {
      icon: Zap,
      title: "Structured",
      subtitle: "Guided workflows built on real regulatory frameworks",
      description: "Our platform transforms complex compliance requirements into clear, step-by-step workflows based on actual regulatory guidance from major jurisdictions.",
      color: "gold"
    },
    {
      icon: Shield,
      title: "Verifiable", 
      subtitle: "Licensed lawyers certify every snapshot",
      description: "Every compliance snapshot is reviewed and certified by licensed attorneys in the relevant jurisdiction, with full professional accountability.",
      color: "blue"
    },
    {
      icon: Link2,
      title: "Trusted",
      subtitle: "Snapshots are cryptographically anchored and instantly shareable",
      description: "Compliance snapshots are anchored on-chain with cryptographic proof, making them instantly verifiable by any regulator or exchange.",
      color: "green"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      gold: {
        bg: "from-[hsl(var(--ql-gold))] to-[hsl(var(--ql-gold-dark))]",
        text: "ql-text-gold",
        accent: "bg-[hsl(var(--ql-gold))]/10 text-[hsl(var(--ql-gold))]",
        border: "border-[hsl(var(--ql-gold))]/20"
      },
      blue: {
        bg: "from-[hsl(var(--ql-trust-blue))] to-blue-600",
        text: "ql-text-blue", 
        accent: "bg-[hsl(var(--ql-trust-blue))]/10 text-[hsl(var(--ql-trust-blue))]",
        border: "border-[hsl(var(--ql-trust-blue))]/20"
      },
      green: {
        bg: "from-[hsl(var(--ql-success-green))] to-green-600",
        text: "ql-text-green",
        accent: "bg-[hsl(var(--ql-success-green))]/10 text-[hsl(var(--ql-success-green))]",
        border: "border-[hsl(var(--ql-success-green))]/20"
      }
    }
    return colorMap[color]
  }

  return (
    <section id={id} className="ql-product-band ql-section relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="ql-gradient-orb w-[400px] h-[400px] top-0 left-0 opacity-20" />
      <div className="ql-gradient-orb--blue w-[350px] h-[350px] -bottom-24 -right-24 opacity-15" />
      
      <div className="ql-container relative">
        <div className="text-center mb-16 ql-fade-in-up">
          <h2 className="ql-h2 mx-auto mb-6">
            Structured. Verifiable. Trusted.
          </h2>
          <p className="ql-body-large mx-auto">
            The compliance infrastructure that regulators, exchanges, and founders can rely on
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color)
            return (
              <div key={index} className="text-center ql-luxury-hover group">
                {/* Enterprise Icon with Gradient */}
                <div className="flex justify-center mb-8">
                  <div className={`
                    w-24 h-24 rounded-3xl relative overflow-hidden
                    bg-gradient-to-br ${colors.bg}
                    group-hover:scale-110 transition-all duration-500
                    flex items-center justify-center
                    shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:shadow-black/20
                  `}>
                    <solution.icon className="w-12 h-12 text-white relative z-10" />
                    
                    {/* Luxury Shine Effect */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 
                      bg-gradient-to-tr from-transparent via-white/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                
                <h3 className="ql-h3 mb-3">
                  {solution.title}
                </h3>
                
                <div className={`
                  inline-block px-4 py-2 rounded-full mb-6 font-semibold text-sm
                  ${colors.accent} ${colors.border} border
                  group-hover:scale-105 transition-transform duration-300
                `}>
                  {solution.subtitle}
                </div>
                
                <p className="ql-body">
                  {solution.description}
                </p>

                {/* Floating Accent Line */}
                <div className={`
                  w-16 h-1 mx-auto mt-6 rounded-full
                  bg-gradient-to-r ${colors.bg}
                  opacity-0 group-hover:opacity-100 
                  transform translate-y-2 group-hover:translate-y-0
                  transition-all duration-500
                `} />
              </div>
            )
          })}
        </div>
        
        {/* Enhanced Snapshot Preview */}
        <div className="max-w-3xl mx-auto">
          <div className="ql-card-elevated ql-luxury-hover relative overflow-hidden">
            {/* Luxury Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--ql-gold))] to-[hsl(var(--ql-trust-blue))] 
                rounded-full blur-3xl" />
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="ql-h3 mb-2 ql-floating-animation">DeFi Protocol Alpha</h4>
                <div className="flex items-center gap-3">
                  <span className="inline-block px-4 py-2 bg-[hsl(var(--ql-trust-blue))]/10 
                    text-[hsl(var(--ql-trust-blue))] text-sm font-semibold rounded-full border 
                    border-[hsl(var(--ql-trust-blue))]/20">
                    United States
                  </span>
                  <span className="text-xs ql-text-warm">
                    Reviewed on {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-3 px-6 py-3 
                  bg-gradient-to-r from-[hsl(var(--ql-success-green))]/10 to-[hsl(var(--ql-success-green))]/5
                  text-[hsl(var(--ql-success-green))] text-lg font-bold rounded-xl 
                  border border-[hsl(var(--ql-success-green))]/20
                  shadow-lg shadow-[hsl(var(--ql-success-green))]/10">
                  <Shield className="w-6 h-6" />
                  VERIFIED
                </div>
              </div>
            </div>
            
            {/* Enhanced Compliance Score */}
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white 
              border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="ql-h3 text-lg">Compliance Score</span>
                <span className="text-3xl font-bold ql-text-green">88/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[hsl(var(--ql-success-green))] 
                  to-green-400 rounded-full ql-donut-animate relative overflow-hidden"
                  style={{ width: '88%' }}>
                  {/* Shimmer Effect */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 
                    bg-gradient-to-r from-transparent via-white/40 to-transparent
                    animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Key Checks with Enhanced Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "KYC/AML procedures verified", icon: Shield },
                { label: "Securities law compliance confirmed", icon: Zap },
                { label: "Data protection measures adequate", icon: Link2 }
              ].map((check, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl 
                  bg-green-50 border border-green-100 ql-luxury-hover group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--ql-success-green))] 
                    to-green-500 flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300">
                    <check.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="ql-body text-sm font-medium text-green-800">
                    {check.label}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Verification Footer */}
            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br 
                    from-[hsl(var(--ql-gold))] to-[hsl(var(--ql-gold-dark))] 
                    flex items-center justify-center text-white font-bold">
                    SC
                  </div>
                  <div>
                    <p className="ql-body font-semibold">Sarah Chen, Esq.</p>
                    <p className="ql-caption ql-text-warm">License: NY Bar #1234567</p>
                  </div>
                </div>
                <button className="ql-btn-verify ql-focus-visible">
                  View on Blockchain
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection