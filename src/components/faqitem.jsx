export default function FaqItem({ question, answer, isOpen, onClick, number }) {
  return (
    <div className="mt-[24px] md:mt-[46px] first:mt-0">
      <button
        className={`w-full flex items-center justify-between px-4 text-left focus:outline-none duration-200`}
        onClick={onClick}
      >
        <span className="font-['Inter'] text-[#0D4F7A] text-[20px] md:text-[28px] leading-[26px] md:leading-normal font-[400]">
          {number}. {question}
        </span>
        <span className="ml-4 flex-shrink-0 hover:cursor-pointer transition-transform duration-200">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 20H20M20 20H30M20 20V30M20 20V10" stroke="#0151CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 20H30" stroke="#0151CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </button>
      
      {isOpen ? (
        <div 
          className="animate-slideDown px-4"
          style={{ animationDuration: '500ms' }}
        >
          <p style={{ whiteSpace: 'pre-wrap' }} className="font-['Inter'] mt-[6px] md:mt-[18px] text-[16px] md:text-[18px] leading-[27px] text-[#2D2D2D] text-[400]">
            {answer}
          </p>
        </div>
      ) : null}
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown forwards;
        }
      `}</style>
    </div>
  );
}