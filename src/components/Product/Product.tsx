import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";

interface ProductProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

function Product({ setCartCount }: ProductProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 lg:px-20 mt-10">
      {/* Left: Gallery */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <ProductGallery />
      </div>

      {/* Right: Details */}
      <div className="flex-1">
        <ProductDetails setCartCount={setCartCount} />
      </div>
    </div>
  );
}

export default Product;
