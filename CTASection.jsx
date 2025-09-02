import { Shield } from "lucide-react"

const CTASection = () => {
  return (
    <section className="ql-cta-banner ql-section relative overflow-hidden">
      {/* Subtle Shield Motif */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
        style={{ transform: 'scale(2)' }}
      >
        <Shield className="w-96 h-96 ql-text-green" />
      </div>
      
      <div className="ql-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="ql-h2 mx-auto mb-6">
            Build trust. Launch faster.
          </h2>
          
          <p className="ql-body-large mx-auto mb-8">
            Join the compliance infrastructure that regulators trust, exchanges accept, and founders rely on to scale with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="ql-btn-primary ql-focus-visible">
              Book a Demo
            </button>
            <button className="ql-btn-secondary ql-focus-visible">
              See a Snapshot
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="ql-caption ql-text-warm">
              Trusted by 100+ Web3 companies across 15 jurisdictions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

