import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Maria",
      rating: 5,
      review: "Amazing food and atmosphere!",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "John",
      rating: 4,
      review: "Great service and delicious dishes.",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Sarah",
      rating: 5,
      review: "Best Mediterranean food in Chicago!",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 4,
      name: "Alex",
      rating: 4,
      review: "Lovely place for family dinners.",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  const StarIcon = ({ filled }) => (
    <svg
      className={`h-4 w-4 ${filled ? "fill-yellow-500 text-yellow-500" : "fill-gray-300 text-gray-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )

  return (
    <section className="w-full py-12 md:py-24 bg-[#FFF1F1] bg-opacity-70">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-[#495E57]">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="pb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name}'s profile`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-[#495E57]">{testimonial.name}</span>
                </div>
                <p className="text-sm text-[#495E57] opacity-80">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
