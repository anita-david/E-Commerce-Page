import QuantitySelector from "./QuantitySelector";

interface ProductDetailsProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

function ProductDetails({ setCartCount }: ProductDetailsProps) {
  return (
    <div className="mt-6 lg:mt-25 lg:ml-10 px-4 lg:px-0">
      <div className="uppercase text-gray-300 pb-4 font-bold text-xs tracking-widest">
        sneaker company
      </div>
      <div className="w-full lg:w-100">
        <h1 className="font-extrabold text-3xl lg:text-4xl pb-6 lg:pb-8">
          Fall Limited Edition Sneakers
        </h1>
      </div>
      <div className="w-full lg:w-120 text-gray-300 pb-4">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>

      <div>
        <span className="font-bold text-2xl">
          $125.00
          <span className="text-white bg-black rounded-sm ml-5 p-1 text-xs">
            50%
          </span>
        </span>
      </div>
      <div className="mt-3 lg:mt-5">
        <span className="font-bold line-through text-gray-300">$250.00</span>
      </div>

      <QuantitySelector setCartCount={setCartCount} />
    </div>
  );
}

export default ProductDetails;
