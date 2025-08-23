import { ClinicCard } from "./clinic-card";

export function ClinicCardContainer({ children, clinics }) {
  // If clinics data is provided, render cards automatically
  if (clinics) {
    return (
      <div className="w-full px-[20px] md:px-[60px] lg:px-[100px] mt-[32px] md:mt-[60px]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[56px] w-full">
        {clinics.map((clinic) => (
          <ClinicCard
            key={clinic.id}
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
          />
        ))}
      </div>
       </div>
    </div>
    );
  }
  
  // Fallback to children if no clinics data provided
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 w-full">
      {children}
    </div>
   
  );
}