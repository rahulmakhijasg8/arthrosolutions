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

  return (
    <section className="w-full mt-[12px] md:mt-[60px] px-[20px] md:px-[60px] lg:px-[100px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* FAQ Items */}
        <div className="overflow-hidden">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => toggleFaq(index)}
              number={index + 1} // Pass the question number
            />
          ))}
        </div>
      </div>
    </section>
  );
}