import { useState } from "react";
import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import EmptyCart from "./EmptyCart";

interface FullCartProps {
  cartCount: number;
  setCartCount: (count: number) => void;
}

function FullCart({ cartCount, setCartCount }: FullCartProps) {
  const [empty, setEmpty] = useState(false);

  function handleClearCart() {
    setEmpty(true);
    setCartCount(0);
  }

  return (
    <>
      {empty ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex gap-2 mt-4 justify-center items-center">
            <div>
              <img
                src={thumbnail1}
                alt="Sneakers Thumbnail"
                className="w-15 rounded-lg "
              />
            </div>
            <div className="text-gray-300 text-xs">
              <p>Fall Limited Edition</p>
              <p>Sneakers</p>
              <p>
                $125.00 x {cartCount} ={" "}
                <span className="font-bold text-black">
                  ${125 * cartCount}.00
                </span>
              </p>
            </div>
            <div className="ml-10 cursor-pointer" onClick={handleClearCart}>
              <img src={deleteIcon} alt="Delete Icon" />
            </div>
          </div>
          <div className="items-center" onClick={handleClearCart}>
            <button className=" bg-orange-200 text-black text-sm font-bold w-60 h-10 px-6 py-3 rounded-lg">
              <span>Checkout</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FullCart;
