import { ArrowRight, User, FileCheck, Shield, Zap } from "lucide-react"

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: User,
      title: "Founder Input",
      subtitle: "Guided Workflows",
      description: "Complete structured workflows based on regulatory frameworks for your jurisdiction and business model.",
      color: "gold"
    },
    {
      number: "02", 
      icon: FileCheck,
      title: "Expert Review",
      subtitle: "Named & Licensed",
      description: "Licensed attorneys review your submission, attach their professional credentials, and provide detailed analysis.",
      color: "blue"
    },
    {
      number: "03",
      icon: Shield,
      title: "Compliance Score",
      subtitle: "Pass, Conditional, or Fail",
      description: "Receive a comprehensive compliance snapshot with clear scoring and specific recommendations for improvement.",
      color: "green"
    },
    {
      number: "04",
      icon: Zap,
      title: "Instant Verify",
      subtitle: "One-Click Blockchain Proof",
      description: "Share cryptographically verifiable snapshots with regulators, exchanges, or investors instantly.",
      color: "purple"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      gold: {
        bg: "from-[hsl(var(--ql-gold))] to-[hsl(var(--ql-gold-dark))]",
        text: "text-[hsl(var(--ql-gold))]",
        accent: "bg-[hsl(var(--ql-gold))]/10 text-[hsl(var(--ql-gold))] border-[hsl(var(--ql-gold))]/20"
      },
      blue: {
        bg: "from-[hsl(var(--ql-trust-blue))] to-blue-600",
        text: "text-[hsl(var(--ql-trust-blue))]",
        accent: "bg-[hsl(var(--ql-trust-blue))]/10 text-[hsl(var(--ql-trust-blue))] border-[hsl(var(--ql-trust-blue))]/20"
      },
      green: {
        bg: "from-[hsl(var(--ql-success-green))] to-green-600",
        text: "text-[hsl(var(--ql-success-green))]",
        accent: "bg-[hsl(var(--ql-success-green))]/10 text-[hsl(var(--ql-success-green))] border-[hsl(var(--ql-success-green))]/20"
      },
      purple: {
        bg: "from-purple-500 to-purple-700",
        text: "text-purple-600",
        accent: "bg-purple-50 text-purple-600 border-purple-200"
      }
    }
    return colorMap[color]
  }

  return (
    <section className="ql-section relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="ql-gradient-orb w-[500px] h-[500px] top-1/2 -left-60 opacity-20" />
      <div className="ql-gradient-orb--blue w-[400px] h-[400px] top-0 -right-48 opacity-15" />
      
      <div className="ql-container relative">
        <div className="text-center mb-16 ql-fade-in-up">
          <h2 className="ql-h2 mx-auto mb-6">
            From founder to gatekeeper, without the chaos
          </h2>
          <p className="ql-body-large mx-auto">
            A clear, linear process that reduces complexity and builds institutional trust
          </p>
        </div>
        
        {/* Enhanced Process Flow */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between mb-12">
              {steps.map((step, index) => {
                const colors = getColorClasses(step.color)
                return (
                  <div key={index} className="flex items-center group">
                    {/* Step Card */}
                    <div className="text-center max-w-xs ql-luxury-hover">
                      {/* Enterprise Icon */}
                      <div className="flex justify-center mb-6">
                        <div className={`
                          w-28 h-28 rounded-3xl relative overflow-hidden
                          bg-gradient-to-br ${colors.bg}
                          group-hover:scale-110 transition-all duration-500
                          flex items-center justify-center
                          shadow-xl shadow-black/10 group-hover:shadow-2xl group-hover:shadow-black/20
                        `}>
                          <step.icon className="w-14 h-14 text-white relative z-10" />
                          
                          {/* Step Number Badge */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 
                            bg-white rounded-full flex items-center justify-center
                            shadow-lg group-hover:scale-125 transition-transform duration-300">
                            <span className={`text-sm font-bold ${colors.text}`}>
                              {step.number}
                            </span>
                          </div>
                          
                          {/* Luxury Shine Effect */}
                          <div className="absolute top-0 left-0 right-0 bottom-0 
                            bg-gradient-to-tr from-transparent via-white/20 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                      
                      <h3 className="ql-h3 mb-3">
                        {step.title}
                      </h3>
                      
                      <div className={`
                        inline-block px-4 py-2 rounded-full mb-4 font-semibold text-sm border
                        ${colors.accent}
                        group-hover:scale-105 transition-transform duration-300
                      `}>
                        {step.subtitle}
                      </div>
                      
                      <p className="ql-body text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className={`
                        w-20 h-1 mx-auto mt-6 rounded-full
                        bg-gradient-to-r ${colors.bg}
                        opacity-0 group-hover:opacity-100 
                        transform translate-y-2 group-hover:translate-y-0
                        transition-all duration-500
                      `} />
                    </div>
                    
                    {/* Luxury Arrow */}
                    {index < steps.length - 1 && (
                      <div className="flex items-center justify-center px-8">
                        <div className="relative">
                          <ArrowRight className="w-10 h-10 ql-text-warm opacity-60 
                            transition-all duration-500 group-hover:opacity-100 
                            group-hover:scale-110 group-hover:translate-x-2" />
                          
                          {/* Animated Trail */}
                          <div className="absolute top-1/2 left-0 w-full h-px 
                            bg-gradient-to-r from-transparent via-gray-300 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Mobile Flow */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color)
              return (
                <div key={index} className="flex gap-6 ql-luxury-hover group">
                  {/* Mobile Icon */}
                  <div className="flex-shrink-0">
                    <div className={`
                      w-20 h-20 rounded-2xl relative overflow-hidden
                      bg-gradient-to-br ${colors.bg}
                      group-hover:scale-110 transition-all duration-500
                      flex items-center justify-center
                      shadow-lg shadow-black/10
                    `}>
                      <step.icon className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Step Number */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 
                        bg-white rounded-full flex items-center justify-center
                        shadow-md">
                        <span className={`text-xs font-bold ${colors.text}`}>
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="flex-1">
                    <h3 className="ql-h3 mb-2">
                      {step.title}
                    </h3>
                    
                    <div className={`
                      inline-block px-3 py-1 rounded-full mb-4 font-medium text-sm border
                      ${colors.accent}
                    `}>
                      {step.subtitle}
                    </div>
                    
                    <p className="ql-body">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 mt-24 w-px h-12 
                      bg-gradient-to-b from-gray-300 to-transparent opacity-30" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto ql-card-elevated">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold ql-text-gold mb-2">48hrs</div>
                <div className="ql-caption ql-text-warm font-medium">Average Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold ql-text-blue mb-2">100%</div>
                <div className="ql-caption ql-text-warm font-medium">Licensed Reviewers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold ql-text-green mb-2">60%</div>
                <div className="ql-caption ql-text-warm font-medium">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection