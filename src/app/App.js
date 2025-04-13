import Header from "../Components/Header"
import HeroSection from "../Components/HeroSection"
import './App.css'
import AboutSection from "../Components/AboutSection"
import ServicesSection from "../Components/ServiceSection"
import FeedbackSection from "../Components/FeedbackSection"
import CTASection from "../Components/CTASection"
function App() {
  return (
    <div style={{ backgroundColor: "#ffffff" }} className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <FeedbackSection/>
      <CTASection/>
    </div>
  )
}

export default App
