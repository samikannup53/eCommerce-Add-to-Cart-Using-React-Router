import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-[#2874f0] sticky top-0 p-6">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="./logo-white.svg" alt="logo" className="w-8" />
          <h1 className="text-white font-semibold text-lg">ShoppyCart</h1>
        </div>
        <ul className="flex gap-8 text-white text-lg">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/products">Products</Link> </li>
          <li> <Link to="/about">About Us</Link> </li>
          <li> <Link to="/contact">Contact Us</Link> </li>
          <li> <Link to="/cart">Cart</Link> </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
