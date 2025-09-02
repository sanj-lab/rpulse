import { User, Scale, FileText, CheckCircle } from "lucide-react"

const HowItWorksSection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="container mx-auto text-center">
        <h2 className="heading-2 mb-12">
          From founder to gatekeeper, without the chaos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Founder Input */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-trust-blue/10 flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-trust-blue" />
            </div>
            <h3 className="heading-3">Founder input</h3>
            <p className="body-regular text-warm-gray">
              Complete guided workflows based on your jurisdiction and business model
            </p>
          </div>

          {/* Step 2: Lawyer Review */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-quentlex-gold/10 flex items-center justify-center mb-4">
              <Scale className="w-8 h-8 text-quentlex-gold" />
            </div>
            <h3 className="heading-3">Lawyer review</h3>
            <p className="body-regular text-warm-gray">
              Licensed attorney reviews your submission and provides expert analysis
            </p>
          </div>

          {/* Step 3: Snapshot */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-deep-navy/10 flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-deep-navy" />
            </div>
            <h3 className="heading-3">Snapshot</h3>
            <p className="body-regular text-warm-gray">
              Receive detailed compliance snapshot with clear scoring and reasoning
            </p>
          </div>

          {/* Step 4: Verify */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-success-green/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-success-green" />
            </div>
            <h3 className="heading-3">Verify</h3>
            <p className="body-regular text-warm-gray">
              Share cryptographically verifiable proof with stakeholders instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

