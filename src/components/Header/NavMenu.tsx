import { useState } from "react";

function NavMenu() {
  const items: string[] = ["Collections", "Men", "Women", "About", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    // By default column (for mobile), on large screens row
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
      {items.map((item, index) => (
        <div
          key={index}
          className={`pb-4 lg:pb-10 border-b-2 transition-colors ease-in duration-300 cursor-pointer ${
            hoveredIndex === index ? "border-orange-200" : "border-transparent"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default NavMenu;
