import ReservationForm from "../Reservation"

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#495E57] mb-4">Make a Reservation</h1>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <ReservationForm />
        </div>
      </div>
    </div>
  )
}