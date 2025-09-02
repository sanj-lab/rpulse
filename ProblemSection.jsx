import { FileX, AlertTriangle, DollarSign } from "lucide-react"

const ProblemSection = () => {
  const problems = [
    {
      icon: FileX,
      title: "Founders drown in PDFs and shifting rules",
      description: "Compliance requirements change constantly, leaving teams scrambling through hundreds of documents without clear guidance."
    },
    {
      icon: AlertTriangle,
      title: "Regulators and exchanges cannot rely on self-reported claims",
      description: "Current compliance reporting lacks verification, creating risk for gatekeepers who must trust unsubstantiated assertions."
    },
    {
      icon: DollarSign,
      title: "Legal fees burn months of runway without clarity",
      description: "Traditional compliance reviews cost $50k+ and take 6+ weeks, with no guarantee of regulatory acceptance."
    }
  ]

  return (
    <section className="ql-section">
      <div className="ql-container">
        <div className="text-center mb-16">
          <h2 className="ql-h2 mx-auto mb-6">
            Compliance today is broken
          </h2>
          <p className="ql-body-large mx-auto">
            The current system fails founders, regulators, and exchanges alike
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="ql-card text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full ql-bg-light flex items-center justify-center">
                  <problem.icon className="w-8 h-8 ql-text-warm" />
                </div>
              </div>
              
              <h3 className="ql-h3 mb-4">
                {problem.title}
              </h3>
              
              <p className="ql-body">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Visual Comparison */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before - Chaos */}
          <div className="ql-card">
            <h4 className="ql-h3 mb-4 ql-text-amber">Current State</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="ql-body text-sm">Scattered PDF documents</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="ql-body text-sm">Unverifiable claims</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="ql-body text-sm">6+ week review cycles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="ql-body text-sm">$50k+ legal fees</span>
              </div>
            </div>
          </div>
          
          {/* After - Clarity */}
          <div className="ql-card ql-card-elevated">
            <h4 className="ql-h3 mb-4 ql-text-green">With Quentlex</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 ql-bg-green rounded-full"></div>
                <span className="ql-body text-sm">Single compliance snapshot</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 ql-bg-green rounded-full"></div>
                <span className="ql-body text-sm">Cryptographically verified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 ql-bg-green rounded-full"></div>
                <span className="ql-body text-sm">48-hour turnaround</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 ql-bg-green rounded-full"></div>
                <span className="ql-body text-sm">60% cost reduction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection

