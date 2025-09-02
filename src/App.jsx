import "./App.css"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HeroSection from "./components/sections/HeroSection"
import ProblemSection from "./components/sections/ProblemSection"
import SolutionSection from "./components/sections/SolutionSection"
import ProcessSection from "./components/sections/ProcessSection"
import ReviewerSection from "./components/sections/ReviewerSection"
import GatekeeperSection from "./components/sections/GatekeeperSection"
import BenefitsSection from "./components/sections/BenefitsSection"
import TrustSection from "./components/sections/TrustSection"
import CTASection from "./components/sections/CTASection"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <ReviewerSection />
        <GatekeeperSection />
        <BenefitsSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
