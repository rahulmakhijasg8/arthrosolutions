"use client";

import { FadeInView, StaggerContainer, StaggerItem } from "./animations/AnimationWrappers";
import { ClinicCard } from "./clinic-card";

export function ClinicCardContainer({ children, clinics }) {
  if (clinics) {
    return (
      <FadeInView className="w-full px-[20px] md:px-[60px] lg:px-[100px] mt-[32px] md:mt-[60px]">
        <div className="max-w-7xl relative mx-auto">
          {/* Keep all your SVG decorations as they are */}
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute hidden lg:block h-[66px] w-[66px] -left-20 -top-60">
            {/* ... existing SVG content ... */}
          </svg>
          
          {/* Animate the grid container */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[56px] w-full">
            {clinics.map((clinic) => (
              <StaggerItem key={clinic.id}>
                <ClinicCard
                  title={clinic.title}
                  subtitle={clinic.subtitle}
                  address={clinic.address}
                  phone={clinic.phone}
                  timing={clinic.timing}
                  services={clinic.services}
                  imageUrl={clinic.imageUrl}
                  badgeText={clinic.badgeText}
                  onCallClick={clinic.onCallClick}
                  onDirectionClick={clinic.onDirectionClick}
                  mapLink={clinic.mapLink}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeInView>
    );
  }
  
  // For the fallback children case
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 w-full">
      {children}
    </StaggerContainer>
  );
}