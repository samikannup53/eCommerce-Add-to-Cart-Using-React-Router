import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-[#172337] p-6">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-2 items-center">
          <img src="./logo-white.svg" alt="logo" className="w-8" />
          <h1 className="text-white font-semibold text-lg">ShoppyCart</h1>
        </div>
        <div className="text-white flex gap-10">
          <div className="flex-1/4">
            <h3>Quick Links</h3>
            <nav className="flex flex-col">
              <span>Home</span>
              <span>Products</span>
              <span>Cart</span>
            </nav>
          </div>
          <div className="flex-1/4">
            <h3>Company</h3>
            <nav className="flex flex-col">
              <span>About</span>
              <span>Privacy & Policy</span>
              <span>Terms & Conditions</span>
            </nav>
          </div>
          <div className="flex-1/4">
            <h3>Help</h3>
            <nav className="flex flex-col">
              <span>Payments</span>
              <span>Shipping & Policy</span>
              <span>Cancellation & Returns</span>
              <span>FAQ</span>
            </nav>
          </div>
          <div className="flex-1/4">
            <h3>Contact</h3>
            <div className="flex flex-col">
              <span>No.1, ShoppyCart, Corporate Office, India</span>
              <span>+91-9874561230</span>
              <span>support@shoppycart.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer