import Header from "../components/Header/Header";
import Product from "../components/Product/Product.tsx";
import Footer from "../components/Footer/Footer.tsx";
import { useState } from "react";

function HomePage() {
  const [cartCount, setCartCount] = useState(0)
  return (
    <div>
      <Header cartCount={cartCount} setCartCount={setCartCount} />
      <Product setCartCount={setCartCount}/>
      <Footer />
    </div>
  );
}

export default HomePage;
