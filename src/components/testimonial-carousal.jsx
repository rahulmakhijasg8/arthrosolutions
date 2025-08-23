"use client"
import TestimonialCard from "./testimonial-card";
import { useState } from "react"

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
  
  // Check if navigation is possible
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < testimonials.length - 3; // Assuming 3 cards visible on desktop
  
  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  
  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const visibleCount = 3; // Desktop shows 3, mobile shows 1 (handled by CSS)
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = currentIndex + i;
      if (index < testimonials.length) {
        visible.push(testimonials[index]);
      }
    }
    return visible;
  };
  
  const visibleTestimonials = getVisibleTestimonials();
  
  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[100px] mt-[14px] md:mt-[24px]">
  <div className="max-w-7xl mx-auto">
      {/* Patient Satisfaction Badge */}
      <div className="flex justify-center">
        <div className="bg-[#4CAF50] text-white px-[16px] md:px-[24px] py-[8px] md:py-[10px] rounded-[100px] flex items-center gap-[6px] md:gap-[10px]">
          <span className="text-white">⭐</span>
          <span className="font-semibold">97% Patient Satisfaction Rate</span>
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