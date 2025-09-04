"use client"
import { useState, useEffect } from "react";
import FaqItem from "./faqitem";

export default function FaqSection({ 
  faqs = [] 
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const [displayedCount, setDisplayedCount] = useState(20);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Reset displayed count when switching between mobile/desktop
      setDisplayedCount(window.innerWidth < 768 ? 20 : 50);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const loadMore = () => {
    const increment = isMobile ? 20 : 50;
    setDisplayedCount(prev => prev + increment);
  };

  // Show message when no FAQs match search
  if (faqs.length === 0) {
    return (
      <section className="w-full mt-[12px] md:mt-[60px] px-[20px] md:px-[60px] lg:px-[100px] bg-white">
        <div className="max-w-7xl mx-auto text-center py-[60px]">
          <p className="font-['Inter'] text-[18px] text-[#666] mb-4">
            No FAQs found matching your search.
          </p>
          <p className="font-['Inter'] text-[14px] text-[#999]">
            Try different keywords or browse all questions below.
          </p>
        </div>
      </section>
    );
  }

  const displayedFaqs = faqs.slice(0, displayedCount);
  const hasMoreFaqs = displayedCount < faqs.length;

  return (
    <section className="w-full mt-[12px] md:mt-[60px] px-[20px] md:px-[60px] lg:px-[100px] bg-white">
      <div className="max-w-7xl relative mx-auto">
        {/* Your existing SVGs */}
        
        {/* FAQ Items */}
        <div className="overflow-hidden">
          {displayedFaqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => toggleFaq(index)}
              number={index + 1}
            />
          ))}
        </div>

        {/* View More Button */}
        {hasMoreFaqs && (
          <div className="flex justify-center mt-[40px] md:mt-[60px] mb-[40px] md:mb-[60px]">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-[24px] py-[12px] md:px-[32px] md:py-[16px] 
                         bg-[#0D4F7A] text-white border-[1px] border-[#0D4F7A] hover:bg-white hover:text-[#0D4F7A] font-['Inter'] font-medium text-[14px] md:text-[16px] 
                         rounded-[8px] transition-all duration-300 ease-in-out 
                         transform hover:scale-105"
            >
              View More FAQs
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
          </div>
        )}

        {/* Show total count */}
        <div className="text-center mt-12 text-[#666] font-['Inter'] text-[14px] mb-[20px]">
          Showing {Math.min(displayedCount, faqs.length)} of {faqs.length} FAQs
        </div>
      </div>
    </section>
  );
}