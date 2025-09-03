"use client"
import TestimonialCard from "./testimonial-card";
import { useState, useEffect, useRef } from "react"

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
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Mouse drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < maxScroll - 5);
    }
  };

  useEffect(() => {
    const checkScrollability = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        setCanScrollLeft(container.scrollLeft > 5);
        setCanScrollRight(maxScroll > 5);
      }
    };
    
    checkScrollability();
    
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [testimonials]);
  
  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      scrollContainerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  // Calculate scroll amount more precisely
  const getScrollAmount = () => {
    if (!scrollContainerRef.current) return 0;
    
    const container = scrollContainerRef.current;
    const containerWidth = container.clientWidth;
    const gap = 20; // Gap between cards
    
    if (isMobile) {
      // On mobile, scroll by full container width to show next card completely
      return containerWidth;
    } else {
      // On desktop, scroll by one card width + gap
      const cardWidth = (containerWidth - (2 * gap)) / 3; // 3 cards visible with gaps
      return cardWidth + gap;
    }
  };
  
  const nextSlide = () => {
    if (scrollContainerRef.current && canScrollRight) {
      const container = scrollContainerRef.current;
      const scrollAmount = getScrollAmount();
      
      container.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
      
      // Update current index for mobile
      if (isMobile) {
        setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - 1));
      }
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current && canScrollLeft) {
      const container = scrollContainerRef.current;
      const scrollAmount = getScrollAmount();
      
      container.scrollBy({ 
        left: -scrollAmount, 
        behavior: 'smooth' 
      });
      
      // Update current index for mobile
      if (isMobile) {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };
  
  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[100px] mt-[14px] md:mt-[24px]">
      <div className="max-w-7xl relative mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 hidden lg:block -left-25 -top-75" width="425" height="442" viewBox="0 0 425 442" fill="none">
          <g filter="url(#filter0_f_226_10783)">
            <path fillRule="evenodd" clipRule="evenodd" d="M201.944 156.285C220.761 159.188 223.126 185.324 235.61 199.695C246.367 212.077 267.434 217.016 268.895 233.351C270.386 250.019 255.707 263.7 242.221 273.614C230.702 282.082 216.189 281.34 201.944 282.568C185.408 283.993 167.993 290.24 154.067 281.213C137.932 270.755 125.615 252.57 126.009 233.351C126.399 214.347 142.647 200.952 155.99 187.41C169.488 173.711 182.934 153.352 201.944 156.285Z" fill="#D8E8FF"/>
          </g>
          <defs>
            <filter id="filter0_f_226_10783" x="-30" y="0" width="455" height="442" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="78" result="effect1_foregroundBlur_226_10783"/>
            </filter>
          </defs>
        </svg>
        
        {/* Patient Satisfaction Badge */}
        <div className="flex justify-center">
          <div className="bg-[#4CAF50] text-white px-[16px] md:px-[24px] py-[8px] md:py-[10px] rounded-[100px] flex items-center gap-[6px] md:gap-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M20.0638 8.45288L15.7814 12.6274L16.7927 18.5234C16.8144 18.6498 16.8002 18.7798 16.7519 18.8986C16.7035 19.0174 16.6229 19.1203 16.5191 19.1957C16.4153 19.2711 16.2925 19.316 16.1646 19.3252C16.0366 19.3344 15.9087 19.3077 15.7951 19.248L10.5 16.4643L5.20556 19.2473C5.09203 19.307 4.96405 19.3338 4.83611 19.3245C4.70817 19.3153 4.58536 19.2704 4.48158 19.195C4.37779 19.1196 4.29717 19.0167 4.24883 18.8979C4.20048 18.7791 4.18634 18.6491 4.208 18.5227L5.21932 12.6267L0.93619 8.45288C0.844256 8.36331 0.779232 8.2498 0.748479 8.12518C0.717727 8.00057 0.722473 7.86983 0.762181 7.74777C0.801889 7.62572 0.874973 7.51721 0.973159 7.43454C1.07135 7.35187 1.19071 7.29834 1.31775 7.28001L7.23644 6.42063L9.88332 1.05676C10.115 0.587199 10.885 0.587199 11.1167 1.05676L13.7636 6.42063L19.6823 7.28001C19.809 7.29882 19.928 7.35262 20.0258 7.43535C20.1237 7.51807 20.1965 7.62645 20.2362 7.74831C20.2758 7.87016 20.2807 8.00065 20.2502 8.12512C20.2198 8.24959 20.1552 8.36309 20.0638 8.45288Z" fill="white"/>
            </svg>
            <span className="font-[500] text-[14px] md:text-[16px] font-['Inter']">97% Patient Satisfaction Rate</span>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative mt-[45px] md:mt-[60px]">
          {/* Scrollable Cards Container */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-[20px] pb-4 select-none"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-14px)] snap-start"
                  style={{ userSelect: 'none' }}
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
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-[16px] md:mt-[46px] items-center gap-[34px]">
            <button
              onClick={prevSlide}
              disabled={!canScrollLeft}
              className={`transition-all duration-200 ${
                canScrollLeft ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-75'
              }`}
              aria-label="Previous testimonial"
            >
              <LeftArrowIcon disabled={!canScrollLeft} />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={!canScrollRight}
              className={`transition-all duration-200 ${
                canScrollRight ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-75'
              }`}
              aria-label="Next testimonial"
            >
              <RightArrowIcon disabled={!canScrollRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;