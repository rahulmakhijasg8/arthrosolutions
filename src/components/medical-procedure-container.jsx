"use client"

import MedicalProcedureCard from "./medical-procedure-card";

export default function MedicalProcedureContainer({ procedures = [] }) {
  const handleMoreDetails = (procedureId) => {
    console.log('More details clicked for:', procedureId);
  };

  return (
    <div className="w-full px-[20px] md:px-[60px] lg:px-[100px] md:pb-[27px] mt-[32px] md:mt-[60px]">
      {/* Flexbox container with responsive behavior */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-x-[56px] md:gap-y-[56px] max-w-7xl mx-auto">
        {procedures.map((procedure, index) => {
          const isLastOdd = procedures.length % 2 === 1 && index === procedures.length - 1;
          
          return (
            <div 
              key={procedure.id || index}
              className={`
                w-full
                ${isLastOdd ? 'md:w-full' : 'md:w-[calc(50%-28px)]'}
              `}
            >
              <MedicalProcedureCard
                title={procedure.title}
                subtitle={procedure.subtitle}
                returnTime={procedure.returnTime}
                description={procedure.description}
                patientType={procedure.patientType}
                onMoreDetails={() => handleMoreDetails(procedure.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}