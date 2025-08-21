import Card from "./threecolcard"; // Import the custom card

export default function ThreeCardRow({ cards }) {
  // Only show first 3 cards
  const displayCards = Array.isArray(cards) ? cards.slice(0, 3) : [];

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto">

        {/* Mobile: Column layout with spacing */}
        <div className="flex flex-col md:hidden space-y-6">
          {displayCards.map((card, index) => (
            <div key={index} className="w-[90%] mx-auto">
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
        <div className="hidden md:flex justify-center space-x-6">
          {displayCards.map((card, index) => (
            <div key={index} className="w-[28%]">
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