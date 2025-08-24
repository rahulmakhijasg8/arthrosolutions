export default function ProceduresList({ 
  procedures = [
    "Total Hip Replacement",
    "Total Knee Replacement", 
    "Unicompartmental (Partial) Knee Replacement",
    "Shoulder Replacement Surgery",
    "ACL Reconstruction Using Hamstring Graft",
    "Meniscus Repair",
    "Rotator Cuff Repair",
    "Bankart Repair"
  ]
}) {

  return (
   <div className="px-[20px] md:px-[60px] lg:px-[100px] mt-[12px] md:mt-[24px]">
  <div className="flex flex-wrap gap-y-3 gap-x-[12px] md:gap-x-[24px] md:gap-y-6">
    {procedures.map((procedure, index) => (
      <div key={index} className="last:border-0 pr-[12px] md:pr-[24px] text-[14px] md:text-[16px] font-['Inter'] font-[500] text-[#64648A] border-r border-[#2D2D2D3D]">
        {procedure}
      </div>
    ))}
  </div>
  <div className="h-px bg-[#2D2D2D3D] mt-[24px]"></div>
</div>
  )
}