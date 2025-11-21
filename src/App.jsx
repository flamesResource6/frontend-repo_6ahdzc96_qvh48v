import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import PainPoints from './components/PainPoints'
import Differentiators from './components/Differentiators'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Pricing from './components/Pricing'
import WhyPro from './components/WhyPro'
import Testimonials from './components/Testimonials'
import Creators from './components/Creators'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <Differentiators />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <WhyPro />
        <Testimonials />
        <Creators />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
