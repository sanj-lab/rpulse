import { CheckCircle, Clock, Hash, FileText } from "lucide-react"

const GatekeeperSection = () => {
  return (
    <section className="ql-section">
      <div className="ql-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="ql-h2 mb-6">
              Proof regulators and exchanges can trust
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 ql-text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="ql-h3 mb-2">Real-time compliance by jurisdiction</h3>
                  <p className="ql-body">
                    Get instant visibility into compliance status across multiple jurisdictions with live updates.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <FileText className="w-6 h-6 ql-text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="ql-h3 mb-2">Clear reasoning for pass, conditional, or fail</h3>
                  <p className="ql-body">
                    No black box decisions. Every compliance determination includes detailed reasoning and evidence.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Hash className="w-6 h-6 ql-text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="ql-h3 mb-2">Verification backed by signatures and on-chain anchors</h3>
                  <p className="ql-body">
                    Cryptographic proof ensures compliance claims can't be forged or disputed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Verification Modal */}
          <div className="flex justify-center">
            <div className="ql-card ql-card-elevated max-w-md w-full">
              <div className="text-center mb-6">
                <h4 className="ql-h3 mb-2">Verification Status</h4>
                <div className="inline-flex items-center gap-2 px-4 py-2 ql-bg-green/10 ql-text-green text-sm font-medium rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  VALID
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="ql-caption mb-1">Snapshot Hash</p>
                  <p className="font-mono text-xs ql-text-warm break-all">
                    0x7f9a2b8c4d5e6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5
                  </p>
                </div>
                
                <div>
                  <p className="ql-caption mb-1">Timestamp</p>
                  <p className="ql-body">2025-01-09 14:32:15 UTC</p>
                </div>
                
                <div>
                  <p className="ql-caption mb-1">Reviewer Signature</p>
                  <p className="font-mono text-xs ql-text-warm break-all">
                    0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2
                  </p>
                </div>
                
                <div>
                  <p className="ql-caption mb-1">Blockchain Anchor</p>
                  <div className="flex items-center gap-2">
                    <span className="ql-body">Ethereum Block #18,234,567</span>
                    <CheckCircle className="w-4 h-4 ql-text-green" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <button className="w-full ql-btn-verify ql-focus-visible">
                  View on Blockchain
                </button>
                <p className="text-center ql-caption ql-text-warm mt-2">
                  This verification is cryptographically secured and cannot be forged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GatekeeperSection

