"use client"

import { useState } from "react";
import FaqItem from "./faqitem";

export default function FaqSection({ 
  faqs = [] 
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
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

  return (
    <section className="w-full mt-[12px] md:mt-[60px] px-[20px] md:px-[60px] lg:px-[100px] bg-white">
      <div className="max-w-7xl relative mx-auto">
        {/* Your existing SVGs */}
        
        {/* FAQ Items */}
        <div className="overflow-hidden">
          {faqs.map((faq, index) => (
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
      </div>
    </section>
  );
}