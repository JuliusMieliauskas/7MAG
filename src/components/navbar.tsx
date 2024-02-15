"use client"

import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import Link from "next/link"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ui/theme-toggle"
import Logo from "../static/logo.webp"
import LogoDark from "../static/logo_dark.webp"
import Image from "next/image"
import React from "react"

export function Navbar() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = React.useState(false)

  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  const menus = [
    { title: "Home", path: "/" },
    { title: "Analysis", path: "/analysis" },
    { title: "About", path: "/about" },
  ]

  return (
    <nav className="sticky left-0 top-0 w-full z-50 bg-background shadow-sm border-b">
      <div className="flex-row justify-around items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              src={Logo}
              width={96}
              alt="Logo"
              className="block dark:hidden"
            />
            <Image
              src={LogoDark}
              width={96}
              alt="Logo"
              className="hidden dark:block"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={onToggle}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div className="flex md:hidden transition-all">
          {isOpen && <MobileNavbar pathname={pathname} menus={menus} />}
        </div>
        <div className="hidden pb-3 mt-2 md:block md:pb-0 md:mt-0">
          <ul className="justify-center items-center space-y-4 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                data-text={item.title}
                className="text-gray-600 hover:text-indigo-600 w-full md:w-20 text-center"
              >
                <a
                  href={item.path}
                  title={item.path}
                  className={
                    pathname === item.path ||
                    (pathname.includes(item.path) && item.path !== "/")
                      ? cn(navbarLinkVariants({ variant: "active" }))
                      : cn(navbarLinkVariants({ variant: "default" }))
                  }
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const navbarLinkVariants = cva(
  "text-medium text-primary transition-all duration-300",
  //    before:content-[attr(title)] before:block before:font-semibold before:overflow-hidden before:invisible before:h-0",
  {
    variants: {
      variant: {
        default: "hover:font-semibold",
        active: "font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function MobileNavbar({
  pathname,
  menus,
}: {
  pathname: string
  menus: { title: string; path: string }[]
}) {
  return (
    <div className="pb-3 mt-2 md:block md:pb-0 md:mt-0">
      <ul className="justify-center items-center space-y-4 md:flex md:space-x-6 md:space-y-0">
        {menus.map((item, idx) => (
          <li
            key={idx}
            data-text={item.title}
            className="text-gray-600 hover:text-indigo-600 w-full md:w-20"
          >
            <a
              href={item.path}
              title={item.path}
              className={
                pathname === item.path ||
                (pathname.includes(item.path) && item.path !== "/")
                  ? cn(navbarLinkVariants({ variant: "active" }))
                  : cn(navbarLinkVariants({ variant: "default" }))
              }
            >
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  )
}
