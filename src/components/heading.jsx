import React from 'react';

export default function Heading({ 
  title, 
  subtitle, 
  className = "",
  optionalsubtitle
}) {
  return (
    <div className={`w-full text-center pt-8 md:pt-12 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Outfit'] text-[#2D2D2D] font-[600] text-[28px] md:text-[44px] leading-tight mb-2 md:mb-4">
          {title}
        </h2>

        {optionalsubtitle && (
          <h2 className="font-['Inter'] text-[#64648A] font-[400] italic text-[18px] md:text-[20px] leading-tight mt-6">
            {optionalsubtitle}
          </h2>
        )}
        
        <h3 className="font-['Lato'] text-[#2D2D2D] font-normal text-[16px] md:mt-2 md:text-[18px]">
          {subtitle}
        </h3>
      </div>
    </div>
  );
}