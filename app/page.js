import HeroSection from "./Main"
import HighlightsSection from "./Highlights"
import TestimonialsSection from "./Testimonials"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />

    </div>
  )
}
