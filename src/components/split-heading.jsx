export default function SplitHeading({ 
  firstText = "Conditions",
  secondText = "Treated",
  accentColor = "#0D4F7A",
  subtitle = "",
  className = ""
}) {
  return (
    <div className={`w-full text-center mt-[60px] md:mt-[93px]  px-[20px] md:px-[60px] lg:px-[100px] ${className}`}>
      <div className="max-w-7xl mx-auto">
    <h2 className={`mt-[60px] md:mt-[120px] font-['Outfit'] text-[28px] md:text-[56px] px-[20px] md:px-[60px] lg:px-[100px] text-center ${className}`}>
      <span style={{ color: '#2D2D2D', fontWeight: 600 }}>{firstText} </span>
      <span style={{ color: accentColor, fontWeight: 600 }}>{secondText}</span>
    </h2>

    {subtitle && <h3 className="font-['Inter'] text-[#2D2D2D] md:px-47 font-[400] leading-[28px] text-[16px] md:mt-[12px]">
          {subtitle}
    </h3>}
    </div>
    </div>
  );
}