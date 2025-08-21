import Image from "next/image"
import { GraduationCap } from "lucide-react"

const DoctorHeroSection = ({ rightImage = "/meet.png" }) => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto">
      {/* Mobile Layout - Single Column */}
      <div className="block md:hidden">
        {/* Doctor Name */}
        <h1
          className="font-bold mb-4"
          style={{
            color: "#2D2D2D",
            fontFamily: "Outfit, sans-serif",
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: "1.2",
          }}
        >
          Meet Dr. Mohit Upadhyaya
        </h1>

        {/* Quote Section */}
        <div className="mb-6">
          <div
            className="p-4 py-4 rounded-[18px] mb-4 border-l-6"
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#64648A",
              boxShadow: "0 14px 34px 1px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex flex-col items-start gap-3">
              {/* Quote SVG Icon */}
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-6 h-6"
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
              <div className="flex-1">
                <p
                  className="mb-2 italic"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 400,
                    marginBottom: "8px",
                  }}
                >
                  Joints shouldn't limit life's playbooks – whether you're running or shopping
                </p>
                <p
                  className="text-left italic pt-3 font-medium"
                  style={{
                    color: "#0D4F7A",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "14px",
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
        <div className="mb-6">
          <h3
            className="mb-3"
            style={{
              color: "#2D2D2D",
              fontFamily: "Outfit, sans-serif",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 gap-2">
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
                    color: "#666666",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-6">
          <div className="flex bg-[#FAFAFA] rounded-[6px] py-2 px-3 items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-[#FE7C49] flex-shrink-0" />
            <span
              style={{
                color: "#666666",
                fontFamily: "Lato, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              Master of Surgery, India & Fellow of royal college of surgeons, UK
            </span>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="w-full flex flex-col items-center mb-6">
          <div className="w-[135%] h-[500px] relative overflow-hidden">
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
          <div className="flex w-[90%] py-4 z-10 h-fit -mt-20 md:-mt-35 bg-white rounded-[20px] shadow-[0_20.553px_49.915px_1.468px_rgba(0,0,0,0.1)]">
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
          <h1
            className="font-bold mb-6"
            style={{
              color: "#2D2D2D",
              fontFamily: "Outfit, sans-serif",
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 700,
              lineHeight: "1.2",
            }}
          >
            Meet Dr. Mohit Upadhyaya
          </h1>

          {/* Quote Section */}
          <div className="mb-0">
            <div
              className="p-8 lg:p-10 py-5 rounded-[18px] mb-6 border-l-6"
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "1.7",
                color: "#64648A",
                boxShadow: "0 14px 34px 1px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex flex-col items-start gap-4">
                {/* Quote SVG Icon */}
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-8 h-8"
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
                <div className="flex-1">
                  <p
                    className="mb-3 italic"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 400,
                      marginBottom: "8px",
                    }}
                  >
                    Joints shouldn't limit life's playbooks – whether you're running or shopping
                  </p>
                  <p
                    className="text-left italic pt-6 font-medium"
                    style={{
                      color: "#0D4F7A",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "clamp(14px, 2vw, 15px)",
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
          <div className="mb-8">
            <h3
              className="mb-4"
              style={{
                color: "#2D2D2D",
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(18px, 3vw, 24px)",
                fontWeight: 600,
              }}
            >
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
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
                      color: "#666666",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "clamp(14px, 2vw, 16px)",
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
            className="mb-4"
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
                    color: "#666666",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "clamp(13px, 2vw, 16px)",
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
                    color: "#666666",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "clamp(13px, 2vw, 16px)",
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
        <div className="w-[37%] flex flex-col items-center">
          <div className="w-full h-[400px] lg:h-[550px] mt-20 relative">
            <Image
              src={rightImage || "/placeholder.svg"}
              alt="Dr. Mohit Upadhyaya"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Stats Section */}
          <div className="relative flex z-10 justify-end -mt-32 lg:-mt-38 w-full">
            <div className="flex w-[85%] justify-center gap-8 py-2 bg-white rounded-[20px] shadow-[0_20.553px_49.915px_1.468px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col text-center items-center justify-center">
                <div
                  className="font-bold mb-1"
                  style={{
                    color: "#0D4F7A",
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "clamp(20px, 5vw, 36px)",
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
                    fontSize: "clamp(11px, 2.5vw, 16px)",
                    fontWeight: 500,
                    lineHeight: "1.4",
                  }}
                >
                  Years Experience
                </div>
              </div>
              <div className="flex flex-col text-center items-center justify-center">
                <div
                  className="font-bold mb-1"
                  style={{
                    color: "#4EBA64",
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "clamp(20px, 5vw, 36px)",
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
                    fontSize: "clamp(11px, 2.5vw, 16px)",
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
      </div>
      </div>
    </section>
  )
}

export default DoctorHeroSection