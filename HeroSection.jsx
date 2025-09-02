import { Lock } from "lucide-react"
import LuxuryBadge from "./LuxuryBadge"

const HeroSection = () => {
  return (
    <section className="ql-hero-bg ql-hash-pattern ql-section">
      <div className="ql-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content - Institutional Authority */}
          <div className="space-y-8 ql-fade-in-up">
            <h1 className="ql-h1">
              The Trust Layer for Web3 Compliance
            </h1>
            
            <p className="ql-body-large">
              Quentlex turns scattered documents and costly guesswork into cryptographically verifiable compliance snapshots.
            </p>
            
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="ql-btn-primary ql-focus-visible">
                Book a Demo
              </button>
              <button className="ql-btn-secondary ql-focus-visible">
                Verify a Snapshot
              </button>
            </div>
            
            {/* Trust Signal */}
            <div className="flex items-center gap-3 ql-text-warm">
              <Lock className="w-4 h-4" />
              <span className="ql-caption">
                On-chain anchored, lawyer reviewed, instantly verifiable
              </span>
            </div>
          </div>
          
          {/* The ONE Luxury 3D Element - Interactive Badge */}
          <LuxuryBadge />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

