import About from "@/components/about/about"
import HeroSection from "@/components/heroSection/heroSection"
import { Navbar } from "@/components/navbar/Navbar"
import OurService from "@/components/ourService/service"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <OurService />
    </div>
  )
}

