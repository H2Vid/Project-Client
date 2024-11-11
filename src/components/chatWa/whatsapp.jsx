"use client"
import React from "react"
import Image from "next/image"
import * as Io from "react-icons/io"

const Whatsapp = () => {
  // Nomor WhatsApp klinik (gunakan nomor Anda di sini)
  const waNumber = "+6282276492526" // ganti dengan nomor WhatsApp klinik Anda

  // Fungsi untuk menangani klik tombol Kirim Pesan
  const handleClick = () => {
    // URL WhatsApp API
    const url = `https://wa.me/${waNumber}`

    // Membuka WhatsApp
    window.open(url, "_blank")
  }
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-auto w-[95%] my-32 space-y-10 lg:w-[85%] rounded-lg">
      {/* Bagian Gambar */}
      <div className="relative w-full lg:w-[400px] mb-6 lg:mb-0">
        <Image
          src="/img/Paru.png" // Gantilah dengan URL atau path gambar yang benar
          alt="Consultation Image"
          width={1000}
          height={1000}
          className="rounded-lg w-full h-auto"
        />
        {/* Thumbnail kecil */}
        <div className="z-10 absolute bottom-0 right-0 p-2 rounded-lg overflow-hidden w-32 h-32">
          <Image
            src="/img/paru2.png" // Gantilah dengan URL atau path gambar yang sama untuk thumbnail
            alt="Thumbnail"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Bagian Teks */}
      <div className="w-full lg:w-1/2 ml-0 space-y-8 lg:ml-8 items-center flex flex-col lg:items-start">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Konsultasi & Telekonsultasi Dokter</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Jangan biarkan masalah kesehatan mengganggu hidup Anda. Dengan layanan konsultasi yang mudah dan cepat, Anda bisa langsung mendapatkan saran medis dari dokter spesialis. Segera buat janji dan dapatkan solusi terbaik untuk
          kesehatan Anda!
        </p>
        <button onClick={handleClick} className="bg-[#00ADAA] hover:bg-[#00ADBB]/90 text-gray-100 font-bold py-2 lg:py-4 px-4 rounded inline-flex items-center w-96 justify-center space-x-3">
          <Io.IoLogoWhatsapp size={32} />
          <span className="relative z-10 text-lg font-semibold">Chat Sekarang Juga</span>
        </button>
      </div>
    </div>
  )
}

export default Whatsapp
