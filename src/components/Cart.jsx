import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);
  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <section className="container mx-auto min-h-[calc(100vh-304px)]">
      <div className="">
        <h2 className="text-xl font-bold my-8">Cart Items</h2>
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <img src="src\assets\empty-cart-image.png" className="w-58 mr-10" />
            <p className="text-xl mt-4">Your Cart is Empty!</p>
            <p className="text-sm -mt-0">Add Items to it Now.</p>
            <button className="text-sm bg-[#fb641b] px-5 py-2 mt-6 rounded-sm hover:bg-[#2455f4] font-semibold text-white cursor-pointer">
              <i class="fa-solid fa-cart-shopping"></i> &nbsp; SHOPE NOW
            </button>
          </div>
        ) : (
          <div className="pb-6 flex flex-row-reverse justify-between">
            <div className="">
              <h2>Total Cart Value : Rs.{total} /- </h2>
            </div>

            <div>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row items-center py-8"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-40 h-40 flex items-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="w-full text-[17px] text-center sm:text-left sm:w-70 lg:w-100">
                        {product.title}
                      </p>
                      <p className="text-center text-[18px] sm:text-left text-gray-700 font-semibold py-3 sm:py-0">
                        ₹&nbsp;{product.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      removeCart(product.id);
                    }}
                    className=" text-sm font-bold sm:ml-auto cursor-pointer text-gray-800  hover:text-[#2455f4] border-[1px] border-gray-800 hover:border-[#2455f4] rounded-sm pl-2 pr-3 py-1 "
                  >
                    <i class="bi bi-trash"></i>&nbsp; REMOVE
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
