"use client"

import { useState } from "react"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isOccasionOpen, setIsOccasionOpen] = useState(false)

  const occasions = ["Birthday", "Engagement", "Anniversary", "Business Meeting", "Date Night", "Other"]
  const availableTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert("Reservation submitted! We'll contact you to confirm your booking.")
  }

  const ChevronDownIcon = () => (
    <svg className="h-4 w-4 opacity-50 text-[#495E57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )

  const WineIcon = () => (
    <svg className="mr-2 h-4 w-4 text-[#495E57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a7 7 0 1014 0v-2H5v2z"
      />
    </svg>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <label
            htmlFor="date"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
          >
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split("T")[0]}
            required
            className="flex h-10 w-full rounded-md border border-[#495E57] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {/* Time Selection */}
        <div className="space-y-2">
          <label
            htmlFor="time"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
          >
            Time
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="flex h-10 w-full rounded-md border border-[#495E57] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="" disabled>
              Select a time
            </option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Guests */}
        <div className="space-y-2">
          <label
            htmlFor="guests"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
          >
            Number of Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="flex h-10 w-full rounded-md border border-[#495E57] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "person" : "people"}
              </option>
            ))}
            <option value="11+">More than 10 (Please specify in special requests)</option>
          </select>
        </div>

        {/* Occasion Dropdown */}
        <div className="space-y-2">
          <label
            htmlFor="occasion"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
          >
            Occasion
          </label>
          <div className="relative">
            <button
              type="button"
              className="flex h-10 w-full items-center justify-between rounded-md border border-[#495E57] bg-[#f2f2f2] px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2"
              onClick={() => setIsOccasionOpen(!isOccasionOpen)}
            >
              <div className="flex items-center">
                <WineIcon />
                <span className="text-[#495E57]">{formData.occasion || "Occasion"}</span>
              </div>
              <ChevronDownIcon />
            </button>
            {isOccasionOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md border border-[#495E57] bg-[#f2f2f2] shadow-lg">
                {occasions.map((item) => (
                  <div
                    key={item}
                    className="border-t first:border-t-0 border-dashed border-gray-300 px-3 py-2 cursor-pointer hover:bg-gray-200 text-[#495E57]"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, occasion: item }))
                      setIsOccasionOpen(false)
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            className="flex h-10 w-full rounded-md border border-[#495E57] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            required
            className="flex h-10 w-full rounded-md border border-[#495E57] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(123) 456-7890"
            required
            className="flex h-10 w-full rounded-md border border-[#495E57] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>

      {/* Special Requests */}
      <div className="space-y-2">
        <label
          htmlFor="specialRequests"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#495E57]"
        >
          Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleInputChange}
          placeholder="Any allergies, dietary restrictions, or special occasions we should know about?"
          className="flex min-h-[100px] w-full rounded-md border border-[#495E57] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CE14] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4CE14] text-[#495E57] hover:bg-yellow-500 h-10 px-4 py-2"
      >
        Reserve Now
      </button>

      <p className="text-sm text-[#495E57] opacity-80 text-center">
        By making a reservation, you agree to our reservation policy. We hold tables for 15 minutes past the reservation
        time.
      </p>
    </form>
  )
}
