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
    <div className="w-full mt-20 md:h-[240px] bg-[#F4F8FF] py-8 md:px-40">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-auto gap-6 md:gap-0">
    {stats.map((stat, index) => (
      <>
        <div className="text-center">
          <div className={`text-[24px] md:text-[34px] font-[700] text-[${stat.color}] mb-2`}>
            {stat.number}
          </div>
          <div className="text-[#64648A] text-[16px] md:text-[20px] font-[600]">
            {stat.label}
          </div>
        </div>
        {index < stats.length - 1 && (
          <div className="mx-auto w-[40%] h-px md:w-px md:h-[100px] bg-[#64648A] opacity-[0.14]"></div>
        )}
      </>
    ))}
  </div>
</div>
  );
}