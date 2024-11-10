import Image from "next/image"
import React from "react"

const About = () => {
  return (
    <>
      <div className="w-[95%] lg:flex lg:justify-between h-auto mx-auto mt-8 p-10">
        <div className="w-full h-auto">
          <div>
            <h3 className="text-5xl tracking-wide font-semibold">Klinik Medan</h3>
            <hr className="w-28 h-1 bg-[#00ADAA] border-0 rounded mt-4 dark:bg-[#00ADAA"></hr>
          </div>
          <p className="text-md tracking-wide mt-10 mb-4 text-gray-900  break-words">
            Selamat datang di Klinik Umum Medan, pusat pelayanan kesehatan terpercaya yang didedikasikan untuk memberikan layanan medis berkualitas bagi masyarakat Medan dan sekitarnya. Dengan tim tenaga medis yang profesional,
            berpengalaman, dan berdedikasi, kami siap membantu Anda dalam menjaga kesehatan serta memberikan perawatan yang optimal.
          </p>
          <p className="text-md tracking-wide text-gray-900  break-words">
            Kami percaya bahwa setiap pasien adalah prioritas, dan kepuasan serta kesehatan Anda adalah misi utama kami. Dengan mengedepankan keramahan dan pendekatan yang bersahabat, kami berkomitmen untuk menjadi mitra kesehatan terbaik
            bagi Anda dan keluarga.
          </p>
        </div>
        <div className="w-full h-auto">
          <div className="relative w-11/12 sm:w-96 h-64 sm:h-80 mx-auto mt-10 bg-teal-100 flex items-center justify-center overflow-hidden">
            <Image width={1000} height={10000} src="/img/klinik.jpg" alt="Produk" className="relative w-3/4 sm:w-[320px] h-48 sm:h-64 object-cover z-10 transition-transform duration-300 ease-out hover:scale-105 hover:rotate-2" />

            <div className="absolute bottom-0 left-0 w-20 h-16 sm:w-28 sm:h-24 bg-[#00ADAA] transform -translate-y-3 translate-x-2 sm:-translate-y-4 sm:translate-x-3"></div>

            <div className="absolute top-0 right-0 w-20 h-16 sm:w-28 sm:h-24 bg-teal-900 transform translate-y-3 -translate-x-2 sm:translate-y-4 sm:-translate-x-3"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
