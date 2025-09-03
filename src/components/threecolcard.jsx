import Image from 'next/image';

const Card = ({
  icon,
  title,
  description,
  link = '#',
  linkbtn = false,
  accentColor = '#FF9F43',
}) => {
  return (
    <div
      className={`bg-[#F1F1F1] hover:bg-white hover:shadow-[0_10px_18px_2px_rgba(0,0,0,0.08)] transition-all duration-300 w-full flex flex-col p-[14px] md:p-[24px] justify-center items-center rounded-[8px] overflow-auto h-full md:h-[295px] cursor-pointer`}
    >
      {/* Icon */}
      {icon && (
        <div className="flex justify-center items-center">
          <div className="flex rounded-[10px] justify-center items-center w-[54px] md:w-[84px] h-[54px] md:h-[84px]">
            <Image
              src={icon}
              alt="Insurance Icon"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-[18px] font-['Inter'] px-6 md:px-5 md:text-[20px] font-[500] text-[#2D2D2D] mt-[24px] leading-[28px] md:leading-[34px] text-center">
        {title}
      </h3>

      {/* Description - Optional */}
      {description && (
        <div className="text-center text-[#64648A] md:mt-[8px] font-[400] font-['Inter'] md:text-[16px]">
          {description}
        </div>
      )}
    </div>
  );
};

export default Card;