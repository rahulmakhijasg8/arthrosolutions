import Image from "next/image"

// Updated ServiceIntro component
const ServiceIntro = ({
  badge,
  title,
  description,
  image,
  bgColor = "#FFFFFF",
  textColor = "#6B7280"
}) => {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-16" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="block md:hidden">
          <div className="mb-6">
            {badge && (
              <div className="flex items-center gap-[6px] mb-4">
                <div 
                  className="p-2 rounded-lg flex items-center gap-[6px"
                  style={{ backgroundColor: badge.bgColor || "white" }}
                >
                  {badge.iconSrc && (
                    <Image
                      src={badge.iconSrc}
                      alt={badge.iconAlt || "Icon"}
                      width={16}
                      height={16}
                      className="w-6 h-6"
                    />
                  )}
                  <span 
                    className="font-medium text-sm"
                    style={{ color: badge.textColor || "#0D4F7A" }}
                  >
                    {badge.text}
                  </span>
                </div>
              </div>
            )}
            <h1 className="text-3xl font-bold text-[#1F2937] mb-2 font-['Inter'] leading-tight">
              {title.main}{" "}
              <span style={{ color: title.highlightColor || "#3B82F6" }}>
                {title.highlighted}
              </span>
            </h1>
            <p 
              className="text-base leading-relaxed mb-6"
              style={{ color: textColor }}
            >
              {description}
            </p>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] relative rounded-xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div>
            <div className="mb-8">
              {badge && (
                <div className="flex items-center gap-2 mb-6">
                  <div 
                    className="p-2 rounded-lg flex items-center gap-2"
                    style={{ backgroundColor: badge.bgColor || "white" }}
                  >
                    {badge.iconSrc && (
                      <Image
                        src={badge.iconSrc}
                        alt={badge.iconAlt || "Icon"}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    )}
                    <span 
                      className="font-medium text-sm"
                      style={{ color: badge.textColor || "#0D4F7A" }}
                    >
                      {badge.text}
                    </span>
                  </div>
                </div>
              )}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1F2937] mb-4 font-['Inter'] leading-tight">
                {title.main}{" "}
                <span style={{ color: title.highlightColor || "#3B82F6" }}>
                  {title.highlighted}
                </span>
              </h1>
              <p 
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: textColor }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro