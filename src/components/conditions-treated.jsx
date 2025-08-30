export default function ConditionsTreated({ 
  accentColor = "#0D4F7A",
  conditions = [
    "Rotator Cuff Tears",
    "Shoulder Impingement", 
    "Frozen Shoulder",
    "Sports-Related Injuries",
    "Arthritis"
  ]
}) {

  return (
    <div className="mt-[32px] md:mt-[60px] " style={{ backgroundColor: '#F4F8FF' }}>
      <h2 className="text-[28px] pt-[32px] font-['Outfit'] md:pt-[64px] md:text-[56px] text-center">
        <span style={{ color: '#2D2D2D', fontWeight: 700 }}>Conditions </span>
        <span style={{ color: accentColor, fontWeight: 600 }}>Treated</span>
      </h2>
      
      {/* Desktop layout - single row */}
      <div className="hidden max-w-[7xl] md:flex md:flex-wrap md:justify-center md:pb-[64px] md:px-[60px] lg:px-[100px] md:gap-x-8 md:gap-y-3">
        {conditions.map((condition, index) => (
          <div key={index} className="flex font-['Inter'] bg-white text-[18px] mt-[48px] rounded-[8px] py-[18px] px-[14px] items-start">
            <span className="mr-3 text-2xl leading-none" style={{ color: accentColor }}>•</span>
            <span style={{ color: '#64648A', fontWeight: 500 }}>{condition}</span>
          </div>
        ))}
      </div>
      
      {/* Mobile layout - flexible wrap */}
      <div className="md:hidden flex flex-wrap pb-[32px] px-[20px] mt-[32px] gap-x-6 gap-y-6">
        {conditions.map((condition, index) => (
          <div key={index} className="flex bg-white text-[14px] rounded-[8px] py-4 px-3 items-center">
            <span className="mr-3 text-2xl leading-none" style={{ color: accentColor }}>•</span>
            <span style={{ color: '#64648A', fontWeight: 500 }}>{condition}</span>
          </div>
        ))}
      </div>
    </div>
  )
}