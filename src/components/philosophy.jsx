import React from 'react';

export default function Philosophy({ 
}) {
  return (
    <div className="w-full text-center py-12 bg-[#F4F8FF] pt-8 md:pt-12 px-[20px] md:px-[60px] lg:px-[100px]">
  <div className="max-w-7xl md:px-[120px] mx-auto">
        <h2 className="font-['Outfit'] text-[#2D2D2D] font-[600] text-[28px] md:text-[44px] leading-tight mb-2 md:mb-4">
          Philosophy
        </h2>
        
        <h3 className="font-['Lato'] text-[#2D2D2D] font-normal text-[16px] md:mt-2 md:text-[18px] max-w-full sm:max-w-full">
          Joints shouldn't limit life's playbooks whether you're running or shopping. Our mission at Arthro Solutions is to restore movement using evidence based surgery and sport focused rehabilitation, tailored to your lifestyle.
        </h3>
        <h3 className="font-['Lato'] text-[#2D2D2D] font-normal text-[16px] md:mt-2 md:text-[18px] max-w-full sm:max-w-full">
          We believe that every patient deserves personalized care that considers not just their medical condition, but their life goals, activity levels, and personal circumstances. From the weekend warrior to the professional athlete, from the active senior to the desk professional everyone deserves to move without pain.
        </h3>

        {/* Quote Section */}
        <div className="bg-[#0D4F7A] rounded-2xl p-8 md:p-8 max-w-2xl mt-[46px] mx-auto mb-6">
            <div className="flex flex-col items-start gap-3">
              {/* Quote SVG Icon */}
              <div className="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="w-16 h-16">
                  <g opacity="0.14" clipPath="url(#clip0_163_8334)">
                    <path d="M33.2305 43.8076H31.3848C31.0227 43.8076 30.7158 43.6811 30.4404 43.4062C30.1654 43.131 30.0391 42.8234 30.0391 42.4609V38.7686C30.0391 38.4514 30.1353 38.1767 30.3438 37.9287L30.4404 37.8242C30.7158 37.5492 31.0225 37.4229 31.3848 37.4229H33.2305C35.4015 37.4229 37.2696 36.6488 38.8057 35.1133C40.3418 33.5771 41.1162 31.7094 41.1162 29.5381V28.6152C41.1162 27.7147 40.795 26.933 40.1621 26.2998C39.5288 25.6665 38.7469 25.3458 37.8467 25.3457H31.3848C29.9776 25.3457 28.7972 24.8587 27.8154 23.877C26.8329 22.8943 26.3457 21.7153 26.3457 20.3076V9.23145C26.3457 7.82345 26.8326 6.64367 27.8145 5.66113C28.7967 4.67924 29.9767 4.19244 31.3838 4.19238H42.4619C43.781 4.19248 44.9008 4.62012 45.8447 5.48242L46.0312 5.66113C47.0133 6.64363 47.5 7.82331 47.5 9.23145V29.5381C47.5 31.4712 47.124 33.313 46.3721 35.0674C45.6169 36.8296 44.5989 38.3479 43.3193 39.627C42.1195 40.8267 40.7103 41.7963 39.0869 42.5352L38.7598 42.6797C37.0051 43.4312 35.1636 43.8076 33.2305 43.8076Z" fill="white" stroke="white"/>
                    <path d="M7.38184 43.8076H5.53613C5.17385 43.8075 4.8667 43.6809 4.5918 43.4062C4.31662 43.1308 4.19043 42.823 4.19043 42.4609V38.7686C4.19045 38.4517 4.28725 38.1771 4.49609 37.9287L4.5918 37.8242C4.86667 37.5493 5.17374 37.4229 5.53613 37.4229H7.38184C9.55373 37.4229 11.4215 36.6488 12.957 35.1133C14.4924 33.5772 15.2666 31.7094 15.2666 29.5381V28.6152C15.2666 27.7152 14.9466 26.9341 14.3135 26.3008C13.6808 25.667 12.8978 25.3457 11.998 25.3457H5.53613C4.12875 25.3456 2.94847 24.8586 1.9668 23.877C0.98521 22.8945 0.49897 21.7154 0.499023 20.3076V9.23145C0.499023 7.82318 0.985353 6.64351 1.96777 5.66113C2.94951 4.67931 4.12953 4.19241 5.53711 4.19238H16.6143C18.0217 4.19244 19.2018 4.67933 20.1836 5.66113C21.1654 6.6437 21.6523 7.8235 21.6523 9.23145V29.5381C21.6523 31.471 21.2761 33.313 20.5244 35.0674C19.7696 36.8295 18.7514 38.3478 17.4717 39.627C16.1919 40.9068 14.6738 41.9244 12.9121 42.6797C11.2668 43.3842 9.54636 43.7586 7.74414 43.8027L7.38184 43.8076Z" fill="white" stroke="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_163_8334">
                      <rect width="48" height="47.9999" fill="white" transform="matrix(-1 0 0 -1 48 48)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Quote Content */}
              <div className="w-full text-center">
                <p
                  className="mb-2 text-white"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  "Joints shouldn't limit life's playbooks"
                </p>
                <p
                  className="pt-3 font-medium text-white"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  — Dr. Mohit Upadhyaya
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}