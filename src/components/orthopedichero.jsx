import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const HeroSection = ({ 
  backgroundImage = '/insuranceherobg.png',
  title,
  description,
  buttonText = 'Call Us Now',
  buttonHref = 'tel:+918591353530',
  buttonIcon: ButtonIcon = ArrowRight,
  rightImage,
  rightImageAlt = 'Business solutions illustration',
  showButton = true,
  stats
}) => {
  
  // Function to render title with highlighted text
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    
    // If title is an array of objects with text and highlight properties
    return title.map((part, index) => (
      <span 
        key={index}
        className='leading-[36px] md:leading-[78px]'
        style={{
          color: part.highlight ? '#0D4F7A' : '#2D2D2D',
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: 'Outfit, sans-serif',
          fontSize: 'clamp(34px, 4vw, 56px)',
          fontWeight: 700,
        }}
      >
        {part.text}
      </span>
    ));
  };
  return (
    <div 
      className='w-full' 
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: "darken",
        opacity: 100
      }}
    >
      <section className="w-full py-12 pt-0 md:py-20 px-4 md:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-0 md:gap-0">
          {/* Left Column */}
          <div className="w-full md:w-[60%] md:pr-6 flex flex-col mt-15">
            <h1 
              className="font-normal mb-4 leading-[36px] md:leading-[78px]"
              style={{
                color: '#2D2D2D',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(34px, 4vw, 56px)',
                fontWeight: 700,
              }}
            >
              {renderTitle()}
            </h1>
            
            <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] md:text-[20px] mb-8 tracking-normal leading-relaxed md:leading-[1.6]">
              {description}
            </p>
            
            {showButton && (
              <div>
                <Link 
                  href={buttonHref}
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 md:px-7 md:py-4 text-white font-['Lexend'] font-medium transition-all duration-300 hover:bg-opacity-90 text-[18px] md:text-lg w-auto tracking-normal"
                  style={{
                    backgroundColor: '#0D4F7A',
                    borderRadius: '6px'
                  }}
                >
                  {buttonText}
                  {ButtonIcon && <ButtonIcon className="h-6 w-6" />}
                </Link>
              </div>
            )}
          </div>
          
          {/* Right Column with Image */}
          {rightImage && (
            <div className="w-full md:w-[50%] flex-col items-center justify-center">
              <div className="w-full h-[100%] [@media(min-width:776px)and(max-width:817px)]:h-[35%] [@media(min-width:818px)and(max-width:903px)]:h-[45%] [@media(min-width:904px)and(max-width:995px)]:h-[50%] [@media(min-width:941px)and(max-width:995px)]:h-[55%] [@media(min-width:971px)and(max-width:995px)]:h-[60%] lg:h-[100%] relative rounded-[50px]">
                <Image
                  src={rightImage}
                  alt={rightImageAlt}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              {stats.length > 0 && (
          <div className="relative flex z-10 justify-center bg-white -mt-30 md:-mt-45">
            <div className="flex flex-wrap w-full md:w-[95%] justify-center gap-8 py-3 md:py-5 md:gap-26 rounded-[20px] shadow-[0_20.553px_49.915px_1.468px_rgba(0,0,0,0.1)]">
              {stats.map((stat, index) => (
                <div key={index} className="flex-col text-center items-center justify-center">
                  <div 
                    className="font-bold mb-2"
                    style={{
                      color: stat.numberColor || '#0D4F7A',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 'clamp(36px, 5vw, 48px)',
                      fontWeight: 700,
                      lineHeight: '1.2'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="font-medium"
                    style={{
                      color: '#8B8B8B',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 'clamp(16px, 2vw, 22px)',
                      fontWeight: 500,
                      lineHeight: '1.4'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
            </div>
          )}
          
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default HeroSection;