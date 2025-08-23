export default function StatsComponent() {
  const stats = [
    {
      number: "3000+",
      label: "Successful Surgeries",
      color: "#0D4F7A"
    },
    {
      number: "97%",
      label: "Patient Satisfaction",
      color: "#4CAF50"
    },
    {
      number: "7+",
      label: "Years Experience",
      color: "#FE7C49"
    }
  ];

  return (
    <div className="w-full mt-[60px] md:mt-[120px] md:h-[240px] bg-[#F4F8FF] py-[34px] md:py-[56px] px-[20px] md:px-[60px] lg:px-[100px] ">
  <div className="flex flex-col md:px-[40px] md:flex-row md:justify-center md:items-center gap-6 md:gap-0">
    {stats.map((stat, index) => (
      <>
        <div className="text-center">
          <div className={`text-[24px] md:text-[34px] font-[700] text-[${stat.color}]`}>
            {stat.number}
          </div>
          <div className="text-[#64648A] text-[16px] mt-2 md:text-[20px] font-[400]">
            {stat.label}
          </div>
        </div>
        {index < stats.length - 1 && (
          <div className="mx-auto w-[203px] h-px md:w-px md:h-[127px] bg-[#64648A] opacity-[0.14]"></div>
        )}
      </>
    ))}
  </div>
</div>
  );
}