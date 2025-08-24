import Image from 'next/image';

const Card = ({
  icon,
  title,
  description,
  link = '#',
  linkbtn = false,
  accentColor = '#FF9F43',
  isMiddleCard = false,
}) => {
  // Determine background color based on screen size and position
  const getBackgroundColor = () => {
    // On mobile, all cards have #FAFAFA background
    // On desktop, middle card has white background, others have #FAFAFA
    const bgColor = isMiddleCard ? 'md:bg-white bg-[#FAFAFA]' : 'bg-[#FAFAFA]';
    const shadow = isMiddleCard ? 'md:shadow-[0_10px_18px_2px_rgba(0,0,0,0.08)]' : '';
    return `${bgColor} ${shadow}`;
  };

  return (
    <div
      className={`${getBackgroundColor()} w-full flex flex-col p-[14px] md:p-[24px] justify-center items-center rounded-[8px] overflow-auto h-full`}
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
      <h3 className="text-[18px] px-6 md:px-5 md:text-[20px] font-[500] text-[#2D2D2D] mt-[24px] leading-[28px] md:leading-[34px] text-center">
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