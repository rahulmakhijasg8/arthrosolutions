import { MapPin, Phone, Clock, Stethoscope } from "lucide-react"
import Image from "next/image"

export function ClinicCard({ title, subtitle, address, phone, timing, services, imageUrl, badgeText = "Main Clinic" }) {
  return (
    <div
      className="w-[90%] md:w-full mx-auto overflow-hidden bg-white border border-gray-200"
      style={{
        borderRadius: "18px",
        boxShadow: "0 14px 34px 1px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Image Section */}
      <div className="relative h-64 md:h-80">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover object-top" />
        {/* <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {badgeText}
        </div> */}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#0D4F7A] leading-tight">{title}</h3>
          <p className="text-[#2D2D2D] text-sm leading-relaxed">{subtitle}</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#0D4F7A] mt-0.5 flex-shrink-0" />
            <span className="text-sm font-[400] text-[#64648A]">{address}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
            <span className="text-sm font-[400] text-[#64648A]">{phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#FE7C49] flex-shrink-0" />
            <span className="text-sm font-[400] text-[#64648A]">{timing}</span>
          </div>
        </div>

        {/* Services */}
        <div className="bg-[#FAFAFA] text-[#64648A] font-[400] rounded-[6px] w-fit px-[10px] py-[6px]">
          <span className="mr-2 h-3">•</span>{services}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#0D4F7A] text-[#0D4F7A] bg-transparent rounded-md hover:bg-blue-50 transition-colors duration-200 text-sm font-[400]">
            <Phone className="w-4 h-4" />
            Call Now
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#4CAF50] text-[#4CAF50] bg-transparent rounded-md hover:bg-green-50 transition-colors duration-200 text-sm font-[400]">
            <MapPin className="w-4 h-4" />
            Direction
          </button>
        </div>
      </div>
    </div>
  )
}
