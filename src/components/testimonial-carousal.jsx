"use client"
import TestimonialCard from "./testimonial-card";
import { useState, useEffect } from "react"

const LeftArrowIcon = ({ disabled = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="34" viewBox="0 0 43 34" fill="none">
    <path 
      d="M35.917 17L7.58366 17" 
      stroke={disabled ? "#B4B4B4" : "#0D4F7A"} 
      strokeWidth="2.83333" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M17.5 26.916L7.58333 16.9993L17.5 7.08268" 
      stroke={disabled ? "#B4B4B4" : "#0D4F7A"} 
      strokeWidth="2.83333" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrowIcon = ({ disabled = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="34" viewBox="0 0 43 34" fill="none">
    <path 
      d="M7.08301 17L35.4163 17" 
      stroke={disabled ? "#B4B4B4" : "#0D4F7A"} 
      strokeWidth="2.83333" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M25.5 7.08398L35.4167 17.0007L25.5 26.9173" 
      stroke={disabled ? "#B4B4B4" : "#0D4F7A"} 
      strokeWidth="2.83333" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const TestimonialCarousel = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size
  useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);
  
  // Navigation logic based on screen size
  const increment = isMobile ? 1 : 3;
  const maxVisiblePerSlide = isMobile ? 1 : 3;
  
  const canGoPrev = currentIndex > 0;
  const canGoNext = isMobile 
    ? currentIndex < testimonials.length - 1  // Mobile: can go until last testimonial
    : currentIndex + 3 < testimonials.length; // Desktop: can go until last batch of 3
  
  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + increment);
    }
  };
  
  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - increment);
    }
  };
  
  // Get visible testimonials
  const getVisibleTestimonials = () => {
    const remaining = testimonials.length - currentIndex;
    const countToShow = Math.min(maxVisiblePerSlide, remaining);
    
    return testimonials.slice(currentIndex, currentIndex + countToShow);
  };
  
  // ... rest of your component
  
  const visibleTestimonials = getVisibleTestimonials();
  
  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[100px] mt-[14px] md:mt-[24px]">
  <div className="max-w-7xl mx-auto">
      {/* Patient Satisfaction Badge */}
      <div className="flex justify-center">
        <div className="bg-[#4CAF50] text-white px-[16px] md:px-[24px] py-[8px] md:py-[10px] rounded-[100px] flex items-center gap-[6px] md:gap-[10px]">
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M20.0638 8.45288L15.7814 12.6274L16.7927 18.5234C16.8144 18.6498 16.8002 18.7798 16.7519 18.8986C16.7035 19.0174 16.6229 19.1203 16.5191 19.1957C16.4153 19.2711 16.2925 19.316 16.1646 19.3252C16.0366 19.3344 15.9087 19.3077 15.7951 19.248L10.5 16.4643L5.20556 19.2473C5.09203 19.307 4.96405 19.3338 4.83611 19.3245C4.70817 19.3153 4.58536 19.2704 4.48158 19.195C4.37779 19.1196 4.29717 19.0167 4.24883 18.8979C4.20048 18.7791 4.18634 18.6491 4.208 18.5227L5.21932 12.6267L0.93619 8.45288C0.844256 8.36331 0.779232 8.2498 0.748479 8.12518C0.717727 8.00057 0.722473 7.86983 0.762181 7.74777C0.801889 7.62572 0.874973 7.51721 0.973159 7.43454C1.07135 7.35187 1.19071 7.29834 1.31775 7.28001L7.23644 6.42063L9.88332 1.05676C10.115 0.587199 10.885 0.587199 11.1167 1.05676L13.7636 6.42063L19.6823 7.28001C19.809 7.29882 19.928 7.35262 20.0258 7.43535C20.1237 7.51807 20.1965 7.62645 20.2362 7.74831C20.2758 7.87016 20.2807 8.00065 20.2502 8.12512C20.2198 8.24959 20.1552 8.36309 20.0638 8.45288Z" fill="white"/>
  </svg>
  <span className="font-[500] text-[14px] md:text-[16px] font-['Inter'] ">97% Patient Satisfaction Rate</span>
</div>
      </div>
      {/* Carousel Container */}
      <div className="relative mt-[32px] md:mt-[60px]">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentIndex}`}
              className={`transition-all duration-300 ${index > 0 ? "hidden md:block" : ""}`}
            >
              <TestimonialCard
                name={testimonial.name}
                procedure={testimonial.procedure}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                initials={testimonial.initials}
                bgColor={testimonial.bgColor}
                profileImage={testimonial.profileImage}
              />
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center mt-[16px] md:mt-[46px] items-center gap-[34px]">
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`transition-all duration-200 ${
              canGoPrev ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-75'
            }`}
            aria-label="Previous testimonial"
          >
            <LeftArrowIcon disabled={!canGoPrev} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`transition-all duration-200 ${
              canGoNext ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-75'
            }`}
            aria-label="Next testimonial"
          >
            <RightArrowIcon disabled={!canGoNext} />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;