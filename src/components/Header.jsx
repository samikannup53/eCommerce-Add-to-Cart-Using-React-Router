import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-[#2874f0] sticky top-0 p-6 z-40">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="./logo-white.svg" alt="logo" className="w-8" />
          <h1 className="text-white font-semibold text-lg">ShoppyCart</h1>
        </div>
        <div className="hidden sm:flex gap-8 text-white text-lg">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart" className="relative">
            <span className="absolute text-sm bg-[#fb641b] rounded-full px-[6px] font-semibold -top-2 left-3 text-white border-1">
              {cart.length}
            </span>
            <i class="fa-solid fa-cart-shopping"></i> &nbsp; Cart{" "}
          </Link>
        </div>
        <div className="flex gap-6 sm:hidden text-white text-xl">
          <Link to="/cart" className="relative">
            <span className="absolute text-sm bg-[#fb641b] rounded-full px-[6px] font-semibold -top-2 left-3 text-white border-1">
              {cart.length}
            </span>
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
          {isMenuOpen ? (
            <i class="fa-solid fa-xmark cursor-pointer" onClick={toggleMenu} />
          ) : (
            <i class="fa-solid fa-bars cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="py-6 sm:hidden flex flex-col gap-4  text-white text-lg">
          <Link
            to="/"
            className="text-center hover:text-black hover:bg-yellow-300 rounded-full px-4 py-1"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-center hover:text-black hover:bg-yellow-300 rounded-full px-4 py-1"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-center hover:text-black hover:bg-yellow-300 rounded-full px-4 py-1"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className="text-center hover:text-black hover:bg-yellow-300 rounded-full px-4 py-1"
            onClick={toggleMenu}
          >
            Cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
