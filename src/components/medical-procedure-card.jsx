"use client"

import { useState } from "react";

export default function MedicalProcedureCard({ 
  title, 
  subtitle, 
  returnTime, 
  description, 
  patientType, 
  successRate,
  procedureHighlights = [],
  onMoreDetails,
  // Single color prop for all buttons
  buttonColor = "#0D4F7A"
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMoreDetailsClick = () => {
    setIsExpanded(!isExpanded);
    if (onMoreDetails) {
      onMoreDetails();
    }
  };

  return (
    <div className="p-[16px] md:[20px] lg:p-[24px] bg-white border border-[rgba(45, 45, 45, 0.24)] rounded-[16px] shadow-sm">
      {/* Main title and success rate */}
      <div className="flex justify-between">
        <h2 className="text-[16px] md:text-[18px] font-[600] font-['Inter'] text-[#2D2D2D] leading-tight">
          {title}
        </h2>
        
        {successRate && (
          <div className="text-right leading-none">
            <div className="text-[24px] font-['Inter'] font-[500] text-[#0D4F7A]">
              {successRate}%
            </div>
            <div className="text-[10px] font-['Inter'] font-[400] text-[#0D4F7A]">
              Success Rate
            </div>
          </div>
        )}
      </div>

      {/* Subtitle in blue */}
      <h3 className="text-[#0D4F7A] font-['Inter'] text-[16px] font-[400] mb-1">{subtitle}</h3>

      {/* Return time in green */}
      <p className="text-[#4CAF50] font-['Inter'] text-[16px] font-[500] mb-4">{returnTime}</p>

      {/* Description */}
      <p className="text-[#64648A] text-[16px] leading-[24px] font-['Inter'] mb-[10px]">{description}</p>

      {/* Bottom section with patient type and more details */}
      <div className="flex items-center justify-between py-2 cursor-pointer rounded-lg px-2 -mx-2 transition-colors">
        <div className="text-center py-[6px] px-[10px] rounded-[6px]">
          <span className="text-[10px] font-['Inter'] text-[#2D2D2D] font-[400]">{patientType}</span>
        </div>
        <button 
          className="px-[8px] py-[6px] md:px-[10px] md:py-[8px] hover:cursor-pointer rounded-[6px] md:rounded-[6px] text-white transition-colors duration-200"
          style={{ backgroundColor: buttonColor }}
          onClick={handleMoreDetailsClick}
        >
          <div className="flex items-center gap-1 md:gap-2">
            {isExpanded ? (
              <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            <span className="text-[12px] font-[400] font-['Inter']">
              {isExpanded ? 'Less Details' : 'More Details'}
            </span>
          </div>
        </button>
      </div>

      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="h-px my-3 md:h-px md:my-4 bg-[rgba(45,45,45,0.16)]"></div>
        <div className="mt-4 md:mt-4">
          <h4 className="text-[16px] font-['Inter'] font-[500] text-[#2D2D2D]">
            Procedure Highlights:
          </h4>
          
          {procedureHighlights.length > 0 ? (
            <ul className="mt-2 space-y-[8px] md:mt-3 md:space-y-[10px]">
              {procedureHighlights.map((highlight, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none" className="mr-2">
                      <circle cx="3" cy="3.5" r="3" fill="#4CAF50"/>
                    </svg>
                    <span className="text-[#64648A] text-[14px] font-[400] font-['Inter']">
                      {highlight}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}

          {/* Additional buttons in expanded state */}
          <div className="flex gap-[16px] md:gap-[34px] mt-4 md:mt-6">
            {/* Book Assessment Button - Normal: colored bg with white text, Hover: white bg with colored text */}
            <button 
              className="w-1/2 text-white text-[14px] px-[10px] md:px-[14px] py-2 rounded-[6px] transition-colors duration-200"
              style={{ 
                backgroundColor: buttonColor,
                borderColor: buttonColor,
                border: `1px solid ${buttonColor}`
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = buttonColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = buttonColor;
                e.target.style.color = 'white';
              }}
            >
              Book Assessment
            </button>
            
            {/* Learn More Button - Normal: white bg with colored text, Hover: colored bg with white text */}
            <button 
              className="border w-1/2 text-[14px] px-[10px] md:px-[14px] py-2 rounded-[6px] transition-colors duration-200"
              style={{ 
                borderColor: buttonColor,
                color: buttonColor,
                backgroundColor: 'white'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = buttonColor;
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = buttonColor;
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}