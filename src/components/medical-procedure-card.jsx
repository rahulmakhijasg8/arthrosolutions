"use client"

export default function MedicalProcedureCard({ title, subtitle, returnTime, description, patientType, onMoreDetails }) {
  return (
    <div className="p-[16px] md:p-[24px] bg-white border border-[rgba(45, 45, 45, 0.24)] rounded-[16px] shadow-sm">
      {/* Main title */}
      <h2 className="text-[16px] md:text-[18px] font-[600] font-['Inter'] text-[#2D2D2D] mb-2 leading-tight">{title}</h2>

      {/* Subtitle in blue */}
      <h3 className="text-[#0D4F7A] font-['Inter'] text-[16px] font-[400] mb-1">{subtitle}</h3>

      {/* Return time in green */}
      <p className="text-[#4CAF50] font-['Inter'] text-[16px] font-[500] mb-4">{returnTime}</p>

      {/* Description */}
      <p className="text-[#64648A] text-[16px] leading-[24px] font-['Inter'] mb-[10px]">{description}</p>

      {/* Bottom section with patient type and more details */}
      <div
        className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100 rounded-lg px-2 -mx-2 transition-colors"
        onClick={onMoreDetails}
      >
        <div className="bg-[#F4F8FF] text-center py-[6px] px-[10px] rounded-[6px]">
        <span className="text-[10px] font-['Inter'] text-[#2D2D2D] font-[400]">{patientType}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[#2D2D2D] font-[400] font-['Inter']">More Details</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
