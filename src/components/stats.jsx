import { ScaleInView } from "./animations/AnimationWrappers";

export default function StatsComponent() {
  const stats = [
    {
      number: "3000+",
      label: "Successful Surgeries",
      color: "white"
    },
    {
      number: "97%",
      label: "Patient Satisfaction",
      color: "white"
    },
    {
      number: "7+",
      label: "Years Experience",
      color: "white"
    }
  ];

  return (
    <div className="w-full mt-[60px] md:mt-[120px] md:h-[240px] bg-[#0D4F7A] py-[34px] md:py-[56px] px-[20px] md:px-[60px] lg:px-[100px] ">
  <div className="flex flex-col md:px-[40px] md:flex-row md:justify-center md:items-center gap-6 md:gap-0">
    {stats.map((stat, index) => (
      <>
        <ScaleInView delay={index * 0.2}><div className="text-center">
          <div className={`text-[24px] md:text-[34px] font-[700] text-[#FFFFFF]`}>
            {stat.number}
          </div>
          <div className="text-[#FFFFFF] text-[16px] mt-2 md:text-[20px] font-[400]">
            {stat.label}
          </div>
        </div></ScaleInView>
        {index < stats.length - 1 && (
          <div className="mx-auto w-[203px] h-px md:w-px md:h-[127px] bg-[#FFFFFF] opacity-[0.06]"></div>
        )}
      </>
    ))}
  </div>
</div>
  );
}