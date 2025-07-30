import Image from "next/image"
import Link from "next/link"

export default function HighlightsSection() {
  const specials = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "/greek%20salad.jpg",
    },
    {
      id: 2,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
      image: "/bruchetta.svg",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "/desert.jpg",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-[#495E57]">Specials</h2>
          <Link href="/menu">
            <button className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4CE14] text-[#495E57] hover:bg-yellow-500 h-10 px-4 py-2">
              Online Menu
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specials.map((special) => (
            <div
              key={special.id}
              className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm overflow-hidden border-[#495E57] border-opacity-20"
            >
              <div className="aspect-video relative">
                <Image src={special.image || "/placeholder.svg"} alt={special.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col space-y-1.5 p-6 flex-row items-center justify-between">
                <h3 className="text-lg font-semibold leading-none tracking-tight text-[#495E57]">{special.title}</h3>
                <span className="font-medium text-[#495E57]">{special.price}</span>
              </div>
              <div className="p-6 pt-0">
                <p className="text-[#495E57] opacity-80 text-sm">{special.description}</p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#495E57] bg-transparent text-[#495E57] hover:bg-[#495E57] hover:text-white h-9 px-3">
                  Order a delivery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
