"use client"
import Image from "next/image"
import { React, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const SubHeroSection = () => {
  const layananParu = [
    {
      titleLayanan: "Penanganan Asma dan Alergi Pernapasan",
      ketLayanan:
        "Asma dan alergi pernapasan dapat mengganggu aktivitas sehari-hari Anda. Layanan kami menyediakan penanganan yang efektif untuk mengontrol gejala asma, termasuk terapi obat yang disesuaikan, penggunaan inhaler yang benar, serta pendidikan untuk menghindari pemicu alergi. Kami juga memberikan rencana perawatan individual untuk meningkatkan kualitas hidup pasien asma.",
      imgLayanan: "/img/Paru.png",
    },
    {
      titleLayanan: "Layanan Terapi Oksigen dan Rehabilitasi Paru",
      ketLayanan:
        "Kami menawarkan terapi oksigen dan rehabilitasi paru untuk pasien dengan kondisi pernapasan serius yang membutuhkan dukungan tambahan. Program rehabilitasi paru kami mencakup latihan fisik, pendidikan, dan konseling untuk membantu pasien mengelola penyakit paru, meningkatkan kapasitas paru, dan meningkatkan daya tahan tubuh secara keseluruhan.",
      imgLayanan: "/img/Paru.png",
    },
    {
      titleLayanan: "Pengelolaan Infeksi Paru (Pneumonia, Tuberkulosis)",
      ketLayanan:
        "Infeksi paru seperti pneumonia dan tuberkulosis dapat mengancam kesehatan dan bahkan jiwa. Kami memberikan layanan diagnosis cepat dan pengobatan infeksi paru yang efektif, termasuk terapi antibiotik dan pengawasan jangka panjang untuk pasien tuberkulosis. Tim kami bekerja secara intensif untuk mengendalikan infeksi dan mencegah penyebaran penyakit lebih lanjut.",
      imgLayanan: "/img/Paru.png",
    },
  ]

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#00ADAA] pb-32 p-8">
        {/* Bagian Kiri */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-50">Kesehatan Paru: Pencegahan, Perawatan, dan Pemulihan</h1>
          <p className="text-gray-100 text-lg">
            Di layanan kesehatan paru kami, kami percaya bahwa pencegahan lebih baik daripada pengobatan. Kami menyediakan program deteksi dini, penanganan penyakit paru, serta pemulihan pasca-perawatan untuk memastikan paru Anda tetap
            sehat. Jangan tunggu sampai terlambat, ambil langkah pertama untuk kesehatan paru Anda hari ini.
          </p>
        </div>

        {/* Bagian Gambar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-auto h-auto p-10">
            <div className="w-full h-full">
              <Image src="/img/paru2.png" width={1000} height={1000} alt="ilustrasi" />
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Card */}
      <div className="mx-auto w-[95%] md:-mt-32 mt-5 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="flip-right">
        {layananParu.map((layanan, i) => {
          return (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md ">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-500 flex items-center justify-center">
                  <Image src={layanan.imgLayanan} width={1000} height={1000} alt="paru" />
                </div>
              </div>
              <h3 className="font-bold text-xl text-center text-gray-800">{layanan.titleLayanan}</h3>
              <p className="text-gray-600 mt-2">{layanan.ketLayanan}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SubHeroSection
