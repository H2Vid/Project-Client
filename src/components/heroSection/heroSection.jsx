import React from "react"

const HeroSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-[#00ADAA] w-[95%] mx-auto rounded-2xl">
        <div className="grid max-w-screen-2xl px-[3%] py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 z-10">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-wide leading-none md:text-3xl xl:text-4xl dark:text-white">Perawatan terbaik dimulai dengan perhatian terhadap diri sendiri.</h1>
            <p className="max-w-2xl mb-6 font-light text-[#757575] lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Mengutamakan kesehatan adalah bentuk cinta kepada diri sendiri. Jika kita bisa merawat orang lain, kita juga perlu memberi perhatian penuh pada tubuh dan pikiran kita.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100  dark:text-white dark:border-[#5efffc] dark:hover:bg-[#22605f]"
            >
              Booking Sekarang
            </a>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <img src="img/klinik.jpg" alt="mockup" className="rounded-xl" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
