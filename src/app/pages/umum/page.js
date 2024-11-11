import Whatsapp from "@/components/chatWa/whatsapp"
import OurFasilitas from "@/components/fasilitias/fasilitas"
import Footer from "@/components/footer/footer"
import SubHeroSection from "@/components/heroSectionLayanan/subHeroSection"
import { Navbar } from "@/components/navbar/Navbar"

export default function Umum() {
  return (
    <div>
      <Navbar />
      <SubHeroSection />
      <Whatsapp />
      <OurFasilitas />
      <Footer />
    </div>
  )
}
