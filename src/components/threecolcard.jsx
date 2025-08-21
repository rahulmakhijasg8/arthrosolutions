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
      className={`${getBackgroundColor()} w-full rounded-[8px] p-5 md:p-6 overflow-auto mx-auto h-full`}
    >
      {/* Icon */}
      {icon && (
        <div className="flex justify-center items-center mb-8">
          <div className="flex rounded-[10px] justify-center items-center w-20 h-20 bg-white">
            <Image
              src={icon}
              alt="Insurance Icon"
              width={500}
              height={500}
              className="w-16 h-16"
            />
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-[600] text-[#000000] mb-2 text-center">
        {title}
      </h3>

      {/* Description - Optional */}
      {description && (
        <div className="text-center px-2">
          {description}
        </div>
      )}
    </div>
  );
};

export default Card;