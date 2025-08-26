import React from 'react';
import { Star } from 'lucide-react';

// Props-based TestimonialCard component
const TestimonialCard = ({ 
  name, 
  procedure, 
  testimonial, 
  rating = 5, 
  initials, 
  profileImage, // New prop for profile image
  bgColor = "from-pink-200 to-pink-300" 
}) => {
  return (
    <div className="mx-auto bg-[#FAFAFA] rounded-[20px] p-[18px] md:p-6 pt-[58px] md:pt-[60px] relative mt-10">
      {/* Profile Image - positioned at top-left, half outside the card */}
      <div className="absolute -top-10 left-6 md:left-5">
        <div className="w-[84px] md:w-[100px] h-[84px] md:h-[100px] rounded-full overflow-hidden bg-pink-200 flex items-center justify-center shadow-md">
          {profileImage ? (
            <img 
              src={profileImage} 
              alt={`${name} profile`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${bgColor} flex items-center justify-center`}>
              <span className="text-gray-700 text-2xl font-semibold">{initials}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Star Rating */}
      <div className="flex justify-start mt-[0px] md:mt-[10px]">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            className="w-[18px] h-[18px] text-[#F5C74D] fill-current mr-[8px]"
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <div className="mt-[20px] md:mt-[14px]">
        <p className="text-[#2D2D2D] font-['Inter'] text-[16px] font-[400] leading-[23px]">
          {testimonial}
        </p>
      </div>
      
      {/* Patient Info */}
      <div>
        <h3 className="text-[#0D4F7A] font-['Inter'] font-[600] text-[18px] md:text-[20px] mt-[14px] md:mt-[20px]">
          {name}
        </h3>
        <p className="text-[#2D2D2D] font-['Inter'] font-[300] text-[12px]">
          {procedure}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;