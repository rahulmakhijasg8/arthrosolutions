import Image from 'next/image';

const NewCard = ({
  icon,
  title,
  subtitle, // New optional text
  description,
  buttonText,
  buttonType = 'contained', // 'contained' or 'outlined'
  buttonIcon, // Icon for contained button
  buttonLink, // Direct URL link
  buttonTarget = '_self', // Link target (_self, _blank, etc.)
  accentColor = '#FF9F43',
}) => {
  return (
    <div className="w-full flex flex-col p-[14px] md:p-[24px] justify-between items-center rounded-[8px] bg-white shadow-[0_10px_18px_2px_rgba(0,0,0,0.04)] h-full min-h-fit">
      {/* Content Container */}
      <div className="flex flex-col items-center flex-grow">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center items-center">
            <div className="flex rounded-[10px] justify-center items-center w-[54px] md:w-[84px] h-[54px] md:h-[84px]">
              <Image
                src={icon}
                alt="Card Icon"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-[18px] font-['Inter'] md:text-[24px] font-[500] text-[#2D2D2D] mt-[24px] leading-[28px] md:leading-[34px] text-center px-6 md:px-5">
          {title}
        </h3>

        {/* Subtitle - Optional */}
        {subtitle && (
          <div className="text-[18px] md:text-[20px] font-[500] font-['Inter'] text-[#2D2D2D] mt-[8px] text-center">
            {subtitle}
          </div>
        )}

        {/* Description - Optional */}
        {description && (
          <div className="text-center text-[#64648A] mt-[8px] font-[400] font-['Inter'] text-[14px] md:text-[18px]">
            {description}
          </div>
        )}
      </div>

      {/* Button as Link - Bottom Aligned */}
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          target={buttonTarget}
          className={`
            w-full mt-[18px] font-['Inter'] md:mt-[24px] px-[10px] md:px-[14px] py-[8px] md:py-[10px] rounded-[6px] flex items-center justify-center gap-[8px] transition-all duration-200 no-underline
            ${buttonType === 'contained' 
              ? 'text-white hover:opacity-90' 
              : 'bg-transparent hover:bg-opacity-10'
            }
            text-[12px] md:text-[14px] font-[500]
          `}
          style={{
            backgroundColor: buttonType === 'contained' ? accentColor : 'transparent',
            borderColor: buttonType === 'outlined' ? accentColor : 'transparent',
            border: buttonType === 'outlined' ? `1px solid ${accentColor}` : 'none',
            color: buttonType === 'contained' ? 'white' : accentColor,
          }}
        >
          {/* Icon for contained button */}
          {buttonType === 'contained' && buttonIcon && (
            <Image
              src={buttonIcon}
              alt="Button Icon"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />
          )}
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default NewCard;