import EmptyCart from "./EmptyCart.tsx";
import FullCart from "./FullCart";

interface CartDropdownProps {
  cartCount: number;
  setCartCount: (count: number) => void;
}

function CartDropdown({ cartCount, setCartCount }: CartDropdownProps) {
  return (
    <div className="absolute w-70 rounded-2xl h-50 top-18 bg-white -right-20 shadow-lg z-50 ">
      <h3 className="font-bold m-3">Cart</h3>
      <hr className="border-t-1 border-gray-200" />
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <FullCart cartCount={cartCount} setCartCount={setCartCount} />
      )}
    </div>
  );
}

export default CartDropdown;
