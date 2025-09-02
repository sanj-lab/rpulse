import { User } from "lucide-react"

const ReviewerSection = () => {
  const reviewers = [
    {
      name: "Sarah Chen, Esq.",
      license: "NY Bar #1234567",
      jurisdiction: "US",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez, Esq.",
      license: "CA Bar #7891234", 
      jurisdiction: "US",
      initials: "MR"
    },
    {
      name: "Emma Wilson, Solicitor",
      license: "SRA #5678901",
      jurisdiction: "UK", 
      initials: "EW"
    }
  ]

  return (
    <section className="ql-reviewer-band ql-section">
      <div className="ql-container">
        <div className="text-center mb-16">
          <h2 className="ql-h2 mx-auto mb-6">
            Compliance you can point to
          </h2>
          <p className="ql-body-large mx-auto">
            Licensed professionals attach name, license, and signature to every review. No vanity badges. Just accountable expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewers.map((reviewer, index) => (
            <div key={index} className="ql-card text-center">
              {/* Professional Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full ql-bg-navy flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    {reviewer.initials}
                  </span>
                </div>
              </div>
              
              <h3 className="ql-h3 mb-2">
                {reviewer.name}
              </h3>
              
              <p className="ql-caption ql-text-warm mb-2">
                License: {reviewer.license}
              </p>
              
              <span className="inline-block px-3 py-1 ql-bg-blue/10 ql-text-blue text-sm font-medium rounded-full">
                {reviewer.jurisdiction}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="ql-body ql-text-warm max-w-3xl mx-auto">
            All reviewers are verified licensed attorneys in their respective jurisdictions. Each review includes full attorney identification and digital signature for complete accountability.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ReviewerSection

