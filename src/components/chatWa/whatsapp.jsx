import React from "react"
import Image from "next/image"

const Whatsapp = () => {
  return (
    <div className="flex items-center bg-gray-500 p-8 rounded-lg shadow-lg">
      {/* Bagian Gambar */}
      <div className="relative w-1/2 bg-red-400">
        <Image
          src="/img/Paru.png" // Gantilah dengan URL atau path gambar yang benar
          alt="Consultation Image"
          width={1000}
          height={1000}
          className="rounded-lg w-full"
        />
        {/* Thumbnail kecil */}
        <div className="z-10 absolute bottom-4 right-0 border-2 border-white rounded-lg overflow-hidden w-32 h-32">
          <Image
            src="/img/Paru.png" // Gantilah dengan URL atau path gambar yang sama untuk thumbnail
            alt="Thumbnail"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
      </div>
      {/* Bagian Teks */}
      <div className="w-1/2 ml-8">
        <h2 className="text-4xl font-bold text-gray-800">Konsultasi & Telekonsultasi Dokter</h2>
        <p className="mt-4 text-gray-600">Prodia Women menyediakan layanan konsultasi dan telekonsultasi dokter untuk kebutuhan kesehatan wanita.</p>
        <button className="mt-6 px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg hover:bg-yellow-500 flex items-center">
          Selengkapnya
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  )
}

export default Whatsapp
