import { User } from "lucide-react"

const ReviewerNetworkSection = () => {
  const reviewers = [
    {
      initials: "SC",
      name: "Sarah Chen, Esq.",
      license: "NY Bar #1234567",
      country: "US",
      color: "trust-blue"
    },
    {
      initials: "MR",
      name: "Michael Rodriguez, Esq.",
      license: "CA Bar #7891234",
      country: "US",
      color: "success-green"
    },
    {
      initials: "EW",
      name: "Emma Wilson, Solicitor",
      license: "SRA #5678901",
      country: "UK",
      color: "quentlex-gold"
    }
  ]

  return (
    <section className="section-spacing px-6 reviewer-band">
      <div className="container mx-auto text-center">
        <h2 className="heading-2 mb-12">
          Compliance you can point to
        </h2>
        <p className="body-large max-w-3xl mx-auto mb-12">
          Licensed professionals attach name, license, and signature to every review. No vanity badges. Just accountable expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewers.map((reviewer, index) => (
            <div key={index} className="card p-8 space-y-4">
              <div className={`w-20 h-20 rounded-full bg-${reviewer.color}/10 text-${reviewer.color} flex items-center justify-center mx-auto mb-4`}>
                <User className="w-10 h-10" />
              </div>
              <h3 className="heading-3">{reviewer.name}</h3>
              <p className="body-regular text-warm-gray">License: {reviewer.license}</p>
              <p className="body-regular text-warm-gray font-semibold">{reviewer.country}</p>
            </div>
          ))}
        </div>

        <p className="body-regular max-w-4xl mx-auto mt-12">
          All reviewers are verified licensed attorneys in their respective jurisdictions. Each review includes full attorney identification and digital signature for complete accountability.
        </p>
      </div>
    </section>
  )
}

export default ReviewerNetworkSection

