import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  ArrowRight } from 'lucide-react';
import { FadeInView, SlideInRight, HoverScale } from '@/components/animations/AnimationWrappers';

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
        className='leading-[44px] text-[38px] md:text-[53px] md:leading-[38px]'
        style={{
          color: part.highlight ? '#0D4F7A' : '#2D2D2D',
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: 'Outfit, sans-serif',
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
      <section className="w-full mt-[40px] md:mt-[25px] px-[20px] md:px-[60px] lg:px-[100px]">
  <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-0 md:gap-0">
          {/* Left Column */}
          <div className="w-full md:w-[63%] flex flex-col md:mt-[100px]">
            <FadeInView delay={0.2}><h1 
              className="font-[700] text-[40px] md:text-[56px] leading-[44px] md:leading-[68px]"
              style={{
                color: '#2D2D2D',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              {renderTitle()}
            </h1></FadeInView>
            
            <FadeInView delay={0.4}><p className="font-['Inter'] mt-[12px] md:mt-[36px] text-[#000000D6] font-normal text-[16px] md:text-[18px] tracking-normal leading-[26px] md:leading-[28px]">
              {description}
            </p></FadeInView>
            
            {showButton && (
              <HoverScale>
  <FadeInView delay={0.6}>
    <div className='mt-[26px] md:mt-[46px]'>
      <Link 
        href={buttonHref}
        className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[14px] md:px-[34px] md:py-[16px] bg-[#0D4F7A] text-white border border-[#0D4F7A] hover:text-[#0D4F7A] hover:bg-white font-['Inter'] font-[500] transition-all duration-300 text-[16px] md:text-[18px] w-auto tracking-normal rounded-[6px]"
      >
        {buttonText}
        {ButtonIcon && <ButtonIcon className="h-6 w-6" />}
      </Link>
    </div>
  </FadeInView>
</HoverScale>
            )}
          </div>
          
          {/* Right Column with Image */}
          {rightImage && (
            <div className="w-full relative md:w-[50%] mt-[42px] md:mt-0 flex-col items-center justify-center">
              <Image src="/orthoanimation.svg" width={1000} height={1000} className='absolute hidden lg:block h-[56px] w-[56px] right-12 top-10' />
              <SlideInRight delay={0.3}><div className="w-full h-[100%] [@media(min-width:776px)and(max-width:817px)]:h-[35%] [@media(min-width:818px)and(max-width:903px)]:h-[45%] [@media(min-width:904px)and(max-width:995px)]:h-[50%] [@media(min-width:941px)and(max-width:995px)]:h-[55%] [@media(min-width:971px)and(max-width:995px)]:h-[60%] lg:h-[100%] relative rounded-[50px]">
                <Image
                  src={rightImage}
                  alt={rightImageAlt}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                  priority
                />
              </div></SlideInRight>
              {stats.length > 0 && (
          <FadeInView delay={1.0}><div className="relative flex z-10 justify-center bg-white -mt-30 md:-mt-27 lg:-mt-42">
            <div className="flex flex-wrap w-full justify-center rounded-[20px] shadow-[0_20.553px_49.915px_1.468px_rgba(0,0,0,0.1)]">
              {stats.map((stat, index) => (
                <div key={index} className="flex-col w-1/2 md:w-auto md:flex-1 lg:w-1/2 text-center py-[16px] px-[20px] md:px-[25px] md:py-[27px] items-center justify-center">
  <div 
    className="font-[600] font-['Inter'] text-[20px] md:text-[35px] leading-normal"
    style={{
      color: stat.numberColor || '#0D4F7A',
    }}
  >
    {stat.number}
  </div>
  <div 
    className="font-[400] mt-[6px] md:mt-[11px] font-['Inter'] text-[13px] md:text-[23px] leading-normal text-[#64648A] whitespace-nowrap" >
    {stat.label}
  </div>
</div>
              ))}
            </div>
          </div></FadeInView>
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