import Card from "./threecolcard"; // Import the custom card

export default function ThreeCardRow({ cards }) {
  // Only show first 3 cards
  const displayCards = Array.isArray(cards) ? cards.slice(0, 3) : [];

  return (
    <section className="w-full mt-[32px] md:mt-[60px] md:mb-[30px] px-[20px] md:px-[60px] lg:px-[100px]">
  <div className="max-w-7xl mx-auto">

        {/* Mobile: Column layout with spacing */}
        <div className="flex flex-col md:hidden space-y-[24px]">
          {displayCards.map((card, index) => (
            <div key={index} className="w-[100%] px-[43px] h-[210px] mx-auto">
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
                linkbtn={card.linkbtn}
                accentColor={card.accentColor}
                isMiddleCard={false} // All cards same style on mobile
              />
            </div>
          ))}
        </div>

        {/* Desktop: Single row with 3 cards */}
        <div className="hidden md:flex justify-center space-x-[27px]">
          {displayCards.map((card, index) => (
            <div key={index} className="w-[33%] h-[295px]">
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
                linkbtn={card.linkbtn}
                accentColor={card.accentColor}
                isMiddleCard={index === 1} // Middle card gets different styling
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}