"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Phone, ArrowRight } from "lucide-react"

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-[#F4F8FF] pt-[41px] md:pt[72px] pb-[60px] md:pb-[100px] px-[20px] md:px-[60px] lg:px-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Header */}
          <div className="">
            <div className="flex items-center gap-2">
              <div className="bg-white py-[8px] px-[14px]  rounded-[6px] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 17" fill="none">
                  <g clipPath="url(#clip0_163_8232)">
                    <path d="M9.13866 1.89975C9.97907 1.89975 10.623 2.64671 10.4993 3.47796L10.0416 8.00624C9.77453 10.0466 8.03584 11.5726 5.97804 11.5726C3.86985 11.5726 2.10559 9.97319 1.89945 7.87509L1.58727 3.42801C1.49627 2.61289 2.1342 1.89972 2.95439 1.89972H3.01221" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                    <path d="M5.97804 11.5725V12.4819C5.97804 14.4414 7.56656 16.0299 9.52608 16.0299C11.4856 16.0299 13.0741 14.4414 13.0741 12.4819V9.56693M4.18216 2.8294H3.94189C3.42846 2.8294 3.01221 2.41318 3.01221 1.89972C3.01224 1.38629 3.42846 0.970063 3.94189 0.970063H4.18216C4.69559 0.970063 5.11184 1.38629 5.11184 1.89975C5.11184 2.41318 4.69562 2.8294 4.18216 2.8294ZM8.19333 2.8294H7.95307C7.43964 2.8294 7.02339 2.41318 7.02339 1.89972C7.02339 1.38629 7.43961 0.970032 7.95307 0.970032H8.19333C8.70677 0.970032 9.12302 1.38625 9.12302 1.89972C9.12302 2.41318 8.7068 2.8294 8.19333 2.8294Z" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                    <path d="M13.0741 9.56693C13.8183 9.56693 14.4216 8.96363 14.4216 8.21942C14.4216 7.47522 13.8183 6.87192 13.0741 6.87192C12.3299 6.87192 11.7266 7.47522 11.7266 8.21942C11.7266 8.96363 12.3299 9.56693 13.0741 9.56693Z" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_163_8232">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#0D4F7A] font-[500] text-[10px]">FRCS Ed Certified Surgeon</span>
              </div>
            </div>
            <h1 className="text-[32px] font-['Inter'] font-[700] text-[#2D2D2D] mt-[6px] font-['Inter'] leading-[44px]">
              Meet <span className="font-[700] text-[#0D4F7A]"> Dr. Mohit </span>
               Upadhyaya
            </h1>
            <p className="text-[#2D2D2D] text-[400] text-[16px] font-['Inter'] leading-[26px] mt-[12px]">
              Young, UK-Fellowship-trained orthopaedic surgeon specializing in minimally invasive 
              joint preservation, sports injuries and joint replacements.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-[26px]">
            <Link
              href="/schedule"
              className="w-fit bg-[#0D4F7A] text-white p-[14px] rounded-[6px] font-[500] text-center flex items-center justify-between hover:bg-[#1D4ED8] transition-colors"
            >
              <div className="flex items-center gap-[10px]">
                <span>Schedule Your Joint Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            <Link
              href="/consultation"
              className="w-fit border border-[#0D4F7A] text-[16px] text-[#0D4F7A] p-[14px] rounded-[6px] font-[500] text-center flex items-center justify-between hover:bg-[#0D4F7A] hover:text-white transition-colors"
            >
              <div className="flex items-center gap-[10px]">
                <span>Free 15-Min Tele-Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-3 mt-[24px]">
  <div className="bg-white rounded-lg p-2 text-center">
    <div className="text-[18px] font-[700] font-['Inter'] text-[#0D4F7A]">500+</div>
    <div className="text-[#64648A] text-[10px] font-['Inter'] font-[400] whitespace-nowrap">Successful Surgeries</div>
  </div>
  <div className="bg-white rounded-lg p-2 text-center">
    <div className="text-[18px] font-[700] font-['Inter'] text-[#4CAF50]">97%</div>
    <div className="text-[#64648A] text-[10px] font-['Inter'] font-[400] whitespace-nowrap">Patient Satisfaction</div>
  </div>
  <div className="bg-white rounded-lg p-2 text-center">
    <div className="text-[18px] font-[700] font-['Inter'] text-[#FE7C49]">7+</div>
    <div className="text-[#64648A] text-[10px] font-['Inter'] font-[400] whitespace-nowrap">Years Experience</div>
  </div>
</div>

          {/* Doctor Image */}
          <div className="relative">
            <div className="w-full h-[400px] relative rounded-[18px] mt-[24px] overflow-hidden">
              <Image
                src="/aboutphoto.png"
                alt="Dr. Mohit Upadhyaya in professional attire standing in front of medical library"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Certification Badge */}
              <div className="absolute bottom-4 left-4 bg-white p-[6px] rounded-[6px]">
                <div className="flex items-center gap-[6px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
                    <g clipPath="url(#clip0_163_8264)">
                      <path d="M11.0625 12.5C11.0132 12.5001 10.9644 12.4904 10.9189 12.4715C10.8734 12.4527 10.8321 12.425 10.7973 12.3901L8.92233 10.5151C8.88751 10.4803 8.85989 10.439 8.84105 10.3935C8.82221 10.348 8.81251 10.2992 8.81251 10.25C8.81251 10.2008 8.82221 10.152 8.84105 10.1065C8.85989 10.061 8.88751 10.0197 8.92233 9.98487C8.95714 9.95006 8.99848 9.92244 9.04397 9.9036C9.08946 9.88476 9.13821 9.87506 9.18745 9.87506C9.23669 9.87506 9.28545 9.88476 9.33094 9.9036C9.37643 9.92244 9.41776 9.95006 9.45258 9.98487L11.0625 11.5948L14.5473 8.10987C14.5821 8.07506 14.6235 8.04744 14.669 8.0286C14.7145 8.00975 14.7632 8.00006 14.8125 8.00006C14.8617 8.00006 14.9104 8.00975 14.9559 8.0286C15.0014 8.04744 15.0428 8.07506 15.0776 8.10987C15.1124 8.14469 15.14 8.18603 15.1589 8.23152C15.1777 8.27701 15.1874 8.32576 15.1874 8.375C15.1874 8.42424 15.1777 8.47299 15.1589 8.51848C15.14 8.56397 15.1124 8.60531 15.0776 8.64013L11.3276 12.3901C11.2928 12.425 11.2515 12.4527 11.206 12.4715C11.1605 12.4904 11.1117 12.5001 11.0625 12.5ZM20.2811 11.5505C20.7517 12.4768 20.6801 13.9648 20.1187 14.9371C19.6001 15.8364 18.4916 16.598 17.508 16.7667L20.0381 21.1509C20.072 21.2096 20.0894 21.2764 20.0884 21.3443C20.0873 21.4121 20.0679 21.4784 20.0321 21.536C19.9969 21.5943 19.9462 21.6417 19.8857 21.6729C19.8252 21.7041 19.7572 21.7178 19.6893 21.7126L17.0475 21.5446L15.8718 23.9161C15.8417 23.9769 15.7957 24.0285 15.7387 24.0652C15.6816 24.1019 15.6156 24.1224 15.5478 24.1246H15.5358C15.4701 24.1246 15.4055 24.1072 15.3485 24.0743C15.2916 24.0414 15.2443 23.9941 15.2115 23.9371L12.6753 19.5451C12.4473 19.5927 12.2197 19.625 12 19.625C11.7802 19.625 11.5526 19.5927 11.3242 19.5455L8.78845 23.9375C8.75554 23.9945 8.7082 24.0418 8.6512 24.0748C8.59419 24.1077 8.52953 24.125 8.4637 24.125H8.4517C8.38387 24.1229 8.31788 24.1024 8.26081 24.0656C8.20374 24.0289 8.15773 23.9774 8.1277 23.9165L6.95245 21.545L4.3102 21.713C4.24252 21.7172 4.17496 21.703 4.1147 21.6719C4.05444 21.6408 4.00373 21.594 3.96796 21.5363C3.93219 21.4787 3.9127 21.4125 3.91155 21.3447C3.91041 21.2769 3.92765 21.21 3.96145 21.1512L6.49195 16.7671C5.5087 16.5984 4.4002 15.8371 3.8812 14.9382C3.31983 13.9644 3.24858 12.4768 3.71883 11.5509C4.07695 10.8462 4.07695 9.65487 3.71883 8.9495C3.24858 8.024 3.31983 6.53675 3.8812 5.56363C4.44145 4.59275 5.69095 3.773 6.72558 3.69687C7.51945 3.63912 8.5552 3.04175 8.98833 2.39225C9.55458 1.54137 10.8776 0.875 12 0.875C13.1223 0.875 14.4453 1.54138 15.0116 2.39188C15.444 3.041 16.4801 3.63875 17.2743 3.6965C18.3097 3.77225 19.5592 4.592 20.1187 5.56288C20.6805 6.53675 20.7517 8.024 20.2807 8.94913C19.9233 9.6545 19.9233 10.8455 20.2811 11.5505ZM10.5888 19.319C9.92358 19.0445 9.32283 18.6106 8.98795 18.1081C8.6497 17.6004 7.94283 17.1286 7.27083 16.9171L4.96045 20.9199L7.15345 20.7804C7.30345 20.7691 7.44595 20.8527 7.51308 20.9881L8.48845 22.9561L10.5888 19.319ZM19.0391 20.9202L16.7283 16.9175C16.056 17.1286 15.3495 17.6007 15.0116 18.1081C14.6767 18.6106 14.0763 19.0445 13.4107 19.319L15.5111 22.9565L16.4865 20.9885C16.519 20.922 16.5707 20.8668 16.6348 20.8298C16.6989 20.7928 16.7726 20.7757 16.8465 20.7808L19.0391 20.9202ZM19.6124 8.60938C19.9676 7.9115 19.9023 6.68787 19.4699 5.9375C19.0361 5.18638 18.0052 4.50238 17.2196 4.445C16.1932 4.36963 14.9486 3.65037 14.3876 2.80775C13.9608 2.1665 12.8673 1.625 12 1.625C11.1326 1.625 10.0391 2.1665 9.61233 2.80775C9.04983 3.65112 7.80595 4.37 6.77995 4.44462C5.9947 4.502 4.96458 5.18563 4.53033 5.9375C4.09795 6.6875 4.03195 7.91113 4.38708 8.60938C4.85433 9.52962 4.85433 10.9704 4.38708 11.8903C4.03195 12.5889 4.09758 13.8125 4.53033 14.5625C4.9642 15.314 5.99433 15.9976 6.77995 16.055C7.80633 16.1304 9.05058 16.8493 9.61195 17.6919C10.0391 18.3335 11.133 18.875 12 18.875C12.867 18.875 13.9608 18.3335 14.3876 17.6922C14.9482 16.8496 16.1925 16.1307 17.2196 16.0554C18.0059 15.998 19.0361 15.3144 19.4692 14.5632C19.9016 13.8132 19.9672 12.5893 19.6124 11.8903C19.1456 10.9704 19.1456 9.52962 19.6124 8.60938ZM18 10.25C18 13.5582 15.3082 16.25 12 16.25C8.6917 16.25 5.99995 13.5582 5.99995 10.25C5.99995 6.94175 8.6917 4.25 12 4.25C15.3082 4.25 18 6.94175 18 10.25ZM17.25 10.25C17.25 7.355 14.895 5 12 5C9.10495 5 6.74995 7.355 6.74995 10.25C6.74995 13.145 9.10495 15.5 12 15.5C14.895 15.5 17.25 13.145 17.25 10.25Z" fill="#0D4F7A"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_163_8264">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <div className="font-[500] font-['Inter'] text-[#2D2D2D] text-[12px]">FRCS Ed Certified</div>
                    <div className="text-[#64648A] font-['Inter'] font-[400] mt-[4px] text-[6px]">Royal College of Surgeons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-white p-2 rounded-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <g clipPath="url(#clip0_163_8232_desktop)">
                      <path d="M9.13866 1.89975C9.97907 1.89975 10.623 2.64671 10.4993 3.47796L10.0416 8.00624C9.77453 10.0466 8.03584 11.5726 5.97804 11.5726C3.86985 11.5726 2.10559 9.97319 1.89945 7.87509L1.58727 3.42801C1.49627 2.61289 2.1342 1.89972 2.95439 1.89972H3.01221" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                      <path d="M5.97804 11.5725V12.4819C5.97804 14.4414 7.56656 16.0299 9.52608 16.0299C11.4856 16.0299 13.0741 14.4414 13.0741 12.4819V9.56693M4.18216 2.8294H3.94189C3.42846 2.8294 3.01221 2.41318 3.01221 1.89972C3.01224 1.38629 3.42846 0.970063 3.94189 0.970063H4.18216C4.69559 0.970063 5.11184 1.38629 5.11184 1.89975C5.11184 2.41318 4.69562 2.8294 4.18216 2.8294ZM8.19333 2.8294H7.95307C7.43964 2.8294 7.02339 2.41318 7.02339 1.89972C7.02339 1.38629 7.43961 0.970032 7.95307 0.970032H8.19333C8.70677 0.970032 9.12302 1.38625 9.12302 1.89972C9.12302 2.41318 8.7068 2.8294 8.19333 2.8294Z" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                      <path d="M13.0741 9.56693C13.8183 9.56693 14.4216 8.96363 14.4216 8.21942C14.4216 7.47522 13.8183 6.87192 13.0741 6.87192C12.3299 6.87192 11.7266 7.47522 11.7266 8.21942C11.7266 8.96363 12.3299 9.56693 13.0741 9.56693Z" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_163_8232_desktop">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#0D4F7A] font-medium text-sm">FRCS Ed Certified Surgeon</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4 font-['Inter'] leading-tight">
                Meet  
                <span className="text-[#0D4F7A]"> Dr. Mohit</span> Upadhyaya
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Young, UK-Fellowship-trained orthopaedic surgeon specializing in minimally invasive 
                joint preservation, sports injuries and joint replacements.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/schedule"
                className="bg-[#0D4F7A] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-between hover:bg-[#1D4ED8] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap text-[14px]">Schedule Your Joint Assessment</span>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 ml-4" />
              </Link>
              <Link
                href="/consultation"
                className="border border-[#0D4F7A] text-[#0D4F7A] py-4 px-6 rounded-lg font-medium flex items-center justify-between hover:bg-[#0D4F7A] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap text-[14px]">Free 15-Min Tele-Consultation</span>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 ml-4" />
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-white rounded-lg p-4 flex flex-col items-center">
                <div className="text-2xl font-bold text-[#0D4F7A] mb-1">3000+</div>
                <div className="text-[#64648A] font-medium text-sm whitespace-nowrap text-center">Successful Surgeries</div>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col items-center">
                <div className="text-2xl font-bold text-[#4CAF50] mb-1">97%</div>
                <div className="text-[#64648A] font-medium text-sm whitespace-nowrap text-center">Patient Satisfaction</div>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col items-center">
                <div className="text-2xl font-bold text-[#FE7C49] mb-1">7+</div>
                <div className="text-[#64648A] font-medium text-sm whitespace-nowrap text-center">Years Experience</div>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="relative max-w-2xl mx-auto">
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="/aboutphoto.png"
                  alt="Dr. Mohit Upadhyaya in professional attire standing in front of medical library"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Certification Badge */}
                <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <g clipPath="url(#clip0_163_8264_desktop)">
                        <path d="M11.0625 12.5C11.0132 12.5001 10.9644 12.4904 10.9189 12.4715C10.8734 12.4527 10.8321 12.425 10.7973 12.3901L8.92233 10.5151C8.88751 10.4803 8.85989 10.439 8.84105 10.3935C8.82221 10.348 8.81251 10.2992 8.81251 10.25C8.81251 10.2008 8.82221 10.152 8.84105 10.1065C8.85989 10.061 8.88751 10.0197 8.92233 9.98487C8.95714 9.95006 8.99848 9.92244 9.04397 9.9036C9.08946 9.88476 9.13821 9.87506 9.18745 9.87506C9.23669 9.87506 9.28545 9.88476 9.33094 9.9036C9.37643 9.92244 9.41776 9.95006 9.45258 9.98487L11.0625 11.5948L14.5473 8.10987C14.5821 8.07506 14.6235 8.04744 14.669 8.0286C14.7145 8.00975 14.7632 8.00006 14.8125 8.00006C14.8617 8.00006 14.9104 8.00975 14.9559 8.0286C15.0014 8.04744 15.0428 8.07506 15.0776 8.10987C15.1124 8.14469 15.14 8.18603 15.1589 8.23152C15.1777 8.27701 15.1874 8.32576 15.1874 8.375C15.1874 8.42424 15.1777 8.47299 15.1589 8.51848C15.14 8.56397 15.1124 8.60531 15.0776 8.64013L11.3276 12.3901C11.2928 12.425 11.2515 12.4527 11.206 12.4715C11.1605 12.4904 11.1117 12.5001 11.0625 12.5ZM20.2811 11.5505C20.7517 12.4768 20.6801 13.9648 20.1187 14.9371C19.6001 15.8364 18.4916 16.598 17.508 16.7667L20.0381 21.1509C20.072 21.2096 20.0894 21.2764 20.0884 21.3443C20.0873 21.4121 20.0679 21.4784 20.0321 21.536C19.9969 21.5943 19.9462 21.6417 19.8857 21.6729C19.8252 21.7041 19.7572 21.7178 19.6893 21.7126L17.0475 21.5446L15.8718 23.9161C15.8417 23.9769 15.7957 24.0285 15.7387 24.0652C15.6816 24.1019 15.6156 24.1224 15.5478 24.1246H15.5358C15.4701 24.1246 15.4055 24.1072 15.3485 24.0743C15.2916 24.0414 15.2443 23.9941 15.2115 23.9371L12.6753 19.5451C12.4473 19.5927 12.2197 19.625 12 19.625C11.7802 19.625 11.5526 19.5927 11.3242 19.5455L8.78845 23.9375C8.75554 23.9945 8.7082 24.0418 8.6512 24.0748C8.59419 24.1077 8.52953 24.125 8.4637 24.125H8.4517C8.38387 24.1229 8.31788 24.1024 8.26081 24.0656C8.20374 24.0289 8.15773 23.9774 8.1277 23.9165L6.95245 21.545L4.3102 21.713C4.24252 21.7172 4.17496 21.703 4.1147 21.6719C4.05444 21.6408 4.00373 21.594 3.96796 21.5363C3.93219 21.4787 3.9127 21.4125 3.91155 21.3447C3.91041 21.2769 3.92765 21.21 3.96145 21.1512L6.49195 16.7671C5.5087 16.5984 4.4002 15.8371 3.8812 14.9382C3.31983 13.9644 3.24858 12.4768 3.71883 11.5509C4.07695 10.8462 4.07695 9.65487 3.71883 8.9495C3.24858 8.024 3.31983 6.53675 3.8812 5.56363C4.44145 4.59275 5.69095 3.773 6.72558 3.69687C7.51945 3.63912 8.5552 3.04175 8.98833 2.39225C9.55458 1.54137 10.8776 0.875 12 0.875C13.1223 0.875 14.4453 1.54138 15.0116 2.39188C15.444 3.041 16.4801 3.63875 17.2743 3.6965C18.3097 3.77225 19.5592 4.592 20.1187 5.56288C20.6805 6.53675 20.7517 8.024 20.2807 8.94913C19.9233 9.6545 19.9233 10.8455 20.2811 11.5505ZM10.5888 19.319C9.92358 19.0445 9.32283 18.6106 8.98795 18.1081C8.6497 17.6004 7.94283 17.1286 7.27083 16.9171L4.96045 20.9199L7.15345 20.7804C7.30345 20.7691 7.44595 20.8527 7.51308 20.9881L8.48845 22.9561L10.5888 19.319ZM19.0391 20.9202L16.7283 16.9175C16.056 17.1286 15.3495 17.6007 15.0116 18.1081C14.6767 18.6106 14.0763 19.0445 13.4107 19.319L15.5111 22.9565L16.4865 20.9885C16.519 20.922 16.5707 20.8668 16.6348 20.8298C16.6989 20.7928 16.7726 20.7757 16.8465 20.7808L19.0391 20.9202ZM19.6124 8.60938C19.9676 7.9115 19.9023 6.68787 19.4699 5.9375C19.0361 5.18638 18.0052 4.50238 17.2196 4.445C16.1932 4.36963 14.9486 3.65037 14.3876 2.80775C13.9608 2.1665 12.8673 1.625 12 1.625C11.1326 1.625 10.0391 2.1665 9.61233 2.80775C9.04983 3.65112 7.80595 4.37 6.77995 4.44462C5.9947 4.502 4.96458 5.18563 4.53033 5.9375C4.09795 6.6875 4.03195 7.91113 4.38708 8.60938C4.85433 9.52962 4.85433 10.9704 4.38708 11.8903C4.03195 12.5889 4.09758 13.8125 4.53033 14.5625C4.9642 15.314 5.99433 15.9976 6.77995 16.055C7.80633 16.1304 9.05058 16.8493 9.61195 17.6919C10.0391 18.3335 11.133 18.875 12 18.875C12.867 18.875 13.9608 18.3335 14.3876 17.6922C14.9482 16.8496 16.1925 16.1307 17.2196 16.0554C18.0059 15.998 19.0361 15.3144 19.4692 14.5632C19.9016 13.8132 19.9672 12.5893 19.6124 11.8903C19.1456 10.9704 19.1456 9.52962 19.6124 8.60938ZM18 10.25C18 13.5582 15.3082 16.25 12 16.25C8.6917 16.25 5.99995 13.5582 5.99995 10.25C5.99995 6.94175 8.6917 4.25 12 4.25C15.3082 4.25 18 6.94175 18 10.25ZM17.25 10.25C17.25 7.355 14.895 5 12 5C9.10495 5 6.74995 7.355 6.74995 10.25C6.74995 13.145 9.10495 15.5 12 15.5C14.895 15.5 17.25 13.145 17.25 10.25Z" fill="#0D4F7A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_163_8264_desktop">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <div className="font-medium text-[#1F2937] text-sm">FRCS Ed Certified</div>
                      <div className="text-[#6B7280] text-xs">Royal College of Surgeons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-5">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white p-2 rounded-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <g clipPath="url(#clip0_163_8232_desktop)">
                      <path d="M9.13866 1.89975C9.97907 1.89975 10.623 2.64671 10.4993 3.47796L10.0416 8.00624C9.77453 10.0466 8.03584 11.5726 5.97804 11.5726C3.86985 11.5726 2.10559 9.97319 1.89945 7.87509L1.58727 3.42801C1.49627 2.61289 2.1342 1.89972 2.95439 1.89972H3.01221" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                      <path d="M5.97804 11.5725V12.4819C5.97804 14.4414 7.56656 16.0299 9.52608 16.0299C11.4856 16.0299 13.0741 14.4414 13.0741 12.4819V9.56693M4.18216 2.8294H3.94189C3.42846 2.8294 3.01221 2.41318 3.01221 1.89972C3.01224 1.38629 3.42846 0.970063 3.94189 0.970063H4.18216C4.69559 0.970063 5.11184 1.38629 5.11184 1.89975C5.11184 2.41318 4.69562 2.8294 4.18216 2.8294ZM8.19333 2.8294H7.95307C7.43964 2.8294 7.02339 2.41318 7.02339 1.89972C7.02339 1.38629 7.43961 0.970032 7.95307 0.970032H8.19333C8.70677 0.970032 9.12302 1.38625 9.12302 1.89972C9.12302 2.41318 8.7068 2.8294 8.19333 2.8294Z" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                      <path d="M13.0741 9.56693C13.8183 9.56693 14.4216 8.96363 14.4216 8.21942C14.4216 7.47522 13.8183 6.87192 13.0741 6.87192C12.3299 6.87192 11.7266 7.47522 11.7266 8.21942C11.7266 8.96363 12.3299 9.56693 13.0741 9.56693Z" stroke="#0D4F7A" strokeWidth="0.94012" strokeMiterlimit="10"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_163_8232_desktop">
                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#0D4F7A] font-medium text-sm">FRCS Ed Certified Surgeon</span>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2D2D2D] mb-2 font-['Inter'] leading-tight">
                Meet  
                <span className="text-[#0D4F7A]"> Dr. Mohit</span> Upadhyaya
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-2xl">
                Young, UK-Fellowship-trained orthopaedic surgeon specializing in minimally invasive 
                joint preservation, sports injuries and joint replacements.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xl:flex-row gap-4">
              <Link
                href="/schedule"
                className="bg-[#0D4F7A] w-fit text-white p-[14px] rounded-lg font-medium flex items-center justify-between hover:bg-[#1D4ED8] transition-colors"
              >
                <div className="flex items-center gap-[10px]">
                  <span className="whitespace-nowrap text-[14px]">Schedule Your Joint Assessment</span>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 ml-4" />
              </Link>
              <Link
                href="/consultation"
                className="border border-[#0D4F7A] w-fit text-[#0D4F7A] p-[14px] rounded-lg font-medium flex items-center justify-between hover:bg-[#0D4F7A] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-[10px]">
                  <span className="whitespace-nowrap text-[14px]">Free 15-Min Tele-Consultation</span>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 ml-4" />
              </Link>
            </div>

            {/* Statistics */}
            <div className="stats-container grid grid-cols-3 gap-6 w-[530px] mt-[64px]">
  <div className="bg-white rounded-lg px-[24px] justify-center py-[10px] flex flex-col items-center">
    <div className="text-[28px] font-[700] font-['Inter'] text-[#0D4F7A]">3000+</div>
    <div className="text-[#64648A] font-[400] text-[14px] font-['Inter'] whitespace-nowrap">Successful Surgeries</div>
  </div>
  <div className="bg-white rounded-lg px-[24px] justify-center py-[10px] flex flex-col items-center">
    <div className="text-[28px] font-[700] font-['Inter'] text-[#4CAF50]">97%</div>
    <div className="text-[#64648A] font-[400] text-[14px] font-['Inter'] whitespace-nowrap">Patient Satisfaction</div>
  </div>
  <div className="bg-white rounded-lg px-[24px] justify-center py-[10px] flex flex-col items-center">
    <div className="text-[28px] font-[700] font-['Inter'] text-[#FE7C49]">7+</div>
    <div className="text-[#64648A] font-[400] text-[14px] font-['Inter'] whitespace-nowrap">Years Experience</div>
  </div>
</div>
            
            <style jsx>{`
              @media (min-width: 1074px) and (max-width: 1279px) {
                .stats-container {
                  grid-template-columns: repeat(2, 1fr) !important;
                  max-width: 20rem !important;
                }
                .stats-container > div:nth-child(3) {
                  grid-column: span 2 !important;
                  max-width: calc(50% - 0.25rem) !important;
                  margin: 0 auto !important;
                }
              }
              
              @media (min-width: 1074px) and (max-width: 1279px) and (min-width: 1024px) {
                .stats-container {
                  gap: 1rem !important;
                }
              }
            `}</style>
          </div>
          
          {/* Right Column - Doctor Image */}
          <div className="lg:col-span-7 relative">
            <div className="w-full max-w-[550px] ml-auto">
              <div className="aspect-[3/2.9] relative rounded-2xl overflow-hidden">
                <Image
                  src="/aboutphoto.png"
                  alt="Dr. Mohit Upadhyaya in professional attire standing in front of medical library"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Certification Badge */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <g clipPath="url(#clip0_163_8264_desktop)">
                        <path d="M11.0625 12.5C11.0132 12.5001 10.9644 12.4904 10.9189 12.4715C10.8734 12.4527 10.8321 12.425 10.7973 12.3901L8.92233 10.5151C8.88751 10.4803 8.85989 10.439 8.84105 10.3935C8.82221 10.348 8.81251 10.2992 8.81251 10.25C8.81251 10.2008 8.82221 10.152 8.84105 10.1065C8.85989 10.061 8.88751 10.0197 8.92233 9.98487C8.95714 9.95006 8.99848 9.92244 9.04397 9.9036C9.08946 9.88476 9.13821 9.87506 9.18745 9.87506C9.23669 9.87506 9.28545 9.88476 9.33094 9.9036C9.37643 9.92244 9.41776 9.95006 9.45258 9.98487L11.0625 11.5948L14.5473 8.10987C14.5821 8.07506 14.6235 8.04744 14.669 8.0286C14.7145 8.00975 14.7632 8.00006 14.8125 8.00006C14.8617 8.00006 14.9104 8.00975 14.9559 8.0286C15.0014 8.04744 15.0428 8.07506 15.0776 8.10987C15.1124 8.14469 15.14 8.18603 15.1589 8.23152C15.1777 8.27701 15.1874 8.32576 15.1874 8.375C15.1874 8.42424 15.1777 8.47299 15.1589 8.51848C15.14 8.56397 15.1124 8.60531 15.0776 8.64013L11.3276 12.3901C11.2928 12.425 11.2515 12.4527 11.206 12.4715C11.1605 12.4904 11.1117 12.5001 11.0625 12.5ZM20.2811 11.5505C20.7517 12.4768 20.6801 13.9648 20.1187 14.9371C19.6001 15.8364 18.4916 16.598 17.508 16.7667L20.0381 21.1509C20.072 21.2096 20.0894 21.2764 20.0884 21.3443C20.0873 21.4121 20.0679 21.4784 20.0321 21.536C19.9969 21.5943 19.9462 21.6417 19.8857 21.6729C19.8252 21.7041 19.7572 21.7178 19.6893 21.7126L17.0475 21.5446L15.8718 23.9161C15.8417 23.9769 15.7957 24.0285 15.7387 24.0652C15.6816 24.1019 15.6156 24.1224 15.5478 24.1246H15.5358C15.4701 24.1246 15.4055 24.1072 15.3485 24.0743C15.2916 24.0414 15.2443 23.9941 15.2115 23.9371L12.6753 19.5451C12.4473 19.5927 12.2197 19.625 12 19.625C11.7802 19.625 11.5526 19.5927 11.3242 19.5455L8.78845 23.9375C8.75554 23.9945 8.7082 24.0418 8.6512 24.0748C8.59419 24.1077 8.52953 24.125 8.4637 24.125H8.4517C8.38387 24.1229 8.31788 24.1024 8.26081 24.0656C8.20374 24.0289 8.15773 23.9774 8.1277 23.9165L6.95245 21.545L4.3102 21.713C4.24252 21.7172 4.17496 21.703 4.1147 21.6719C4.05444 21.6408 4.00373 21.594 3.96796 21.5363C3.93219 21.4787 3.9127 21.4125 3.91155 21.3447C3.91041 21.2769 3.92765 21.21 3.96145 21.1512L6.49195 16.7671C5.5087 16.5984 4.4002 15.8371 3.8812 14.9382C3.31983 13.9644 3.24858 12.4768 3.71883 11.5509C4.07695 10.8462 4.07695 9.65487 3.71883 8.9495C3.24858 8.024 3.31983 6.53675 3.8812 5.56363C4.44145 4.59275 5.69095 3.773 6.72558 3.69687C7.51945 3.63912 8.5552 3.04175 8.98833 2.39225C9.55458 1.54137 10.8776 0.875 12 0.875C13.1223 0.875 14.4453 1.54138 15.0116 2.39188C15.444 3.041 16.4801 3.63875 17.2743 3.6965C18.3097 3.77225 19.5592 4.592 20.1187 5.56288C20.6805 6.53675 20.7517 8.024 20.2807 8.94913C19.9233 9.6545 19.9233 10.8455 20.2811 11.5505ZM10.5888 19.319C9.92358 19.0445 9.32283 18.6106 8.98795 18.1081C8.6497 17.6004 7.94283 17.1286 7.27083 16.9171L4.96045 20.9199L7.15345 20.7804C7.30345 20.7691 7.44595 20.8527 7.51308 20.9881L8.48845 22.9561L10.5888 19.319ZM19.0391 20.9202L16.7283 16.9175C16.056 17.1286 15.3495 17.6007 15.0116 18.1081C14.6767 18.6106 14.0763 19.0445 13.4107 19.319L15.5111 22.9565L16.4865 20.9885C16.519 20.922 16.5707 20.8668 16.6348 20.8298C16.6989 20.7928 16.7726 20.7757 16.8465 20.7808L19.0391 20.9202ZM19.6124 8.60938C19.9676 7.9115 19.9023 6.68787 19.4699 5.9375C19.0361 5.18638 18.0052 4.50238 17.2196 4.445C16.1932 4.36963 14.9486 3.65037 14.3876 2.80775C13.9608 2.1665 12.8673 1.625 12 1.625C11.1326 1.625 10.0391 2.1665 9.61233 2.80775C9.04983 3.65112 7.80595 4.37 6.77995 4.44462C5.9947 4.502 4.96458 5.18563 4.53033 5.9375C4.09795 6.6875 4.03195 7.91113 4.38708 8.60938C4.85433 9.52962 4.85433 10.9704 4.38708 11.8903C4.03195 12.5889 4.09758 13.8125 4.53033 14.5625C4.9642 15.314 5.99433 15.9976 6.77995 16.055C7.80633 16.1304 9.05058 16.8493 9.61195 17.6919C10.0391 18.3335 11.133 18.875 12 18.875C12.867 18.875 13.9608 18.3335 14.3876 17.6922C14.9482 16.8496 16.1925 16.1307 17.2196 16.0554C18.0059 15.998 19.0361 15.3144 19.4692 14.5632C19.9016 13.8132 19.9672 12.5893 19.6124 11.8903C19.1456 10.9704 19.1456 9.52962 19.6124 8.60938ZM18 10.25C18 13.5582 15.3082 16.25 12 16.25C8.6917 16.25 5.99995 13.5582 5.99995 10.25C5.99995 6.94175 8.6917 4.25 12 4.25C15.3082 4.25 18 6.94175 18 10.25ZM17.25 10.25C17.25 7.355 14.895 5 12 5C9.10495 5 6.74995 7.355 6.74995 10.25C6.74995 13.145 9.10495 15.5 12 15.5C14.895 15.5 17.25 13.145 17.25 10.25Z" fill="#0D4F7A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_163_8264_desktop">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <div className="font-medium text-[#1F2937] text-sm">FRCS Ed Certified</div>
                      <div className="text-[#6B7280] text-xs">Royal College of Surgeons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection