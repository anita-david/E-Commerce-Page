import { useState } from "react";
import Avatar from "./Avatar";
import Cart from "./Cart";
import NavMenu from "./NavMenu";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  setCartCount: (count: number) => void;
}

function Header({ cartCount, setCartCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-end gap-1 mt-10 mx-10 border-b border-gray-200">
      {/* Left Section */}
      <div className="flex items-center gap-5 pb-10">
        {/* Hamburger menu - only visible on small screens */}
        <button className="block lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
        <div className="font-bold text-3xl lowercase">Sneakers</div>
      </div>

      {/* Middle Section (NavMenu) - hidden on small screens */}
      <div className="hidden hidden:column lg:flex gap-15 text-gray-300">
        <NavMenu />
      </div>

      {/* Right Section */}
      <div className="flex gap-10 items-center pb-10">
        <Cart cartCount={cartCount} setCartCount={setCartCount} />
        <Avatar />
      </div>

      {/* Overlay for mobile nav */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Semi-transparent black background */}
          <div
            className="absolute inset-0 bg-black/50 bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Slide-in menu from the left */}
          <div className="relative w-64 h-full bg-white shadow-lg z-50 p-6">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <NavMenu />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
