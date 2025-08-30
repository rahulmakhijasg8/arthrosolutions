import Card from "./threecolcard"; // Import the old card component
import NewCard from "./threecolcard2"; // Import the new card component
import {  StaggerContainer, StaggerItem } from '@/components/animations/AnimationWrappers';

export default function ThreeCardRow({ cards, cardType = "auto" }) {
  // Only show first 3 cards
  const displayCards = Array.isArray(cards) ? cards.slice(0, 3) : [];

  // Determine card type - auto-detect or use explicit prop
  const isNewCard = cardType === "new" || 
    (cardType === "auto" && displayCards.some(card => 
      card.hasOwnProperty('buttonText') || card.hasOwnProperty('subtitle')
    ));

  const CardComponent = isNewCard ? NewCard : Card;

  return (
    <section className="w-full mt-[32px] md:mt-[60px] md:mb-[30px] px-[20px] md:px-[60px] lg:px-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Column layout with spacing */}
        <StaggerContainer><div className="flex flex-col md:hidden space-y-[24px]">
          {displayCards.map((card, index) => (
            <StaggerItem><div key={index} className={`w-[100%] mx-auto ${isNewCard ? '' : 'px-[43px]'}`}>
              <CardComponent
                {...card}
                isMiddleCard={isNewCard ? undefined : false} // Only pass isMiddleCard to old card
              />
            </div></StaggerItem>
          ))}
        </div></StaggerContainer>

        {/* Desktop: Single row with 3 cards */}
        <div className="hidden md:flex justify-center items-stretch space-x-[27px]">
          {displayCards.map((card, index) => (
            <div key={index} className="w-[33%] flex">
              <CardComponent
                {...card}
                isMiddleCard={isNewCard ? undefined : index === 1} // Only apply middle card logic to old card
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}