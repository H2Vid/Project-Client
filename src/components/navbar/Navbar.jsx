"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation" // Import usePathname to get the current path

export const Navbar = () => {
  const navigation = [
    {
      bar: "Home",
      link: "/",
    },
    {
      bar: "Umum",
      link: "/pages/umum",
    },
    {
      bar: "Paru",
      link: "/pages/paru",
    },
    {
      bar: "Gigi",
      link: "/pages/gigi",
    },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Get the current path

  return (
    <div className="w-full">
      <nav className="relative flex flex-wrap items-center justify-between py-2 space-x-3 lg:w-[95%] mx-auto">
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-900">
            <span>
              <Image src="/img/dokterumum.jpg" width={1000} height={1000} alt="logo" className="w-14 rounded-full" />
            </span>
            <span>Klinik</span>
          </span>
        </Link>

        {/* Hamburger Icon */}
        <button className="block lg:hidden p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22605f]" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Menu - responsive */}
        <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full absolute top-20 left-0 right-0 bg-white lg:bg-transparent lg:relative lg:top-0 z-10 shadow-lg lg:shadow-none`}>
          <ul className="flex flex-col lg:flex-row items-end justify-between flex-1 py-6 lg:py-0 space-y-3 lg:space-y-0 list-none lg:pt-0 lg:flex lg:space-x-6">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-10" key={index}>
                <Link
                  href={menu.link}
                  className={`block px-5 py-1 text-[19px] font-normal rounded-md transition-all duration-200 ${
                    pathname === menu.link
                      ? "text-white bg-[#00ADAA]" // Active link styling
                      : "text-gray-800 dark:text-black hover:text-[#22605f] focus:text-[#00ADAA]"
                  }`}
                >
                  {menu.bar}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
