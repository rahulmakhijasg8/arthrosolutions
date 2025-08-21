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
    <div className="max-w-sm mx-auto bg-[#FAFAFA] rounded-2xl p-6 pt-12 relative mt-10">
      {/* Profile Image - positioned at top-left, half outside the card */}
      <div className="absolute -top-10 left-6">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-pink-200 flex items-center justify-center shadow-md">
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
      <div className="flex justify-start mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            className="w-5 h-5 text-yellow-400 fill-current mr-1"
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <div className="mb-6">
        <p className="text-gray-700 text-sm leading-relaxed">
          {testimonial}
        </p>
      </div>
      
      {/* Patient Info */}
      <div>
        <h3 className="text-blue-600 font-semibold text-lg mb-1">
          {name}
        </h3>
        <p className="text-gray-500 text-sm">
          {procedure}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;