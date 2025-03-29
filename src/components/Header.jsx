import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <header className="bg-[#2874f0] sticky top-0 p-6">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="./logo-white.svg" alt="logo" className="w-8" />
          <h1 className="text-white font-semibold text-lg">ShoppyCart</h1>
        </div>
        <ul className="hidden sm:flex gap-8 text-white text-lg">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/products">Products</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            <Link to="/cart" className="relative">
              <span className="absolute text-sm bg-[#fb641b] rounded-full px-[6px] font-semibold -top-2 left-3 text-white border-1">
                {cart.length}
              </span>
              <span>
                {" "}
                <i class="fa-solid fa-cart-shopping"></i> &nbsp; Cart{" "}
              </span>
            </Link>
          </li>
        </ul>
        <ul className="flex gap-6 sm:hidden">
          <li>
            <Link to="/cart" className="relative">
              <span className="absolute text-sm bg-[#fb641b] rounded-full px-[6px] font-semibold -top-2 left-3 text-white border-1">
                {cart.length}
              </span>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          <li>
            <i class="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
