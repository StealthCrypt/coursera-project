import Image from "next/image"

export default function MenuSection({ title, items }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-[#495E57] mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Item - Greek Salad Image */}
        <div className="flex gap-4 p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <Image
              src="/greek%20salad.jpg"
              alt={items[0]?.name || "Menu Item"}
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-[#495E57]">{items[0]?.name}</h3>
              <span className="text-lg font-bold text-[#495E57]">{items[0]?.price}</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{items[0]?.description}</p>
            <button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4CE14] text-[#495E57] hover:bg-yellow-500 h-9 px-3">
              Add to Order
            </button>
          </div>
        </div>

        {/* Second Item - Bruschetta Image */}
        <div className="flex gap-4 p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <Image
              src="/bruchetta.svg"
              alt={items[1]?.name || "Menu Item"}
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-[#495E57]">{items[1]?.name}</h3>
              <span className="text-lg font-bold text-[#495E57]">{items[1]?.price}</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{items[1]?.description}</p>
            <button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4CE14] text-[#495E57] hover:bg-yellow-500 h-9 px-3">
              Add to Order
            </button>
          </div>
        </div>

        {/* Third Item - Desert Image */}
        <div className="flex gap-4 p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <Image
              src="/desert.jpg"
              alt={items[2]?.name || "Menu Item"}
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-[#495E57]">{items[2]?.name}</h3>
              <span className="text-lg font-bold text-[#495E57]">{items[2]?.price}</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{items[2]?.description}</p>
            <button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4CE14] text-[#495E57] hover:bg-yellow-500 h-9 px-3">
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
