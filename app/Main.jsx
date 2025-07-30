import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full bg-[#FFF1F1] bg-opacity-70">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#495E57]">Little Lemon</h1>
          <h2 className="text-xl font-medium text-[#495E57]">Chicago</h2>
          <p className="text-[#495E57] leading-relaxed">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            Our cozy atmosphere makes every meal feel like a celebration of flavors.
          </p>
          <Link href="/reservations">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4CE14] text-[#495E57] hover:bg-yellow-500 h-10 px-4 py-2 w-fit">
              Reserve a Table
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/restauranfood.jpg"
              alt="Restaurant hero image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
