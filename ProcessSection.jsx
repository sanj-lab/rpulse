import { ArrowRight, User, FileCheck, Shield, CheckCircle } from "lucide-react"

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: User,
      title: "Founder Input",
      subtitle: "Guided",
      description: "Complete structured workflows based on regulatory frameworks for your jurisdiction and business model."
    },
    {
      number: "02", 
      icon: FileCheck,
      title: "Lawyer Review",
      subtitle: "Named and Licensed",
      description: "Licensed attorneys review your submission, attach their professional credentials, and provide detailed analysis."
    },
    {
      number: "03",
      icon: Shield,
      title: "Snapshot",
      subtitle: "Pass, Conditional, or Fail with Score",
      description: "Receive a comprehensive compliance snapshot with clear scoring and specific recommendations for improvement."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Verify",
      subtitle: "One Click with On-Chain Proof",
      description: "Share cryptographically verifiable snapshots with regulators, exchanges, or investors instantly."
    }
  ]

  return (
    <section className="ql-section">
      <div className="ql-container">
        <div className="text-center mb-16">
          <h2 className="ql-h2 mx-auto mb-6">
            From founder to gatekeeper, without the chaos
          </h2>
          <p className="ql-body-large mx-auto">
            A clear, linear process that reduces complexity and builds trust
          </p>
        </div>
        
        {/* Process Flow */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step */}
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full ql-bg-blue/10 flex items-center justify-center mb-4 mx-auto">
                      <step.icon className="w-10 h-10 ql-text-blue" />
                    </div>
                    <div className="ql-caption ql-text-blue font-bold mb-1">
                      {step.number}
                    </div>
                    <h3 className="ql-h3 mb-1">
                      {step.title}
                    </h3>
                    <p className="ql-caption ql-text-blue font-semibold mb-3">
                      {step.subtitle}
                    </p>
                    <p className="ql-body text-sm max-w-xs">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-8 h-8 ql-text-warm mx-8 mt-[-80px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full ql-bg-blue/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 ql-text-blue" />
                  </div>
                </div>
                <div>
                  <div className="ql-caption ql-text-blue font-bold mb-1">
                    {step.number}
                  </div>
                  <h3 className="ql-h3 mb-1">
                    {step.title}
                  </h3>
                  <p className="ql-caption ql-text-blue font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="ql-body">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection

