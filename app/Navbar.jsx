"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#F4CE14] rounded-md flex items-center justify-center">
            <span className="text-[#495E57] font-bold text-lg">🍋</span>
          </div>
          <span className="text-xl font-bold text-[#495E57]">Little Lemon</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 text-[#495E57]">
            HOME
          </Link>
          <Link href="/menu" className="text-sm font-medium hover:underline underline-offset-4 text-[#495E57]">
            MENU
          </Link>
          <Link href="/reservations" className="text-sm font-medium hover:underline underline-offset-4 text-[#495E57]">
            RESERVATIONS
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4 text-[#495E57]">
            LOGIN
          </Link>
        </nav>

        <button
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-[#495E57] bg-transparent text-[#495E57] hover:bg-[#495E57] hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-sm font-medium text-[#495E57]" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#495E57]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/menu"
              className="text-sm font-medium text-[#495E57]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MENU
            </Link>
            <Link
              href="/reservations"
              className="text-sm font-medium text-[#495E57]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVATIONS
            </Link>
            <Link
              href="/order-online"
              className="text-sm font-medium text-[#495E57]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ORDER ONLINE
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-[#495E57]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LOGIN
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
