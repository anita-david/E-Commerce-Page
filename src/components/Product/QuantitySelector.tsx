import plusIcon from "../../assets/icons/icon-plus.svg";
import minusIcon from "../../assets/icons/icon-minus.svg";
import cartIcon from "../../assets/icons/icon-cart.svg";
import { useState } from "react";

interface QuantitySelectorProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

function QuantitySelector({ setCartCount }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartCount(quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-10 w-full">
      {/* First row: quantity controls */}
      <div className="flex gap-2 items-center">
        <button
          className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded"
          onClick={handleDecrease}
        >
          <img src={minusIcon} alt="Minus Icon" className="w-4" />
        </button>

        <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded font-bold">
          {quantity}
        </div>

        <button
          className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded"
          onClick={handleIncrease}
        >
          <img src={plusIcon} alt="Plus Icon" className="w-4 h-4" />
        </button>
      </div>

      {/* Second row: Add to Cart */}
      <button
        className="flex items-center justify-center gap-2 bg-orange-200 text-black font-bold w-full lg:w-65 h-12 px-6 py-3 rounded-lg"
        onClick={handleAddToCart}
      >
        <img src={cartIcon} alt="Cart Icon" className="w-4 h-4" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default QuantitySelector;
