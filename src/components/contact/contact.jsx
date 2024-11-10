"use client"
import Image from "next/image"
import * as Io from "react-icons/io"

const ContactUs = () => {
  // Nomor WhatsApp klinik (gunakan nomor Anda di sini)
  const waNumber = "+6282276492526" // ganti dengan nomor WhatsApp klinik Anda

  // Fungsi untuk menangani klik tombol Kirim Pesan
  const handleClick = () => {
    // URL WhatsApp API
    const url = `https://wa.me/${waNumber}`

    // Membuka WhatsApp
    window.open(url, "_blank")
  }

  const datacontact = [
    {
      label: "Email",
      logo: "/img/email.png",
      link: "info@kliniksehat.com",
      to: "info@kliniksehat.com",
    },
    {
      label: "Alamat",
      logo: "/img/gps.png",
      link: "mailto:davidpaulsitompul@gmail.com",
      to: "davidpaulsitompul@gmail.com",
    },
    {
      label: "Telepon",
      logo: "/img/tlp.png",
      to: "+62 123 456 789",
    },
    {
      label: "Jadwal Praktek",
      logo: "/img/jam.png",
      to: "Senin - Sabtu",
      detail: "08-00 sampai 16.00",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-10 mb-10">
      <h1 className="text-4xl font-semibold text-center text-green-600 mb-8">Hubungi Kami</h1>
      <div className=" w-full space-y-20 bg-gray-100 p-2 py-10 rounded-xl">
        {/* Sidebar (Map) */}
        <div className="w-full ">
          <div className="h-60 bg-gray-200 rounded-lg overflow-hidden mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7528818779157!2d106.69406121542244!3d-6.2087624623793975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb4cbfcb77ff%3A0x8fb31f510902234d!2sKlinik%20Kesehatan%20Sejahtera!5e0!3m2!1sid!2sid!4v1601230434107!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Content (Contact Info) */}
        <div className="w-full h-auto">
          <div className="bg-[#fafafa] p-6 rounded-lg">
            <div className="lg:flex space-y- lg:space-y-0 justify-between mt-10 lg:mt-0">
              {datacontact.map((info, i) => {
                return (
                  <div key={i} className="flex space-x-5 items-center">
                    <Image width={1000} height={1000} src={info.logo} alt="" className={`${info.label === "Email" ? "w-7 h-7 mx-[7px] " : "w-10 h-10"}`} />
                    <div>
                      <h2 className="text-black font-semibold">{info.label}</h2>
                      <div className="flex flex-col">
                        <span>{info.to}</span>
                        <span>{info.detail}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center py-16">
          <h1 className="text-4xl font-semibold text-center text-green-600 mb-8">Ingin mengetahui informasi lebih lanjut?</h1>
          <div className="flex space-x-1 md:space-x-4 justify-center items-center p-10">
            {/* Gambar pertama */}
            <Image width={1000} height={1000} src="/img/call1.png" alt="klinik" className="lg:w-36 lg:h-36 w-12 h-12 md:w-20 md:h-20 rounded-lg" />

            {/* Tombol */}
            <button
              onClick={handleClick}
              className="items-center flex space-x-3 before:ease relative h-20 w-72 justify-center overflow-hidden rounded-lg border border-[#00ADAA] bg-[#00ADAA] text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40"
            >
              <Io.IoLogoWhatsapp size={32} />
              <span className="relative z-10 text-lg font-semibold">Chat Sekarang Juga</span>
            </button>

            {/* Gambar kedua */}
            <Image width={1000} height={1000} src="/img/call2.png" alt="klinik" className="lg:w-32 lg:h-32 w-10 h-10 md:w-20 md:h-20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
