import { CheckCircle, AlertCircle } from "lucide-react"

const GatekeepersSection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="container mx-auto text-center">
        <h2 className="heading-2 mb-12">
          Proof regulators and exchanges can trust
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
              <p className="body-large">
                <span className="font-semibold">Real-time compliance by jurisdiction:</span> Get instant visibility into compliance status across multiple jurisdictions with live updates.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
              <p className="body-large">
                <span className="font-semibold">Clear reasoning for pass, conditional, or fail:</span> No black box decisions. Every compliance determination includes detailed reasoning and evidence.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-1" />
              <p className="body-large">
                <span className="font-semibold">Verification backed by signatures and on-chain anchors:</span> Cryptographic proof ensures compliance claims can't be forged or disputed.
              </p>
            </div>
          </div>

          {/* Compliance Snapshot Card */}
          <div className="card p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="heading-3">Verification Status</h3>
              <span className="bg-success-green/20 text-success-green text-xs font-bold px-3 py-1 rounded-full">VALID</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-warm-gray">Snapshot Hash</p>
                <p className="body-regular font-mono text-quentlex-dark break-all">0x7f9a2b8c4d5e6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5</p>
              </div>
              <div>
                <p className="text-sm text-warm-gray">Timestamp</p>
                <p className="body-regular font-mono text-quentlex-dark">2025-01-09 14:32:15 UTC</p>
              </div>
              <div>
                <p className="text-sm text-warm-gray">Reviewer Signature</p>
                <p className="body-regular font-mono text-quentlex-dark break-all">0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2</p>
              </div>
              <div>
                <p className="text-sm text-warm-gray">Blockchain Anchor</p>
                <p className="body-regular font-mono text-quentlex-dark">Ethereum Block #18,234,567 <CheckCircle className="w-4 h-4 inline-block text-success-green" /></p>
              </div>
            </div>

            <button className="btn-verify w-full">View on Blockchain</button>
            <p className="text-xs text-warm-gray text-center">This verification is cryptographically secured and cannot be forged.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GatekeepersSection

