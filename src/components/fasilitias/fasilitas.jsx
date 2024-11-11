"use client"
import Image from "next/image"
import { React, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const OurFasilitas = () => {
  const Fasilitas = [
    {
      img: "/img/service1.jpg", // Ganti dengan path gambar lokal Anda
      service: "Konsultasi Dokter Umum",
      ket: "Layanan konsultasi dengan dokter umum untuk berbagai keluhan medis. Kami siap membantu mendiagnosis penyakit umum, memberikan resep obat, dan memberikan saran tentang cara merawat kesehatan Anda. Layanan ini tersedia untuk segala usia, dari anak-anak hingga orang dewasa.",
    },
    {
      img: "/img/service2.jpg", // Ganti dengan path gambar lokal Anda
      service: "Pemeriksaan Kesehatan",
      ket: "Pemeriksaan kesehatan menyeluruh untuk memantau kondisi tubuh Anda. Kami menyediakan layanan pemeriksaan fisik, tes darah, pemeriksaan jantung, dan lainnya untuk memastikan bahwa tubuh Anda tetap sehat dan bebas dari penyakit.",
    },
    {
      img: "/img/service3.jpg", // Ganti dengan path gambar lokal Anda
      service: "Layanan Vaksinasi",
      ket: "Vaksinasi untuk melindungi Anda dan keluarga dari berbagai penyakit menular. Layanan vaksinasi kami meliputi vaksinasi anak, vaksin flu, vaksin hepatitis, dan banyak lagi. Kami juga memberikan informasi mengenai pentingnya vaksinasi untuk kesehatan jangka panjang.",
    },
    {
      img: "/img/service3.jpg", // Ganti dengan path gambar lokal Anda
      service: "Layanan Laboratorium",
      ket: "Layanan laboratorium untuk mendiagnosis berbagai penyakit melalui tes darah, urin, dan sampel lainnya. Kami bekerja sama dengan laboratorium terkemuka untuk memberikan hasil tes yang cepat dan akurat, yang akan membantu dokter dalam proses pengobatan.",
    },
    {
      img: "/img/service2.jpg", // Ganti dengan path gambar lokal Anda
      service: "Perawatan Lansia",
      ket: "Perawatan khusus untuk lansia, dengan fokus pada kesehatan fisik dan mental mereka. Layanan ini mencakup pemeriksaan rutin, perawatan penyakit kronis, serta pendampingan dalam menjaga kualitas hidup lansia. Kami memberikan perawatan yang penuh perhatian dan profesional.",
    },
    {
      img: "/img/service1.jpg", // Ganti dengan path gambar lokal Anda
      service: "Rawat Inap",
      ket: "Fasilitas rawat inap untuk pasien yang membutuhkan perawatan intensif atau pemulihan jangka panjang. Kami memiliki ruang rawat inap yang nyaman dan dilengkapi dengan fasilitas medis lengkap untuk memantau kesehatan pasien dengan teliti setiap hari.",
    },
  ]

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="w-[95%] h-auto mx-auto mt-8 p-10">
      <div className="bg-gray-50 text-gray-900">
        <header className="bg-[#00ADAA] text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-semibold">Fasilitas Klinik Umum</h1>
            <p className="mt-2">Kami memberikan perawatan medis yang berkualitas untuk keluarga Anda.</p>
          </div>
        </header>

        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12" data-aos="fade-down-right">
              {Fasilitas.map((card, i) => {
                return (
                  <div key={i} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 ease-in-out transform">
                    <div className="mb-4">
                      <Image width={1000} height={1000} src={card.img} alt="Konsultasi Dokter" className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">{card.service}</h3>
                    <p className="text-gray-600 break-words">{card.ket}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OurFasilitas
