import Image from "next/image"

// Simplified ServiceIntro component
const ServiceIntro = ({
  badge,
  title,
  description,
  image,
  textColor = "#6B7280"
}) => {
  return (
    <section className="w-full bg-white mt-[60px] md:mt-[91px] px-[20px] md:px-[60px] lg:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[60px] lg:gap-[90px] items-center">
          {/* Image - appears first on mobile, second on desktop */}
          <div className="relative w-full md:w-1/2 order-1 md:order-1">
            <div className="w-full h-[300px] rounded-[24px] md:h-[450px] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="h-full w-full rounded-[24px] object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Content - appears second on mobile, first on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-2">
            {badge && (
              <div className="flex items-center gap-2 md:mt-[27px]">
                <div 
                  className="p-2 px-[10px] md:px-[14px] rounded-[8px] flex items-center gap-2"
                  style={{ backgroundColor: badge.bgColor || "white" }}
                >
                  {badge.iconSrc && (
                    <Image
                      src={badge.iconSrc}
                      alt={badge.iconAlt || "Icon"}
                      width={16}
                      height={16}
                      className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                    />
                  )}
                  <span 
                    className="font-[500] text-[12px] md:text-[14px]"
                    style={{ color: badge.textColor || "#0D4F7A" }}
                  >
                    {badge.text}
                  </span>
                </div>
              </div>
            )}
            
            <h1 className=" font-[600] text-[#2D2D2D] text-[28px] md:text-[56px] mt-[8px] font-['Outfit'] leading-normal">
              {title.main}{" "}
              <span style={{ color: title.highlightColor || "#0D4F7A" }}>
                {title.highlighted}
              </span>
            </h1>
            
            <p 
              className="text-[16px] md:text-[18px] font-[400] mt-[12px] md:mt-[18px] leading-[26px] md:leading-[28px]"
              style={{ color: textColor }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro