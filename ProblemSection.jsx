import { AlertCircle, TrendingDown, DollarSign } from "lucide-react"

const ProblemSection = ({ id }) => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Founders drown in PDFs and shifting rules",
      description: "Compliance requirements change constantly, leaving teams scrambling through hundreds of documents without clear guidance.",
      metric: "200+",
      metricLabel: "Avg. documents per review"
    },
    {
      icon: TrendingDown,
      title: "Regulators and exchanges cannot rely on self-reported claims",
      description: "Current compliance reporting lacks verification, creating risk for gatekeepers who must trust unsubstantiated assertions.",
      metric: "73%",
      metricLabel: "Failure rate on audit"
    },
    {
      icon: DollarSign,
      title: "Legal fees burn months of runway without clarity",
      description: "Traditional compliance reviews cost $50k+ and take 6+ weeks, with no guarantee of regulatory acceptance.",
      metric: "$85k",
      metricLabel: "Average legal cost"
    }
  ]

  return (
    <section id={id} className="ql-section relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="ql-gradient-orb w-[500px] h-[500px] -top-48 -left-48 opacity-30" />
      <div className="ql-gradient-orb--blue w-[300px] h-[300px] -bottom-32 -right-32 opacity-25" />
      
      <div className="ql-container relative">
        <div className="text-center mb-16 ql-fade-in-up">
          <h2 className="ql-h2 mx-auto mb-6">
            Compliance today is broken
          </h2>
          <p className="ql-body-large mx-auto">
            The current system fails founders, regulators, and exchanges alike
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="ql-card ql-luxury-hover group">
              <div className="flex justify-center mb-6">
                <div className="ql-enterprise-icon">
                  <problem.icon className="w-8 h-8 ql-text-gold" />
                </div>
              </div>
              
              {/* Metric Badge */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-gradient-to-r from-red-50 to-red-100 border border-red-200">
                  <span className="text-2xl font-bold text-red-600">{problem.metric}</span>
                  <span className="text-xs text-red-500 font-medium">{problem.metricLabel}</span>
                </div>
              </div>
              
              <h3 className="ql-h3 mb-4 text-center">
                {problem.title}
              </h3>
              
              <p className="ql-body text-center">
                {problem.description}
              </p>

              {/* Hover Effect Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 
                bg-gradient-to-r from-transparent via-red-300 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
        
        {/* Enhanced Visual Comparison */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Before - Chaos */}
          <div className="ql-card border-l-4 border-l-red-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-3xl 
              flex items-center justify-center">
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
            
            <h4 className="ql-h3 mb-6 text-red-600">Current State</h4>
            <div className="space-y-4">
              {[
                "Scattered PDF documents",
                "Unverifiable claims", 
                "6+ week review cycles",
                "$50k+ legal fees"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg 
                  bg-red-50 border border-red-100 ql-luxury-hover">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 
                    rounded-full flex-shrink-0" />
                  <span className="ql-body text-sm font-medium text-red-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* After - Clarity */}
          <div className="ql-card-elevated border-l-4 border-l-green-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 ql-bg-green/10 rounded-bl-3xl 
              flex items-center justify-center">
              <AlertCircle className="w-8 h-8 ql-text-green" />
            </div>
            
            <h4 className="ql-h3 mb-6 ql-text-green">With Quentlex</h4>
            <div className="space-y-4">
              {[
                "Single compliance snapshot",
                "Cryptographically verified",
                "48-hour turnaround", 
                "60% cost reduction"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg 
                  bg-green-50 border border-green-100 ql-luxury-hover group">
                  <div className="w-3 h-3 ql-bg-green rounded-full flex-shrink-0 
                    group-hover:scale-125 transition-transform duration-300" />
                  <span className="ql-body text-sm font-medium text-green-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection