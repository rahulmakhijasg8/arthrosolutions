import React from 'react';

const PhoneIcon = () => (
  <svg className='h-[14px] w-[14px] md:h-[18px] md:w-[18px]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5.49392 2.35422C5.28036 1.80055 4.76327 1.4375 4.18825 1.4375H2.25411C1.51834 1.4375 0.921875 2.0559 0.921875 2.81893C0.921875 9.30464 5.99195 14.5625 12.246 14.5625C12.9818 14.5625 13.5781 13.9439 13.5781 13.1809L13.5785 11.1748C13.5785 10.5784 13.2285 10.0423 12.6946 9.82082L10.8408 9.05214C10.3612 8.85321 9.8152 8.94274 9.4184 9.28565L8.93997 9.69945C8.38123 10.1823 7.55912 10.1439 7.04483 9.61057L5.69766 8.21223C5.18337 7.67889 5.14536 6.82702 5.61098 6.24758L6.00992 5.75147C6.34059 5.33997 6.42769 4.77355 6.23586 4.27621L5.49392 2.35422Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <g clipPath="url(#clip0_831_1515)">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.4101 8.93531C10.1073 9.05906 9.91384 9.53312 9.71759 9.77531C9.61696 9.89937 9.49696 9.91875 9.34228 9.85656C8.20571 9.40375 7.33446 8.64531 6.70728 7.59937C6.60103 7.43719 6.62009 7.30906 6.74821 7.15844C6.93759 6.93531 7.17571 6.68187 7.22696 6.38125C7.34071 5.71625 6.47134 3.65344 5.32321 4.58813C2.01946 7.28031 10.8345 14.4206 12.4254 10.5588C12.8754 9.46406 10.912 8.72969 10.4101 8.93531ZM8.50009 14.6025C7.33165 14.6025 6.18196 14.2919 5.1754 13.7037C5.01384 13.6091 4.81853 13.5841 4.6379 13.6331L2.45071 14.2334L3.21259 12.555C3.26354 12.4429 3.28397 12.3194 3.27178 12.1969C3.2596 12.0744 3.21524 11.9573 3.14321 11.8575C2.32821 10.7278 1.89728 9.39406 1.89728 8C1.89728 4.35906 4.85915 1.39719 8.50009 1.39719C12.141 1.39719 15.1026 4.35906 15.1026 8C15.1026 11.6406 12.1407 14.6025 8.50009 14.6025ZM8.50009 0C4.08884 0 0.500088 3.58875 0.500088 8C0.500088 9.55188 0.940713 11.0422 1.7779 12.3356L0.562588 15.0122C0.507671 15.1331 0.488322 15.2671 0.506807 15.3986C0.525291 15.5301 0.580843 15.6536 0.666963 15.7547C0.732644 15.8316 0.814197 15.8933 0.906013 15.9356C0.997828 15.978 1.09773 15.9999 1.19884 16C1.64946 16 4.10665 15.2278 4.73196 15.0562C5.8879 15.6747 7.18446 16 8.50009 16C12.911 16 16.5001 12.4109 16.5001 8C16.5001 3.58875 12.911 0 8.50009 0Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_831_1515">
        <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>
);

const VideoCallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
    <path d="M17.6773 3.28126C17.4689 3.17854 17.2358 3.13811 17.0055 3.16471C16.7752 3.1913 16.5571 3.28383 16.3769 3.43143L14.2768 5.13217V4.76796C14.3249 4.34762 14.2785 3.9217 14.1411 3.52207C14.0037 3.12244 13.7788 2.75944 13.4833 2.46023C13.1878 2.16101 12.8293 1.93333 12.4346 1.79421C12.0399 1.65509 11.6192 1.60813 11.204 1.65685H3.82946C3.4143 1.60813 2.99364 1.65509 2.59894 1.79421C2.20424 1.93333 1.84571 2.16101 1.55019 2.46023C1.25466 2.75944 1.02979 3.12244 0.892382 3.52207C0.754976 3.9217 0.708597 4.34762 0.756716 4.76796V11.405C0.708597 11.8253 0.754976 12.2513 0.892382 12.6509C1.02979 13.0505 1.25466 13.4135 1.55019 13.7127C1.84571 14.0119 2.20424 14.2396 2.59894 14.3787C2.99364 14.5179 3.4143 14.5648 3.82946 14.5161H11.204C11.6192 14.5648 12.0399 14.5179 12.4346 14.3787C12.8293 14.2396 13.1878 14.0119 13.4833 13.7127C13.7788 13.4135 14.0037 13.0505 14.1411 12.6509C14.2785 12.2513 14.3249 11.8253 14.2768 11.405V11.0408L16.3769 12.7415C16.5936 12.9187 16.8637 13.0154 17.1422 13.0153C17.3274 13.015 17.5103 12.9728 17.6773 12.8917C17.8866 12.7908 18.0632 12.6317 18.1866 12.4329C18.3099 12.2341 18.3748 12.2039 18.3738 11.7692V4.40375C18.3748 4.16902 18.3099 3.93883 18.1866 3.74007C18.0632 3.54131 17.8866 3.38218 17.6773 3.28126ZM13.0477 11.405C13.0477 12.7133 12.4962 13.2717 11.204 13.2717H3.82946C2.53727 13.2717 1.98581 12.7133 1.98581 11.405V4.76796C1.98581 3.45963 2.53727 2.90129 3.82946 2.90129H11.204C12.4962 2.90129 13.0477 3.45963 13.0477 4.76796V11.405ZM17.1447 11.77L14.2768 9.44707V6.72588L17.1447 4.40292V11.77Z" fill="currentColor"/>
  </svg>
);

// Icon map for easy selection
const iconMap = {
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  video: VideoCallIcon,
};

const NewCard = ({
  icon,
  iconType = 'image',
  svgIcon,
  title,
  subtitle,
  description,
  buttonText,
  buttonType = 'contained',
  buttonIcon,
  buttonIconType = 'svg',
  buttonLink,
  buttonTarget = '_self',
  accentColor = '#FF9F43',
}) => {
  // Helper function to render SVG icons
  const renderSvgIcon = (iconKey) => {
    if (typeof iconKey === 'string' && iconMap[iconKey]) {
      const IconComponent = iconMap[iconKey];
      return <IconComponent />;
    }
    return iconKey;
  };

  return (
    <div className="w-full flex flex-col p-[14px] md:p-[24px] justify-between items-center rounded-[8px] bg-white shadow-[0_10px_18px_2px_rgba(0,0,0,0.04)] h-full min-h-fit">
      {/* Content Container */}
      <div className="flex flex-col items-center flex-grow">
        {/* Icon */}
        {(icon || svgIcon) && (
          <div className="flex justify-center items-center">
            <div 
              className="flex rounded-[10px] justify-center items-center w-[54px] md:w-[84px] h-[54px] md:h-[84px]"
              style={{ color: accentColor }}
            >
              {iconType === 'svg' && svgIcon ? (
                <div className="w-full h-full flex items-center justify-center text-[32px] md:text-[48px]">
                  {renderSvgIcon(svgIcon)}
                </div>
              ) : icon ? (
                <img
                  src={icon}
                  alt="Card Icon"
                  className="w-full h-full"
                />
              ) : null}
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

      {/* Button */}
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          target={buttonTarget}
          className={`
            w-[50%] md:w-full mt-[18px] font-['Inter'] md:mt-[24px] px-[10px] md:px-[14px] py-[8px] md:py-[10px] 
            rounded-[6px] flex items-center justify-center gap-[8px] transition-all duration-200 
            no-underline text-[12px] md:text-[14px] font-[500] border
            ${buttonType === 'contained' 
              ? 'bg-[var(--accent-color)] text-white border-[var(--accent-color)] hover:bg-white hover:text-[var(--accent-color)]' 
              : 'bg-white text-[var(--accent-color)] border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white'
            }
          `}
          style={{
            '--accent-color': accentColor,
          }}
        >
          {/* Button Icon - Only show for contained buttons */}
          {buttonIcon && buttonType === 'contained' && (
            <div className="w-[16px] h-[16px] transition-all duration-200">
              {buttonIconType === 'svg' ? (
                renderSvgIcon(buttonIcon)
              ) : (
                <img
                  src={buttonIcon}
                  alt="Button Icon"
                  className="w-[16px] h-[16px]"
                />
              )}
            </div>
          )}
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default NewCard;