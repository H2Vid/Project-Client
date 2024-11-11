"use client"
import Image from "next/image"
import Link from "next/link"
import { React, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Service = () => {
  const Services = [
    {
      img: "/img/klinik.jpg",
      title: "Klinik UMUM",
      subtitle:
        "Klinik Umum kami memberikan layanan medis yang komprehensif untuk seluruh keluarga, mulai dari pemeriksaan kesehatan rutin, pengobatan penyakit ringan, hingga penanganan darurat. Dengan dokter berpengalaman dan fasilitas yang nyaman, kami siap membantu menjaga kesehatan Anda setiap saat.",
    },
    {
      img: "/img/klinik.jpg",
      title: "Klinik PARU",
      subtitle:
        "Klinik Paru kami menyediakan layanan konsultasi dan perawatan untuk berbagai penyakit saluran pernapasan, termasuk asma, TB, dan gangguan paru lainnya. Dilengkapi dengan fasilitas pemeriksaan dan diagnostik terkini untuk memastikan kesehatan paru Anda tetap optimal.",
    },
    {
      img: "/img/klinik.jpg",
      title: "Klinik GIGI",
      subtitle:
        "Klinik Gigi kami menawarkan perawatan gigi dan mulut lengkap, mulai dari pemeriksaan rutin, pembersihan gigi, hingga perawatan saluran akar dan pemasangan kawat gigi. Dengan tenaga medis profesional dan peralatan modern, kami berkomitmen menjaga kesehatan gigi dan senyum Anda.",
    },
  ]

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="w-[95%] p-10 mx-auto ">
      <h3 className="text-5xl mx-auto tracking-wide font-semibold">Layanan Kami</h3>
      <hr className="w-28 h-1 bg-[#00ADAA] border-0 rounded mt-4 dark:bg-[#00ADAA"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 h-auto mx-auto mt-8 mb-20" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {Services.map((service, i) => {
          return (
            <Link href="#" key={i} className="relative w-full sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] text-[#2e2d31] overflow-hidden rounded-2xl group">
              {/* Gambar sebagai area hover */}
              <Image width={1000} height={1000} src={service.img} alt="" className="w-full h-full object-cover group-hover:opacity-80 transition-all duration-300 ease-in-out" />

              {/* Card Content */}
              <div className="absolute left-0 bottom-0 w-full p-5 bg-[#ffffff] shadow-sm rounded-tl-2xl transform translate-y-[150px] group-hover:translate-y-0 transition-all duration-300 ease-in-out min-h-[200px] flex flex-col justify-between">
                <span className="font-bold text-gray-900 leading-[15px] block mb-3">{service.title}</span>
                <span className="text-sm mb-2 line-clamp-4 text-gray-600">{service.subtitle}</span>
                <button className="bg-[#00ADAA] text-white p-2 rounded-lg">selengkapnya</button>

                {/* Card content shape decoration (the circle at the top-right corner) */}
                <div className="absolute top-[-47px] right-[-45px] w-[100px] h-[100px] rotate-[175deg] rounded-full bg-[#ffffff] shadow-[inset_48px_48px_#ffffff]" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Service
