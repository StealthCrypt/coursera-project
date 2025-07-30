"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PageNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/reservations", label: "Reservations" }
  ]

  return (
    <nav className="bg-[#495E57] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-[#F4CE14] text-[#495E57]"
                  : "hover:bg-white hover:bg-opacity-10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
