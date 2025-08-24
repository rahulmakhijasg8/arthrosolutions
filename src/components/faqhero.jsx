// Default FAQ items - fixed content
const defaultFAQItems = [
  {
    question: "How Long Does Recovery Take?",
    preview: "Most Patients Return To Normal Activities Within 2-6 Weeks"
  },
  {
    question: "What Are The Surgery Risks?",
    preview: "Modern Techniques Have Very Low Complication Rates"
  },
  {
    question: "Will Insurance Cover It?",
    preview: "Most Insurance Plans Cover Joint Replacement When Medically Necessary"
  },
  {
    question: "When Can I Return To Work?",
    preview: "Desk Work: 2-6 Weeks, Physical Labor: 3-6 Months"
  }
];

// Main Hero Component
export default function Hero({ 
  type = "faq", // "faq" or "contact"
  subtitle,
  searchPlaceholder = "Search FAQs...",
  contactButtons = []
}) {
  const isFAQ = type === "faq";
  
  return (
    <div className="w-full pb-[60px] md:pb-[87px] text-white pt-[41px] md:pt-[52px]">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[60px] lg:px-[100px]">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="font-['Outfit'] text-[32px] md:text-[48px] lg:text-[56px] lg:px-[140px] font-[600] leading-normal text-white">
            {isFAQ ? "Frequently Asked Questions" : "Get in touch — we'll book your joint care"}
          </h1>
          {subtitle && (
            <p className="font-['Inter'] md:px-32 lg:px-45 mt-[12px] text-[#FAFAFA] md:text-white text-[16px] md:text-[18px] font-[400] leading-[26px] md:leading-[28px]">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Search Section */}
        {isFAQ && (
          <div className="mt-[26px] md:mt-[46px]">
            <div className="max-w-[506px] w-full rounded-[6px] mx-auto relative">
              <div className="relative">
                <svg 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-full bg-white/24 border border-white/20 rounded-lg pl-12 pr-6 py-[14px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-[24px] md:mt-[60px] gap-[10px] md:gap-[24px]">
          {isFAQ ? (
            // FAQ Items - Fixed content
            defaultFAQItems.map((item, index) => (
              <div key={index} className="bg-white/8 text-center backdrop-blur-sm rounded-[14px] p-[12px] md:p-[24px] hover:bg-white/15 transition-all duration-300">
                <h3 className="font-['Inter'] text-[12px] md:text-[14px] font-[500] leading-[18px] leading-[20px] text-white">
                  {item.question}
                </h3>
                <p className="font-['Inter'] mt-[10px] text-[10px] md:text-[12px] font-[300] text-[#FAFAFA] leading-[14px] md:leading-[16px]">
                  {item.preview}
                </p>
              </div>
            ))
          ) : (
            // Contact Buttons
            <div className="col-span-2 md:col-span-2 lg:col-span-4 mt-[26px] md:mt-[46px] flex flex-col md:flex-row justify-center items-center gap-[12px] md:gap-[56px] w-full">
  {contactButtons.length > 0 ? contactButtons.map((button, index) => (
    <button 
      key={index}
      className={`${button.className || 'bg-white text-[#1E5A8C] hover:bg-white/90'} px-[6px] md:px-[32px] py-[10px] md:py-[14px] rounded-lg font-['Inter'] font-[600] text-[14px] md:text-[16px] transition-all duration-300 flex items-center gap-[8px] w-full max-w-[200px] md:min-w-[200px] justify-center`}
      onClick={button.onClick}
    >
      {button.icon && <span className="w-5 h-5">{button.icon}</span>}
      {button.text}
    </button>
  )) : (
    // Default contact buttons - Fixed for mobile
    <>
      <button className="bg-white text-[#0D4F7A] hover:bg-white/90 px-[10px] md:px-[14px] py-[6px] md:py-[8px] rounded-lg font-['Inter'] font-[600] text-[12px] md:text-[14px] transition-all duration-300 flex items-center gap-[8px] w-full max-w-[200px] md:min-w-[200px] justify-center">
        <svg className="w-[14px] h-[14px]" fill="none" stroke="#0D4F7A" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Book Appointment
      </button>

      <button className="bg-white/24 text-white hover:bg-white/10 px-[10px] md:px-[14px] py-[6px] md:py-[8px] rounded-lg font-['Inter'] font-[600] text-[12px] md:text-[14px] transition-all duration-300 flex items-center gap-[8px] w-full max-w-[200px] md:min-w-[200px] justify-center">
        <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        +91 – 9820273955
      </button>

      <button className="bg-white/24 text-white hover:bg-white/10 px-[10px] md:px-[14px] py-[6px] md:py-[8px] rounded-lg font-['Inter'] font-[600] text-[12px] md:text-[14px] transition-all duration-300 flex items-center gap-[8px] w-full max-w-[200px] md:min-w-[200px] justify-center">
        <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        WhatsApp Us
      </button>
    </>
  )}
</div>
          )}
        </div>
      </div>
    </div>
  );
}