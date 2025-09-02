import { CheckCircle } from "lucide-react"

const CTABannerSection = () => {
  return (
    <section className="cta-banner section-spacing px-6">
      <div className="container mx-auto text-center">
        <h2 className="heading-2 mb-6">
          Build trust. Launch faster.
        </h2>
        <p className="body-large max-w-3xl mx-auto mb-12">
          Stop letting compliance slow you down. Get the verification you need to move forward with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary text-lg px-8 py-4">Book a Demo</button>
          <button className="btn-secondary text-lg px-8 py-4">See a Snapshot</button>
        </div>
      </div>
    </section>
  )
}

export default CTABannerSection

