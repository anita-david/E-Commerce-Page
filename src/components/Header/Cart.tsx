import { useState } from "react";
import cartIcon from "../../assets/icons/icon-cart.svg";
import CartDropdown from "./CartDropdown";

interface CartProps {
  cartCount: number;
  setCartCount: (count: number) => void;
}

function Cart({ cartCount, setCartCount }: CartProps) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((el) => !el);
  }

  return (
    <div className="relative">
      <img onClick={handleClick} src={cartIcon} alt="Cart icon" />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {cartCount}
        </span>
      )}
      {selected && (
        <CartDropdown cartCount={cartCount} setCartCount={setCartCount} />
      )}
    </div>
  );
}

export default Cart;
