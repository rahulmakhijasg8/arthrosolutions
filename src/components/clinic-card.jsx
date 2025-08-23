import { MapPin, Phone, Clock, Stethoscope } from "lucide-react"
import Image from "next/image"

export function ClinicCard({ title, subtitle, address, phone, timing, services, imageUrl, badgeText = "Main Clinic" }) {
  return (
    <div
      className="w-full mx-auto overflow-hidden bg-white0"
      style={{
        borderRadius: "18px",
        boxShadow: "0 14px 34px 1px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Image Section */}
      <div className="relative h-54 md:h-[310px]">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover object-top" />
        {/* <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {badgeText}
        </div> */}
      </div>

      {/* Content Section */}
      <div className="p-[18px] space-y-[12px] md:space-y-[16px]">
        {/* Title and Description */}
        <div className="space-y-[6px]">
          <h3 className="text-[16px] md:text-[18px] font-[500] text-[#0D4F7A] leading-tight">{title}</h3>
          <p className="text-[#2D2D2D] text-[14px] md:text-[16px] font-[300] leading-relaxed">{subtitle}</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-[8px]">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#0D4F7A] mt-0.5 flex-shrink-0" />
            <span className="text-[12px] md:text-[14px] font-[400] text-[#64648A]">{address}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
            <span className="text-[12px] md:text-[14px] font-[400] text-[#64648A]">{phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#FE7C49] flex-shrink-0" />
            <span className="text-[12px] md:text-[14px] font-[400] text-[#64648A]">{timing}</span>
          </div>
        </div>

        {/* Services */}
        <div className="bg-[#FAFAFA] text-[#64648A] text-[12px] md:text-[14px] font-['Inter'] font-[400] rounded-[6px] w-fit px-[10px] py-[6px]">
          <span className="mr-2 h-3">•</span>{services}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[14px]">
          <button className="flex-1 flex items-center justify-center gap-[10px] px-[14px] py-[8px] border border-[#0D4F7A] text-[#0D4F7A] bg-transparent rounded-[6px] hover:bg-blue-50 transition-colors duration-200 text-[14px] md:text-[16px] font-[400]">
            <Phone className="w-4 h-4" />
            Call Now
          </button>
          <button className="flex-1 flex items-center justify-center gap-[10px] px-[14px] py-[8px] border border-[#4CAF50] text-[#4CAF50] bg-transparent rounded-[6px] hover:bg-green-50 transition-colors duration-200 text-[14px] md:text-[16px] font-[400]">
            <MapPin className="w-4 h-4" />
            Direction
          </button>
        </div>
      </div>
    </div>
  )
}
