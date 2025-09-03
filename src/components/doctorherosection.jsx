import Image from "next/image"
import { GraduationCap } from "lucide-react"
import { FadeInView, SlideInLeft, SlideInRight } from "./animations/AnimationWrappers"

const DoctorHeroSection = ({ rightImage = "/meet.png" }) => {
  return (
    <section className="w-full mt-[60px] relative md:mt-[120px] px-[20px] md:px-[60px] lg:px-[100px]">
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute hidden -z-10 lg:block bottom-75 left-0" width="474" height="639" viewBox="0 0 474 639" fill="none">
  <g filter="url(#filter0_f_163_7555)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M167.143 227.116C194.056 224.15 226.912 225.831 242.434 248.017C257.474 269.514 235.94 297.114 234.441 323.308C233.112 346.536 248.284 371.866 234.285 390.45C219.541 410.022 191.584 414.406 167.143 412.644C144.342 411.001 127.091 395.434 109.03 381.42C86.7403 364.125 52.537 351.516 52.0062 323.308C51.4749 295.068 85.1262 281.075 106.802 262.967C125.466 247.373 142.968 229.781 167.143 227.116Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_163_7555" x="-174" y="0" width="647.744" height="639" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="113" result="effect1_foregroundBlur_163_7555"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 hidden lg:block top-35 right-108" width="55" height="55" viewBox="0 0 55 55" fill="none">
  <path d="M52.8793 4.20521C51.7108 4.20521 50.7587 3.27039 50.7587 2.12312C50.7587 0.975837 51.7108 0.0410156 52.8793 0.0410156C54.0479 0.0410156 55 0.975837 55 2.12312C55 3.27748 54.0479 4.20521 52.8793 4.20521ZM55 14.5803C55 13.433 54.0479 12.4982 52.8793 12.4982C51.7108 12.4982 50.7587 13.433 50.7587 14.5803C50.7587 15.7276 51.7108 16.6624 52.8793 16.6624C54.0479 16.6624 55 15.7347 55 14.5803ZM55 27.0375C55 25.8902 54.0479 24.9554 52.8793 24.9554C51.7108 24.9554 50.7587 25.8902 50.7587 27.0375C50.7587 28.1848 51.7108 29.1196 52.8793 29.1196C54.0479 29.1267 55 28.1918 55 27.0375ZM55 39.5017C55 38.3545 54.0479 37.4196 52.8793 37.4196C51.7108 37.4196 50.7587 38.3545 50.7587 39.5017C50.7587 40.649 51.7108 41.5838 52.8793 41.5838C54.0479 41.5838 55 40.649 55 39.5017ZM55 51.9589C55 50.8116 54.0479 49.8768 52.8793 49.8768C51.7108 49.8768 50.7587 50.8116 50.7587 51.9589C50.7587 53.1062 51.7108 54.041 52.8793 54.041C54.0479 54.041 55 53.1062 55 51.9589ZM42.3121 2.12312C42.3121 0.975837 41.36 0.0410156 40.1915 0.0410156C39.0229 0.0410156 38.0708 0.975837 38.0708 2.12312C38.0708 3.27039 39.0229 4.20521 40.1915 4.20521C41.36 4.20521 42.3121 3.27748 42.3121 2.12312ZM42.3121 14.5803C42.3121 13.433 41.36 12.4982 40.1915 12.4982C39.0229 12.4982 38.0708 13.433 38.0708 14.5803C38.0708 15.7276 39.0229 16.6624 40.1915 16.6624C41.36 16.6624 42.3121 15.7347 42.3121 14.5803ZM42.3121 27.0375C42.3121 25.8902 41.36 24.9554 40.1915 24.9554C39.0229 24.9554 38.0708 25.8902 38.0708 27.0375C38.0708 28.1848 39.0229 29.1196 40.1915 29.1196C41.36 29.1267 42.3121 28.1918 42.3121 27.0375ZM42.3121 39.5017C42.3121 38.3545 41.36 37.4196 40.1915 37.4196C39.0229 37.4196 38.0708 38.3545 38.0708 39.5017C38.0708 40.649 39.0229 41.5838 40.1915 41.5838C41.36 41.5838 42.3121 40.649 42.3121 39.5017ZM42.3121 51.9589C42.3121 50.8116 41.36 49.8768 40.1915 49.8768C39.0229 49.8768 38.0708 50.8116 38.0708 51.9589C38.0708 53.1062 39.0229 54.041 40.1915 54.041C41.36 54.041 42.3121 53.1062 42.3121 51.9589ZM29.617 2.12312C29.617 0.975837 28.6649 0.0410156 27.4964 0.0410156C26.3279 0.0410156 25.3757 0.975837 25.3757 2.12312C25.3757 3.27039 26.3279 4.20521 27.4964 4.20521C28.6721 4.20521 29.617 3.27748 29.617 2.12312ZM29.617 14.5803C29.617 13.433 28.6649 12.4982 27.4964 12.4982C26.3279 12.4982 25.3757 13.433 25.3757 14.5803C25.3757 15.7276 26.3279 16.6624 27.4964 16.6624C28.6721 16.6624 29.617 15.7347 29.617 14.5803ZM29.617 27.0375C29.617 25.8902 28.6649 24.9554 27.4964 24.9554C26.3279 24.9554 25.3757 25.8902 25.3757 27.0375C25.3757 28.1848 26.3279 29.1196 27.4964 29.1196C28.6721 29.1267 29.617 28.1918 29.617 27.0375ZM29.617 39.5017C29.617 38.3545 28.6649 37.4196 27.4964 37.4196C26.3279 37.4196 25.3757 38.3545 25.3757 39.5017C25.3757 40.649 26.3279 41.5838 27.4964 41.5838C28.6721 41.5838 29.617 40.649 29.617 39.5017ZM29.617 51.9589C29.617 50.8116 28.6649 49.8768 27.4964 49.8768C26.3279 49.8768 25.3757 50.8116 25.3757 51.9589C25.3757 53.1062 26.3279 54.041 27.4964 54.041C28.6721 54.041 29.617 53.1062 29.617 51.9589ZM16.9292 2.12312C16.9292 0.975837 15.977 0.0410156 14.8085 0.0410156C13.64 0.0410156 12.6879 0.975837 12.6879 2.12312C12.6879 3.27039 13.64 4.20521 14.8085 4.20521C15.9842 4.20521 16.9292 3.27748 16.9292 2.12312ZM16.9292 14.5803C16.9292 13.433 15.977 12.4982 14.8085 12.4982C13.64 12.4982 12.6879 13.433 12.6879 14.5803C12.6879 15.7276 13.64 16.6624 14.8085 16.6624C15.9842 16.6624 16.9292 15.7347 16.9292 14.5803ZM16.9292 27.0375C16.9292 25.8902 15.977 24.9554 14.8085 24.9554C13.64 24.9554 12.6879 25.8902 12.6879 27.0375C12.6879 28.1848 13.64 29.1196 14.8085 29.1196C15.9842 29.1267 16.9292 28.1918 16.9292 27.0375ZM16.9292 39.5017C16.9292 38.3545 15.977 37.4196 14.8085 37.4196C13.64 37.4196 12.6879 38.3545 12.6879 39.5017C12.6879 40.649 13.64 41.5838 14.8085 41.5838C15.9842 41.5838 16.9292 40.649 16.9292 39.5017ZM16.9292 51.9589C16.9292 50.8116 15.977 49.8768 14.8085 49.8768C13.64 49.8768 12.6879 50.8116 12.6879 51.9589C12.6879 53.1062 13.64 54.041 14.8085 54.041C15.9842 54.041 16.9292 53.1062 16.9292 51.9589ZM4.24131 2.12312C4.24131 0.975837 3.28918 0.0410156 2.12066 0.0410156C0.952133 0.0410156 0 0.975837 0 2.12312C0 3.27039 0.952133 4.20521 2.12066 4.20521C3.28918 4.20521 4.24131 3.27748 4.24131 2.12312ZM4.24131 14.5803C4.24131 13.433 3.28918 12.4982 2.12066 12.4982C0.952133 12.4982 0 13.433 0 14.5803C0 15.7276 0.952133 16.6624 2.12066 16.6624C3.28918 16.6624 4.24131 15.7347 4.24131 14.5803ZM4.24131 27.0375C4.24131 25.8902 3.28918 24.9554 2.12066 24.9554C0.952133 24.9554 0 25.8902 0 27.0375C0 28.1848 0.952133 29.1196 2.12066 29.1196C3.28918 29.1196 4.24131 28.1918 4.24131 27.0375ZM4.24131 39.5017C4.24131 38.3545 3.28918 37.4196 2.12066 37.4196C0.952133 37.4196 0 38.3545 0 39.5017C0 40.649 0.952133 41.5838 2.12066 41.5838C3.28918 41.5838 4.24131 40.649 4.24131 39.5017ZM4.24131 51.9589C4.24131 50.8116 3.28918 49.8768 2.12066 49.8768C0.952133 49.8768 0 50.8116 0 51.9589C0 53.1062 0.952133 54.041 2.12066 54.041C3.28918 54.041 4.24131 53.1062 4.24131 51.9589Z" fill="#D8E8FF"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 hidden lg:block -bottom-80 right-0" width="543" height="699" viewBox="0 0 543 699" fill="none">
  <g filter="url(#filter0_f_163_7603)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M334.517 256.023C361.56 255.667 389.409 259.311 409.61 277.289C430.855 296.198 441.503 323.953 442.763 352.362C444.085 382.174 440.463 416.507 416.578 434.402C393.821 451.451 362.452 438.784 334.517 433.461C313.661 429.487 292.078 424.641 278.73 408.135C266.391 392.875 271.558 371.809 268.94 352.362C265.54 327.116 247.039 300.299 261.374 279.239C276.335 257.26 307.927 256.373 334.517 256.023Z" fill="#D8E8FF"/>
  </g>
  <defs>
    <filter id="filter0_f_163_7603" x="0" y="0" width="699" height="699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="128" result="effect1_foregroundBlur_163_7603"/>
    </filter>
  </defs>
</svg>
<Image src='/doctorheroanimation.svg' height={1000} width={1000} className="absolute h-[66px] w-[66px] hidden lg:block right-[110px] top-25"></Image>
  <div className="max-w-7xl mx-auto">
      {/* Mobile Layout - Single Column */}
      <div className="block md:hidden">
        {/* Doctor Name */}
        <h1
          className="font-[600]"
          style={{
            color: "#2D2D2D",
            fontFamily: "Outfit, sans-serif",
            fontSize: "28px",
            lineHeight: "1.2",
          }}
        >
          Meet Dr. Mohit Upadhyaya
        </h1>

        {/* Quote Section */}
        <SlideInLeft delay={0.4}><div className="mt-[32px]">
          <div
            className="p-[14px] pl-[24px] rounded-[18px] border-l-[3px] border-[#64648A]"
            style={{
              boxShadow: "0 14px 34px 1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex flex-col items-start gap-3">
              {/* Quote SVG Icon */}
              <div className="bg-white rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-[38px] h-[38px]"
                >
                  <g clipPath="url(#clip0_163_7726)">
                    <path
                      d="M33.2305 43.8076H31.3848C31.0227 43.8076 30.7158 43.6811 30.4404 43.4062C30.1654 43.131 30.0391 42.8234 30.0391 42.4609V38.7686C30.0391 38.4514 30.1353 38.1767 30.3438 37.9287L30.4404 37.8242C30.7158 37.5492 31.0225 37.4229 31.3848 37.4229H33.2305C35.4015 37.4229 37.2696 36.6488 38.8057 35.1133C40.3418 33.5771 41.1162 31.7094 41.1162 29.5381V28.6152C41.1162 27.7147 40.795 26.933 40.1621 26.2998C39.5288 25.6665 38.7469 25.3458 37.8467 25.3457H31.3848C29.9776 25.3457 28.7972 24.8587 27.8154 23.877C26.8329 22.8943 26.3457 21.7153 26.3457 20.3076V9.23145C26.3457 7.82345 26.8326 6.64367 27.8145 5.66113C28.7967 4.67924 29.9767 4.19244 31.3838 4.19238H42.4619C43.781 4.19248 44.9008 4.62012 45.8447 5.48242L46.0312 5.66113C47.0133 6.64363 47.5 7.82331 47.5 9.23145V29.5381C47.5 31.4712 47.124 33.313 46.3721 35.0674C45.6169 36.8296 44.5989 38.3479 43.3193 39.627C42.1195 40.8267 40.7103 41.7963 39.0869 42.5352L38.7598 42.6797C37.0051 43.4312 35.1636 43.8076 33.2305 43.8076Z"
                      stroke="#2D2D2D"
                      strokeOpacity="0.24"
                    />
                    <path
                      d="M7.38184 43.8076H5.53613C5.17385 43.8075 4.8667 43.6809 4.5918 43.4062C4.31662 43.1308 4.19043 42.823 4.19043 42.4609V38.7686C4.19045 38.4517 4.28725 38.1771 4.49609 37.9287L4.5918 37.8242C4.86667 37.5493 5.17374 37.4229 5.53613 37.4229H7.38184C9.55373 37.4229 11.4215 36.6488 12.957 35.1133C14.4924 33.5772 15.2666 31.7094 15.2666 29.5381V28.6152C15.2666 27.7152 14.9466 26.9341 14.3135 26.3008C13.6808 25.667 12.8978 25.3457 11.998 25.3457H5.53613C4.12875 25.3456 2.94847 24.8586 1.9668 23.877C0.98521 22.8945 0.49897 21.7154 0.499023 20.3076V9.23145C0.499023 7.82318 0.985353 6.64351 1.96777 5.66113C2.94951 4.67931 4.12953 4.19241 5.53711 4.19238H16.6143C18.0217 4.19244 19.2018 4.67933 20.1836 5.66113C21.1654 6.6437 21.6523 7.8235 21.6523 9.23145V29.5381C21.6523 31.471 21.2761 33.313 20.5244 35.0674C19.7696 36.8295 18.7514 38.3478 17.4717 39.627C16.1919 40.9068 14.6738 41.9244 12.9121 42.6797C11.2668 43.3842 9.54636 43.7586 7.74414 43.8027L7.38184 43.8076Z"
                      stroke="#2D2D2D"
                      strokeOpacity="0.24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_163_7726">
                      <rect width="48" height="47.9999" fill="white" transform="matrix(-1 0 0 -1 48 48)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Quote Content */}
              <div className="mt-[24px]">
                <p
                  className="italic text-[18px] text-[#2D2D2D] "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Joints shouldn't limit life's playbooks – whether you're running or shopping
                </p>
                <p
                  className="text-left text-[16px] mt-[14px] font-[500]"
                  style={{
                    color: "#0D4F7A",
                    fontFamily: "Inter",
                  }}
                >
                  — Dr. Mohit Upadhyaya
                </p>
              </div>
            </div>
          </div>
        </div></SlideInLeft>

        {/* Areas of Expertise */}
        <div className="mt-[14px]">
          <h3
            className=""
            style={{
              color: "#0D4F7A",
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            Areas of Expertise
          </h3>
          <div className="mt-[14px] grid grid-cols-2 gap-2">
            {[
              "Sports Medicine",
              "Trauma Surgery",
              "Joint Replacement",
              "Geriatric Care",
              "Arthroscopy",
              "Rehabilitation",
            ].map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: index % 2 === 0 ? "#0D4F7A" : "#4EBA64" }}
                ></div>
                <span
                  style={{
                    color: "#64648A",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
            className="my-[14px]"
            style={{
              height: "0.5px",
              backgroundColor: "rgba(45, 45, 45, 0.14)",
            }}
          ></div>

        {/* Credentials */}
        {/* Credentials */}
<div className="">
  <div className="flex flex-col gap-2">
    <div className="flex px-[10px] py-[8px] bg-[#FAFAFA] rounded-[6px] items-center gap-[8px]">
      <GraduationCap className="w-[24px] h-[24px] text-[#FE7C49]" />
      <span
        style={{
          color: "#64648A",
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px"
        }}
      >
        Master of Surgery, India
      </span>
    </div>
    <div className="flex px-[10px] py-[8px] bg-[#FAFAFA] rounded-[6px] items-center gap-[8px]">
      <GraduationCap className="w-[24px] h-[24px] text-[#FE7C49]" />
      <span
        style={{
          color: "#64648A",
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px"
        }}
      >
        Fellow of Royal College of Surgeons, UK
      </span>
    </div>
  </div>
</div>
        {/* Doctor Image */}
        <div className="w-full flex flex-col items-center mt-6">
          <div className="w-[100%] h-[500px] relative overflow-hidden">
            <Image
              src={rightImage || "/placeholder.svg"}
              alt="Dr. Mohit Upadhyaya"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center">
          <div className="flex w-[100%] py-4 px-5 z-10 h-fit -mt-35 bg-white rounded-[20px] shadow-[0_20.553px_49.915px_1.468px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col w-1/2 text-center items-center justify-center">
              <div
                className="font-bold mb-1"
                style={{
                  color: "#0D4F7A",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "1.2",
                }}
              >
                7+
              </div>
              <div
                className="font-medium"
                style={{
                  color: "#8B8B8B",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "1.4",
                }}
              >
                Years Experience
              </div>
            </div>
            <div className="flex flex-col w-1/2 text-center items-center justify-center">
              <div
                className="font-bold mb-1"
                style={{
                  color: "#4EBA64",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "1.2",
                }}
              >
                3000+
              </div>
              <div
                className="font-medium"
                style={{
                  color: "#8B8B8B",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "1.4",
                }}
              >
                Surgeries
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden md:flex flex-row gap-8 lg:gap-12">
        {/* Left Column - Doctor Information */}
        <div className="w-[63%] flex flex-col">
          {/* Doctor Name */}
          <FadeInView delay={0.2}><h1
            className="font-[600]"
            style={{
              color: "#2D2D2D",
              fontFamily: "Outfit, sans-serif",
              fontSize: "53px",
              lineHeight: "1.2",
            }}
          >
            Meet Dr. Mohit Upadhyaya
          </h1></FadeInView>

          {/* Quote Section */}
          <div className="mt-[32px]">
            <div
              className="py-[24px] px-[34px] rounded-[18px] border-l-6"
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.7",
                color: "#64648A",
                boxShadow: "0 14px 34px 1px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex flex-col items-start gap-4">
                {/* Quote SVG Icon */}
                <div className="bg-white rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-12 h-12"
                  >
                    <g clipPath="url(#clip0_163_7726)">
                      <path
                        d="M33.2305 43.8076H31.3848C31.0227 43.8076 30.7158 43.6811 30.4404 43.4062C30.1654 43.131 30.0391 42.8234 30.0391 42.4609V38.7686C30.0391 38.4514 30.1353 38.1767 30.3438 37.9287L30.4404 37.8242C30.7158 37.5492 31.0225 37.4229 31.3848 37.4229H33.2305C35.4015 37.4229 37.2696 36.6488 38.8057 35.1133C40.3418 33.5771 41.1162 31.7094 41.1162 29.5381V28.6152C41.1162 27.7147 40.795 26.933 40.1621 26.2998C39.5288 25.6665 38.7469 25.3458 37.8467 25.3457H31.3848C29.9776 25.3457 28.7972 24.8587 27.8154 23.877C26.8329 22.8943 26.3457 21.7153 26.3457 20.3076V9.23145C26.3457 7.82345 26.8326 6.64367 27.8145 5.66113C28.7967 4.67924 29.9767 4.19244 31.3838 4.19238H42.4619C43.781 4.19248 44.9008 4.62012 45.8447 5.48242L46.0312 5.66113C47.0133 6.64363 47.5 7.82331 47.5 9.23145V29.5381C47.5 31.4712 47.124 33.313 46.3721 35.0674C45.6169 36.8296 44.5989 38.3479 43.3193 39.627C42.1195 40.8267 40.7103 41.7963 39.0869 42.5352L38.7598 42.6797C37.0051 43.4312 35.1636 43.8076 33.2305 43.8076Z"
                        stroke="#8f7d7dff"
                        strokeOpacity="0.24"
                      />
                      <path
                        d="M7.38184 43.8076H5.53613C5.17385 43.8075 4.8667 43.6809 4.5918 43.4062C4.31662 43.1308 4.19043 42.823 4.19043 42.4609V38.7686C4.19045 38.4517 4.28725 38.1771 4.49609 37.9287L4.5918 37.8242C4.86667 37.5493 5.17374 37.4229 5.53613 37.4229H7.38184C9.55373 37.4229 11.4215 36.6488 12.957 35.1133C14.4924 33.5772 15.2666 31.7094 15.2666 29.5381V28.6152C15.2666 27.7152 14.9466 26.9341 14.3135 26.3008C13.6808 25.667 12.8978 25.3457 11.998 25.3457H5.53613C4.12875 25.3456 2.94847 24.8586 1.9668 23.877C0.98521 22.8945 0.49897 21.7154 0.499023 20.3076V9.23145C0.499023 7.82318 0.985353 6.64351 1.96777 5.66113C2.94951 4.67931 4.12953 4.19241 5.53711 4.19238H16.6143C18.0217 4.19244 19.2018 4.67933 20.1836 5.66113C21.1654 6.6437 21.6523 7.8235 21.6523 9.23145V29.5381C21.6523 31.471 21.2761 33.313 20.5244 35.0674C19.7696 36.8295 18.7514 38.3478 17.4717 39.627C16.1919 40.9068 14.6738 41.9244 12.9121 42.6797C11.2668 43.3842 9.54636 43.7586 7.74414 43.8027L7.38184 43.8076Z"
                        stroke="#2D2D2D"
                        strokeOpacity="0.24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_163_7726">
                        <rect width="48" height="47.9999" fill="white" transform="matrix(-1 0 0 -1 48 48)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* Quote Content */}
                <div className="flex-1">
                  <p
                    className="mt-[34px] text-[18px] italic"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Joints shouldn't limit life's playbooks – whether you're running or shopping
                  </p>
                  <p
                    className="text-left italic pt-[32px]"
                    style={{
                      color: "#0D4F7A",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    — Dr. Mohit Upadhyaya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mt-[28px]">
            <h3
              className=""
              style={{
                color: "#0D4F7A",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Areas of Expertise
            </h3>
            <div className="mt-[18px] grid grid-cols-2 gap-3">
              {[
                "Sports Medicine",
                "Joint Replacement",
                "Arthroscopy",
                "Trauma Surgery",
                "Geriatric Care",
                "Rehabilitation",
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: index % 2 === 0 ? "#0D4F7A" : "#4EBA64" }}
                  ></div>
                  <span
                    style={{
                      color: "#64648A",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                  >
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <div
            className="my-[24px]"
            style={{
              height: "0.5px",
              backgroundColor: "rgba(45, 45, 45, 0.14)",
            }}
          ></div>

          {/* Credentials */}
          <div className="mb-8">
            <div className="flex flex-row gap-6">
              <div className="flex bg-[#FAFAFA] rounded-[6px] py-3 px-4 items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#FE7C49] flex-shrink-0" />
                <span
                  style={{
                    color: "#64648A",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Master of Surgery, India
                </span>
              </div>
              <div className="flex bg-[#FAFAFA] rounded-[6px] py-3 px-4 items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#FE7C49] flex-shrink-0" />
                <span
                  style={{
                    color: "#64648A",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  Fellow of Royal College of Surgeons, UK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column with Image */}
        <div className="w-[37%] flex flex-col mt-[38px] items-center">
          <SlideInRight delay={0.3}><div className="w-full h-[400px] lg:h-[603px] relative">
            <Image
              src={rightImage || "/placeholder.svg"}
              alt="Dr. Mohit Upadhyaya"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div></SlideInRight>

          {/* Stats Section */}
          <FadeInView delay={1.0}><div className="relative flex z-10 justify-end -mt-43 w-full">
            <div className="flex flex-wrap w-[100%] md:w-[300px] lg:w-[366px] justify-center bg-white rounded-[20px] shadow-[0_20.553px_49.915px_1.468px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col w-1/2 px-[24px] py-[19px] text-center items-center justify-center">
                <div
                  className="text-[20px] md:text-[24px]"
                  style={{
                    color: "#0D4F7A",
                    fontFamily: "Inter",
                    fontWeight: 600,
                    lineHeight: "1.2",
                  }}
                >
                  7+
                </div>
                <div
                  className="mt-[8px] text-[14px] md:text-[16px]"
                  style={{
                    color: "#64648A",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    lineHeight: "1.4",
                  }}
                >
                  Years Experience
                </div>
              </div>
              <div className="flex flex-col w-1/2 px-[24px] py-[19px] text-center items-center justify-center">
                <div
                  className="text-[20px] md:text-[24px]"
                  style={{
                    color: "#4CAF50",
                    fontFamily: "Inter",
                    fontWeight: 600,
                    lineHeight: "1.2",
                  }}
                >
                  3000+
                </div>
                <div
                  className="mt-[8px] text-[14px] md:text-[16px]"
                  style={{
                    color: "#64648A",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    lineHeight: "1.4",
                  }}
                >
                  Surgeries
                </div>
              </div>
            </div>
          </div></FadeInView>
        </div>
      </div>
      </div>
    </section>
  )
}

export default DoctorHeroSection