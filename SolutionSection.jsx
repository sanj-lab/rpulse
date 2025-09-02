import { CheckCircle, Shield, Link } from "lucide-react"

const SolutionSection = () => {
  const solutions = [
    {
      icon: CheckCircle,
      title: "Structured",
      subtitle: "Guided workflows built on real regulatory frameworks",
      description: "Our platform transforms complex compliance requirements into clear, step-by-step workflows based on actual regulatory guidance from major jurisdictions."
    },
    {
      icon: Shield,
      title: "Verifiable", 
      subtitle: "Licensed lawyers certify every snapshot",
      description: "Every compliance snapshot is reviewed and certified by licensed attorneys in the relevant jurisdiction, with full professional accountability."
    },
    {
      icon: Link,
      title: "Trusted",
      subtitle: "Snapshots are cryptographically anchored and instantly shareable",
      description: "Compliance snapshots are anchored on-chain with cryptographic proof, making them instantly verifiable by any regulator or exchange."
    }
  ]

  return (
    <section className="ql-product-band ql-section">
      <div className="ql-container">
        <div className="text-center mb-16">
          <h2 className="ql-h2 mx-auto mb-6">
            Structured. Verifiable. Trusted.
          </h2>
          <p className="ql-body-large mx-auto">
            The compliance infrastructure that regulators, exchanges, and founders can rely on
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full ql-bg-blue/10 flex items-center justify-center">
                  <solution.icon className="w-10 h-10 ql-text-blue" />
                </div>
              </div>
              
              <h3 className="ql-h3 mb-2">
                {solution.title}
              </h3>
              
              <p className="ql-caption ql-text-blue mb-4 font-semibold">
                {solution.subtitle}
              </p>
              
              <p className="ql-body">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Snapshot Preview - Real Product UI */}
        <div className="max-w-2xl mx-auto">
          <div className="ql-card ql-card-elevated">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="ql-h3 mb-1">DeFi Protocol Alpha</h4>
                <span className="inline-block px-3 py-1 ql-bg-blue/10 ql-text-blue text-sm font-medium rounded-full">
                  United States
                </span>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 ql-bg-green/10 ql-text-green text-sm font-medium rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  PASS
                </div>
              </div>
            </div>
            
            {/* Compliance Score */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="ql-caption">Compliance Score</span>
                <span className="ql-caption font-semibold">88/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="ql-bg-green h-2 rounded-full ql-donut-animate" 
                  style={{ width: '88%' }}
                ></div>
              </div>
            </div>
            
            {/* Key Checks */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 ql-text-green" />
                <span className="ql-body">KYC/AML procedures verified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 ql-text-green" />
                <span className="ql-body">Securities law compliance confirmed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 ql-text-green" />
                <span className="ql-body">Data protection measures adequate</span>
              </div>
            </div>
            
            {/* Verification */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="ql-caption">Reviewed by</p>
                  <p className="ql-body font-semibold">Sarah Chen, Esq.</p>
                  <p className="ql-caption ql-text-warm">License: NY Bar #1234567</p>
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

