import React from 'react';

export default function Heading({ 
  title, 
  subtitle, 
  className = "",
  optionalsubtitle
}) {
  return (
    <div className={`w-full text-center mt-[60px] md:mt-[93px]  px-[20px] md:px-[60px] lg:px-[100px] ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Outfit'] text-[#2D2D2D] font-[600] text-[36px] md:text-[56px] leading-tight px-[30px] md:px-[100px] ">
          {title}
        </h2>

        {optionalsubtitle && (
          <h2 className="font-['Inter'] text-[#64648A] font-[400] italic text-[14px] md:text-[18px] leading-tight mt-[12px] md:mt-[18px] ">
            {optionalsubtitle}
          </h2>
        )}
        
        <h3 className="font-['Lato'] text-[#2D2D2D] md:px-47 font-[400] leading-[28px] text-[16px] md:mt-[2px] mt-[6px]">
          {subtitle}
        </h3>
      </div>
    </div>
  );
}