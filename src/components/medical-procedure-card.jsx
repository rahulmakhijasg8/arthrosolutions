"use client"

import { useState } from "react";

export default function MedicalProcedureCard({ 
  title, 
  subtitle, 
  returnTime, 
  description, 
  patientType,
  onMoreDetails,
  // Single color prop for all buttons
  buttonColor = "#0D4F7A"
}) {
  return (
    <div className="p-[16px] md:[20px] lg:p-[24px] bg-white border border-[#F1F1F1] rounded-[16px] shadow-sm">
      {/* Main title */}
      <div className="flex justify-between">
        <h2 className="text-[16px] md:text-[18px] font-[600] font-['Inter'] text-[#2D2D2D] leading-tight">
          {title}
        </h2>
      </div>

      {/* Subtitle in blue */}
      <h3 className="text-[#0D4F7A] font-['Inter'] text-[16px] font-[400] mb-1">{subtitle}</h3>

      {/* Return time in green */}
      <p className="text-[#4CAF50] font-['Inter'] text-[16px] font-[500] mb-4">{returnTime}</p>

      {/* Description */}
      <p className="text-[#64648A] text-[16px] leading-[24px] font-['Inter'] mb-[10px]">{description}</p>

      {/* Bottom section with patient type */}
      <div className="flex items-center justify-between py-2 cursor-pointer rounded-lg px-2 -mx-2 transition-colors">
        <div className="text-center bg-[#F4F8FF] py-[6px] px-[10px] rounded-[6px]">
          <span className="text-[10px] font-['Inter'] text-[#2D2D2D] font-[400]">{patientType}</span>
        </div>
      </div>
    </div>
  )
}