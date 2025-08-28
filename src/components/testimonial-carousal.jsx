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
      setCanScrollRight(maxScroll > 5); // Check if there's actual content to scroll
    }
  };
  
  checkScrollability();
  
  // Recheck on window resize
  window.addEventListener('resize', checkScrollability);
  return () => window.removeEventListener('resize', checkScrollability);
}, [testimonials]);
  
  // Navigation logic based on screen size
  const increment = isMobile ? 1 : 3;
  const maxVisiblePerSlide = isMobile ? 1 : 3;
  
  const canGoPrev = currentIndex > 0;
  const canGoNext = isMobile 
    ? currentIndex < testimonials.length - 1  // Mobile: can go until last testimonial
    : currentIndex + 3 < testimonials.length; // Desktop: can go until last batch of 3
  
  const nextSlide = () => {
  if (scrollContainerRef.current) {
    const container = scrollContainerRef.current;
    const scrollAmount = isMobile 
      ? container.offsetWidth  // Mobile: scroll by 1 card width (full container width)
      : container.offsetWidth; // Desktop: scroll by full container width (3 cards)
    
    container.scrollBy({ 
      left: scrollAmount, 
      behavior: 'smooth' 
    });
  }
};

const prevSlide = () => {
  if (scrollContainerRef.current && canScrollLeft) {
    const container = scrollContainerRef.current;
    const scrollAmount = isMobile 
      ? container.offsetWidth  // Mobile: scroll by 1 card width (full container width)  
      : container.offsetWidth; // Desktop: scroll by full container width (3 cards)
    
    container.scrollBy({ 
      left: -scrollAmount, 
      behavior: 'smooth' 
    });
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
  <div className="max-w-7xl relative mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-25 -top-75" width="425" height="442" viewBox="0 0 425 442" fill="none">
  <g filter="url(#filter0_f_226_10783)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M201.944 156.285C220.761 159.188 223.126 185.324 235.61 199.695C246.367 212.077 267.434 217.016 268.895 233.351C270.386 250.019 255.707 263.7 242.221 273.614C230.702 282.082 216.189 281.34 201.944 282.568C185.408 283.993 167.993 290.24 154.067 281.213C137.932 270.755 125.615 252.57 126.009 233.351C126.399 214.347 142.647 200.952 155.99 187.41C169.488 173.711 182.934 153.352 201.944 156.285Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_226_10783" x="-30" y="0" width="455" height="442" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="78" result="effect1_foregroundBlur_226_10783"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -top-26" width="71" height="69" viewBox="0 0 71 69" fill="none">
  <path opacity="0.24" d="M68.2624 5.32092C66.754 5.32092 65.5248 4.12643 65.5248 2.66046C65.5248 1.19449 66.754 0 68.2624 0C69.7709 0 71 1.19449 71 2.66046C71 4.13548 69.7709 5.32092 68.2624 5.32092ZM71 18.578C71 17.112 69.7709 15.9175 68.2624 15.9175C66.754 15.9175 65.5248 17.112 65.5248 18.578C65.5248 20.0439 66.754 21.2384 68.2624 21.2384C69.7709 21.2384 71 20.053 71 18.578ZM71 34.4955C71 33.0295 69.7709 31.835 68.2624 31.835C66.754 31.835 65.5248 33.0295 65.5248 34.4955C65.5248 35.9614 66.754 37.1559 68.2624 37.1559C69.7709 37.165 71 35.9705 71 34.4955ZM71 50.422C71 48.9561 69.7709 47.7616 68.2624 47.7616C66.754 47.7616 65.5248 48.9561 65.5248 50.422C65.5248 51.888 66.754 53.0825 68.2624 53.0825C69.7709 53.0825 71 51.888 71 50.422ZM71 66.3395C71 64.8736 69.7709 63.6791 68.2624 63.6791C66.754 63.6791 65.5248 64.8736 65.5248 66.3395C65.5248 67.8055 66.754 69 68.2624 69C69.7709 69 71 67.8055 71 66.3395ZM54.6211 2.66046C54.6211 1.19449 53.392 0 51.8835 0C50.3751 0 49.1459 1.19449 49.1459 2.66046C49.1459 4.12643 50.3751 5.32092 51.8835 5.32092C53.392 5.32092 54.6211 4.13548 54.6211 2.66046ZM54.6211 18.578C54.6211 17.112 53.392 15.9175 51.8835 15.9175C50.3751 15.9175 49.1459 17.112 49.1459 18.578C49.1459 20.0439 50.3751 21.2384 51.8835 21.2384C53.392 21.2384 54.6211 20.053 54.6211 18.578ZM54.6211 34.4955C54.6211 33.0295 53.392 31.835 51.8835 31.835C50.3751 31.835 49.1459 33.0295 49.1459 34.4955C49.1459 35.9614 50.3751 37.1559 51.8835 37.1559C53.392 37.165 54.6211 35.9705 54.6211 34.4955ZM54.6211 50.422C54.6211 48.9561 53.392 47.7616 51.8835 47.7616C50.3751 47.7616 49.1459 48.9561 49.1459 50.422C49.1459 51.888 50.3751 53.0825 51.8835 53.0825C53.392 53.0825 54.6211 51.888 54.6211 50.422ZM54.6211 66.3395C54.6211 64.8736 53.392 63.6791 51.8835 63.6791C50.3751 63.6791 49.1459 64.8736 49.1459 66.3395C49.1459 67.8055 50.3751 69 51.8835 69C53.392 69 54.6211 67.8055 54.6211 66.3395ZM38.2329 2.66046C38.2329 1.19449 37.0038 0 35.4953 0C33.9869 0 32.7578 1.19449 32.7578 2.66046C32.7578 4.12643 33.9869 5.32092 35.4953 5.32092C37.0131 5.32092 38.2329 4.13548 38.2329 2.66046ZM38.2329 18.578C38.2329 17.112 37.0038 15.9175 35.4953 15.9175C33.9869 15.9175 32.7578 17.112 32.7578 18.578C32.7578 20.0439 33.9869 21.2384 35.4953 21.2384C37.0131 21.2384 38.2329 20.053 38.2329 18.578ZM38.2329 34.4955C38.2329 33.0295 37.0038 31.835 35.4953 31.835C33.9869 31.835 32.7578 33.0295 32.7578 34.4955C32.7578 35.9614 33.9869 37.1559 35.4953 37.1559C37.0131 37.165 38.2329 35.9705 38.2329 34.4955ZM38.2329 50.422C38.2329 48.9561 37.0038 47.7616 35.4953 47.7616C33.9869 47.7616 32.7578 48.9561 32.7578 50.422C32.7578 51.888 33.9869 53.0825 35.4953 53.0825C37.0131 53.0825 38.2329 51.888 38.2329 50.422ZM38.2329 66.3395C38.2329 64.8736 37.0038 63.6791 35.4953 63.6791C33.9869 63.6791 32.7578 64.8736 32.7578 66.3395C32.7578 67.8055 33.9869 69 35.4953 69C37.0131 69 38.2329 67.8055 38.2329 66.3395ZM21.854 2.66046C21.854 1.19449 20.6249 0 19.1164 0C17.608 0 16.3789 1.19449 16.3789 2.66046C16.3789 4.12643 17.608 5.32092 19.1164 5.32092C20.6342 5.32092 21.854 4.13548 21.854 2.66046ZM21.854 18.578C21.854 17.112 20.6249 15.9175 19.1164 15.9175C17.608 15.9175 16.3789 17.112 16.3789 18.578C16.3789 20.0439 17.608 21.2384 19.1164 21.2384C20.6342 21.2384 21.854 20.053 21.854 18.578ZM21.854 34.4955C21.854 33.0295 20.6249 31.835 19.1164 31.835C17.608 31.835 16.3789 33.0295 16.3789 34.4955C16.3789 35.9614 17.608 37.1559 19.1164 37.1559C20.6342 37.165 21.854 35.9705 21.854 34.4955ZM21.854 50.422C21.854 48.9561 20.6249 47.7616 19.1164 47.7616C17.608 47.7616 16.3789 48.9561 16.3789 50.422C16.3789 51.888 17.608 53.0825 19.1164 53.0825C20.6342 53.0825 21.854 51.888 21.854 50.422ZM21.854 66.3395C21.854 64.8736 20.6249 63.6791 19.1164 63.6791C17.608 63.6791 16.3789 64.8736 16.3789 66.3395C16.3789 67.8055 17.608 69 19.1164 69C20.6342 69 21.854 67.8055 21.854 66.3395ZM5.47515 2.66046C5.47515 1.19449 4.24604 0 2.73758 0C1.22912 0 0 1.19449 0 2.66046C0 4.12643 1.22912 5.32092 2.73758 5.32092C4.24604 5.32092 5.47515 4.13548 5.47515 2.66046ZM5.47515 18.578C5.47515 17.112 4.24604 15.9175 2.73758 15.9175C1.22912 15.9175 0 17.112 0 18.578C0 20.0439 1.22912 21.2384 2.73758 21.2384C4.24604 21.2384 5.47515 20.053 5.47515 18.578ZM5.47515 34.4955C5.47515 33.0295 4.24604 31.835 2.73758 31.835C1.22912 31.835 0 33.0295 0 34.4955C0 35.9614 1.22912 37.1559 2.73758 37.1559C4.24604 37.1559 5.47515 35.9705 5.47515 34.4955ZM5.47515 50.422C5.47515 48.9561 4.24604 47.7616 2.73758 47.7616C1.22912 47.7616 0 48.9561 0 50.422C0 51.888 1.22912 53.0825 2.73758 53.0825C4.24604 53.0825 5.47515 51.888 5.47515 50.422ZM5.47515 66.3395C5.47515 64.8736 4.24604 63.6791 2.73758 63.6791C1.22912 63.6791 0 64.8736 0 66.3395C0 67.8055 1.22912 69 2.73758 69C4.24604 69 5.47515 67.8055 5.47515 66.3395Z" fill="#0D4F7A"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-25 bottom-0" width="53" height="69" viewBox="0 0 53 69" fill="none">
  <path opacity="0.24" d="M50.2624 5.32092C48.754 5.32092 47.5248 4.12643 47.5248 2.66046C47.5248 1.19449 48.754 0 50.2624 0C51.7709 0 53 1.19449 53 2.66046C53 4.13548 51.7709 5.32092 50.2624 5.32092ZM53 18.578C53 17.112 51.7709 15.9175 50.2624 15.9175C48.754 15.9175 47.5248 17.112 47.5248 18.578C47.5248 20.0439 48.754 21.2384 50.2624 21.2384C51.7709 21.2384 53 20.053 53 18.578ZM53 34.4955C53 33.0295 51.7709 31.835 50.2624 31.835C48.754 31.835 47.5248 33.0295 47.5248 34.4955C47.5248 35.9614 48.754 37.1559 50.2624 37.1559C51.7709 37.165 53 35.9705 53 34.4955ZM53 50.422C53 48.9561 51.7709 47.7616 50.2624 47.7616C48.754 47.7616 47.5248 48.9561 47.5248 50.422C47.5248 51.888 48.754 53.0825 50.2624 53.0825C51.7709 53.0825 53 51.888 53 50.422ZM53 66.3395C53 64.8736 51.7709 63.6791 50.2624 63.6791C48.754 63.6791 47.5248 64.8736 47.5248 66.3395C47.5248 67.8055 48.754 69 50.2624 69C51.7709 69 53 67.8055 53 66.3395ZM36.6211 2.66046C36.6211 1.19449 35.392 0 33.8835 0C32.3751 0 31.1459 1.19449 31.1459 2.66046C31.1459 4.12643 32.3751 5.32092 33.8835 5.32092C35.392 5.32092 36.6211 4.13548 36.6211 2.66046ZM36.6211 18.578C36.6211 17.112 35.392 15.9175 33.8835 15.9175C32.3751 15.9175 31.1459 17.112 31.1459 18.578C31.1459 20.0439 32.3751 21.2384 33.8835 21.2384C35.392 21.2384 36.6211 20.053 36.6211 18.578ZM36.6211 34.4955C36.6211 33.0295 35.392 31.835 33.8835 31.835C32.3751 31.835 31.1459 33.0295 31.1459 34.4955C31.1459 35.9614 32.3751 37.1559 33.8835 37.1559C35.392 37.165 36.6211 35.9705 36.6211 34.4955ZM36.6211 50.422C36.6211 48.9561 35.392 47.7616 33.8835 47.7616C32.3751 47.7616 31.1459 48.9561 31.1459 50.422C31.1459 51.888 32.3751 53.0825 33.8835 53.0825C35.392 53.0825 36.6211 51.888 36.6211 50.422ZM36.6211 66.3395C36.6211 64.8736 35.392 63.6791 33.8835 63.6791C32.3751 63.6791 31.1459 64.8736 31.1459 66.3395C31.1459 67.8055 32.3751 69 33.8835 69C35.392 69 36.6211 67.8055 36.6211 66.3395ZM20.2329 2.66046C20.2329 1.19449 19.0038 0 17.4953 0C15.9869 0 14.7578 1.19449 14.7578 2.66046C14.7578 4.12643 15.9869 5.32092 17.4953 5.32092C19.0131 5.32092 20.2329 4.13548 20.2329 2.66046ZM20.2329 18.578C20.2329 17.112 19.0038 15.9175 17.4953 15.9175C15.9869 15.9175 14.7578 17.112 14.7578 18.578C14.7578 20.0439 15.9869 21.2384 17.4953 21.2384C19.0131 21.2384 20.2329 20.053 20.2329 18.578ZM20.2329 34.4955C20.2329 33.0295 19.0038 31.835 17.4953 31.835C15.9869 31.835 14.7578 33.0295 14.7578 34.4955C14.7578 35.9614 15.9869 37.1559 17.4953 37.1559C19.0131 37.165 20.2329 35.9705 20.2329 34.4955ZM20.2329 50.422C20.2329 48.9561 19.0038 47.7616 17.4953 47.7616C15.9869 47.7616 14.7578 48.9561 14.7578 50.422C14.7578 51.888 15.9869 53.0825 17.4953 53.0825C19.0131 53.0825 20.2329 51.888 20.2329 50.422ZM20.2329 66.3395C20.2329 64.8736 19.0038 63.6791 17.4953 63.6791C15.9869 63.6791 14.7578 64.8736 14.7578 66.3395C14.7578 67.8055 15.9869 69 17.4953 69C19.0131 69 20.2329 67.8055 20.2329 66.3395ZM3.85401 2.66046C3.85401 1.19449 2.62489 0 1.11643 0C-0.392029 0 -1.62109 1.19449 -1.62109 2.66046C-1.62109 4.12643 -0.392029 5.32092 1.11643 5.32092C2.6342 5.32092 3.85401 4.13548 3.85401 2.66046ZM3.85401 18.578C3.85401 17.112 2.62489 15.9175 1.11643 15.9175C-0.392029 15.9175 -1.62109 17.112 -1.62109 18.578C-1.62109 20.0439 -0.392029 21.2384 1.11643 21.2384C2.6342 21.2384 3.85401 20.053 3.85401 18.578ZM3.85401 34.4955C3.85401 33.0295 2.62489 31.835 1.11643 31.835C-0.392029 31.835 -1.62109 33.0295 -1.62109 34.4955C-1.62109 35.9614 -0.392029 37.1559 1.11643 37.1559C2.6342 37.165 3.85401 35.9705 3.85401 34.4955ZM3.85401 50.422C3.85401 48.9561 2.62489 47.7616 1.11643 47.7616C-0.392029 47.7616 -1.62109 48.9561 -1.62109 50.422C-1.62109 51.888 -0.392029 53.0825 1.11643 53.0825C2.6342 53.0825 3.85401 51.888 3.85401 50.422ZM3.85401 66.3395C3.85401 64.8736 2.62489 63.6791 1.11643 63.6791C-0.392029 63.6791 -1.62109 64.8736 -1.62109 66.3395C-1.62109 67.8055 -0.392029 69 1.11643 69C2.6342 69 3.85401 67.8055 3.85401 66.3395ZM-12.5248 2.66046C-12.5248 1.19449 -13.754 0 -15.2624 0C-16.7709 0 -18 1.19449 -18 2.66046C-18 4.12643 -16.7709 5.32092 -15.2624 5.32092C-13.754 5.32092 -12.5248 4.13548 -12.5248 2.66046ZM-12.5248 18.578C-12.5248 17.112 -13.754 15.9175 -15.2624 15.9175C-16.7709 15.9175 -18 17.112 -18 18.578C-18 20.0439 -16.7709 21.2384 -15.2624 21.2384C-13.754 21.2384 -12.5248 20.053 -12.5248 18.578ZM-12.5248 34.4955C-12.5248 33.0295 -13.754 31.835 -15.2624 31.835C-16.7709 31.835 -18 33.0295 -18 34.4955C-18 35.9614 -16.7709 37.1559 -15.2624 37.1559C-13.754 37.1559 -12.5248 35.9705 -12.5248 34.4955ZM-12.5248 50.422C-12.5248 48.9561 -13.754 47.7616 -15.2624 47.7616C-16.7709 47.7616 -18 48.9561 -18 50.422C-18 51.888 -16.7709 53.0825 -15.2624 53.0825C-13.754 53.0825 -12.5248 51.888 -12.5248 50.422ZM-12.5248 66.3395C-12.5248 64.8736 -13.754 63.6791 -15.2624 63.6791C-16.7709 63.6791 -18 64.8736 -18 66.3395C-18 67.8055 -16.7709 69 -15.2624 69C-13.754 69 -12.5248 67.8055 -12.5248 66.3395Z" fill="#0D4F7A"/>
</svg>
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
      <div className="relative mt-[45px] md:mt-[60px]">
        {/* Cards Grid */}
        {/* Scrollable Cards Container */}
<div className="relative">
  <div 
    ref={scrollContainerRef}
    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-[20px] pb-4"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    onScroll={handleScroll}
  >
    {testimonials.map((testimonial, index) => (
      <div
        key={testimonial.id}
        className="flex-shrink-0 w-full md:w-[calc(33.333%-14px)] snap-start"
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