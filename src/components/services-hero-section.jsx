import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesHeroSection = () => {
  return (
    <section className="w-full bg-transparent py-12 md:py-25 px-[20px] mt-[41px] md:mt-[72px] md:px-[60px] lg:px-[100px] ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Subtitle */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1F2937] mb-2 font-['Inter'] leading-tight">
            Your Joints, Our Expertise
          </h1>
          <p className="text-[#6B7280] text-base md:text-lg px-5 leading-relaxed mb-8 max-w-3xl mx-auto">
            Minimally invasive solutions from injury to recovery — tailored for athletes and seniors alike.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
          <Link
            href="/schedule"
            className="h-14 w-80 bg-[#1E40AF] text-white px-6 lg:px-8 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-[#1D4ED8] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 17.5H15M10 2.5V14.1667M10 14.1667L14.1667 10M10 14.1667L5.83333 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="whitespace-nowrap">Download the Joint Care Playbook</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
          
          <Link
            href="/consultation"
            className="h-14 w-80 border border-[#1E40AF] text-[#1E40AF] px-6 lg:px-8 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-[#1E40AF] hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M7.16683 3.33332H6.50033C5.5669 3.33332 5.09985 3.33332 4.74333 3.51498C4.42972 3.67477 4.17494 3.92955 4.01515 4.24315C3.8335 4.59967 3.8335 5.06673 3.8335 6.00015V6.66666M7.16683 3.33332H13.8335M7.16683 3.33332V1.66666M13.8335 3.33332H14.5003C15.4337 3.33332 15.8998 3.33332 16.2563 3.51498C16.5699 3.67477 16.8256 3.92955 16.9854 4.24315C17.1668 4.59932 17.1668 5.06582 17.1668 5.99741V6.66666M13.8335 3.33332V1.66666M3.8335 6.66666V14.0002C3.8335 14.9336 3.8335 15.4 4.01515 15.7566C4.17494 16.0702 4.42972 16.3254 4.74333 16.4852C5.0995 16.6667 5.56599 16.6667 6.49759 16.6667H14.5027C15.4343 16.6667 15.9002 16.6667 16.2563 16.4852C16.5699 16.3254 16.8256 16.0702 16.9854 15.7566C17.1668 15.4004 17.1668 14.9346 17.1668 14.003V6.66666M3.8335 6.66666H17.1668M13.8335 13.3333H13.8352L13.8351 13.335L13.8335 13.335V13.3333ZM10.5002 13.3333H10.5018L10.5018 13.335L10.5002 13.335V13.3333ZM7.16683 13.3333H7.1685L7.16846 13.335L7.16683 13.335V13.3333ZM13.8351 9.99999V10.0017L13.8335 10.0016V9.99999H13.8351ZM10.5002 9.99999H10.5018L10.5018 10.0017L10.5002 10.0016V9.99999ZM7.16683 9.99999H7.1685L7.16846 10.0017L7.16683 10.0016V9.99999Z" stroke="#0D4F7A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"/>
            </svg>
            <span className="whitespace-nowrap">Book Assessment</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeroSection