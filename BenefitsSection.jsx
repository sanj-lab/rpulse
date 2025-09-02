import { TrendingUp, Clock, DollarSign, Shield } from "lucide-react"

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      metric: "Cut onboarding review from weeks to hours",
      description: "Reduce compliance review time from 6+ weeks to 48 hours with structured workflows and pre-verified frameworks."
    },
    {
      icon: DollarSign,
      metric: "Reduce upfront compliance costs by more than 60 percent",
      description: "Lower initial compliance expenses from $50k+ to under $20k through efficient processes and reusable snapshots."
    },
    {
      icon: Shield,
      metric: "Lower exposure with real-time monitoring",
      description: "Continuous compliance monitoring reduces regulatory risk and provides early warning of potential issues."
    }
  ]

  return (
    <section className="ql-section">
      <div className="ql-container">
        <div className="text-center mb-16">
          <h2 className="ql-h2 mx-auto mb-6">
            Compliance that works as fast as you do
          </h2>
          <p className="ql-body-large mx-auto">
            Quantified improvements that matter to your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="ql-card text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full ql-bg-green/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 ql-text-green" />
                </div>
              </div>
              
              <h3 className="ql-h3 mb-4">
                {benefit.metric}
              </h3>
              
              <p className="ql-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Performance Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Compliance Score Donut */}
          <div className="ql-card text-center">
            <h4 className="ql-h3 mb-6">Average Compliance Score</h4>
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="ql-text-light"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset="30.14"
                  className="ql-text-green ql-donut-animate"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold ql-text-green">88</div>
                  <div className="ql-caption ql-text-warm">out of 100</div>
                </div>
              </div>
            </div>
            <p className="ql-body">
              Quentlex clients achieve an average compliance score of 88/100, well above industry standards.
            </p>
          </div>
          
          {/* Time Reduction Chart */}
          <div className="ql-card">
            <h4 className="ql-h3 mb-6 text-center">Review Time Comparison</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="ql-body">Traditional Process</span>
                  <span className="ql-caption font-semibold">6+ weeks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="ql-bg-amber h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="ql-body">With Quentlex</span>
                  <span className="ql-caption font-semibold">48 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="ql-bg-green h-3 rounded-full" style={{ width: '11.9%' }}></div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 justify-center">
                  <TrendingUp className="w-5 h-5 ql-text-green" />
                  <span className="ql-caption ql-text-green font-semibold">
                    88% faster than traditional methods
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

