import About from "@/components/about/about"
import ContactUs from "@/components/contact/contact"
import OurFasilitas from "@/components/fasilitias/fasilitas"
import Footer from "@/components/footer/footer"
import HeroSection from "@/components/heroSection/heroSection"
import { Navbar } from "@/components/navbar/Navbar"
import Service from "@/components/ourService/service"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Service />
      <OurFasilitas />
      <ContactUs />
      <Footer />
    </div>
  )
}
