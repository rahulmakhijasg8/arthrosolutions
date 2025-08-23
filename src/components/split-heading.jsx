export default function SplitHeading({ 
  firstText = "Conditions",
  secondText = "Treated",
  accentColor = "#0D4F7A",
  className = ""
}) {
  return (
    <h2 className={`text-[28px] mt-[60px] md:mt-[120px] mb-[32px] md:mb-[60px] md:text-[56px] text-center ${className}`}>
      <span style={{ color: '#2D2D2D', fontWeight: 700 }}>{firstText} </span>
      <span style={{ color: accentColor, fontWeight: 600 }}>{secondText}</span>
    </h2>
  );
}