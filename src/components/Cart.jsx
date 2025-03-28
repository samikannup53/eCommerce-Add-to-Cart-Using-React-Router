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
    <section className=" min-h-[75vh] bg-[#EFF7F6] p-6">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold pb-4">Cart Items</h2>
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
          <div className="pb-6 gap-4 flex flex-row-reverse justify-between items-start">
            <div className=" flex-1/4 sticky top-[148px]">
              <div className="flex flex-col gap-7 bg-white shadow-md rounded-sm">
                <p className="border-b-[1px] border-gray-300 py-4 px-6 text-gray-500 font-semibold">
                  PRICE DETAILS
                </p>
                <div className="flex justify-between px-6 font-medium text-gray-700">
                  <span>Price ({cart.length} Item) </span>
                  <span>₹ {total}</span>
                </div>
                <div className="flex justify-between px-6 font-medium text-gray-700">
                  <span>Discount (10%) </span>
                  <span>₹ 1,000</span>
                </div>
                <div className="flex justify-between px-6 font-medium text-gray-700">
                  <span>Delivery Charges </span>
                  <span className="line-through ml-auto">₹ 50</span>
                  <span className="text-green-700 ml-2">Free</span>
                </div>
                <div className=" px-6 ">
                  <div className=" text-lg font-semibold text-gray-900 pt-4 flex justify-between border-dashed border-t-[1px] border-gray-300">
                    <span>Total Payable</span>
                    <span>₹ {total}</span>
                  </div>
                </div>

                <p className="border-t-[1px] border-gray-300 p-6 text-green-700 font-medium">
                  You Will Save $100 on this Order
                </p>
              </div>
              <div className="p-4 flex items-center gap-2">
                <img src="src/assets/shield.png" className="w-8" />
                <p className="text-gray-500">
                  Safe and Secure Payments.
                  <br /> Easy Returns 100% Authentic Products.
                </p>
              </div>
            </div>

            <div className="flex-3/4 bg-white shadow-md rounded-sm">
              <div>
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col gap-10 p-12 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="w-40 h-40 flex items-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="w-full text-lg font-medium text-center sm:text-left sm:w-70 lg:w-100">
                          {product.title}
                        </p>
                        {/* <p className="w-full text-[14px] text-center sm:text-left sm:w-70 lg:w-100 ">
                          {product.description}
                        </p> */}
                        <p className="text-center text-[18px] sm:text-left text-gray-700 font-semibold py-3 sm:py-0">
                          ₹&nbsp;{product.price}
                        </p>
                      </div>
                      <div className="ml-auto text-gray-500 ">
                        <p>
                          Delivery By Tomorrow |{" "}
                          <span className="line-through ml-auto">₹ 50</span>
                          <span className="text-green-700 ml-2">Free</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className=" text-2xl cursor-pointer hover:text-[#2455f4] border-[1px] hover:border-[#2455f4] rounded-full px-[10px] pt-[1px]  ">
                        -
                      </button>
                      <span className="text-xl font-medium border-[1px] w-14 text-center">
                        1
                      </span>
                      <button className=" text-2xl cursor-pointer hover:text-[#2455f4] border-[1px] hover:border-[#2455f4] rounded-full px-2 pt-[1px] ">
                        +
                      </button>
                      <button
                        onClick={() => {
                          removeCart(product.id);
                        }}
                        className=" text-lg font-semibold cursor-pointer text-gray-800  hover:text-[#2455f4]"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t-[1px] border-gray-300 p-8 flex justify-end sticky bottom-0 bg-white drop-shadow-lg">
                <button class="text-lg bg-[#fb641b] px-6 py-2 rounded-[6px] hover:bg-[#2455f4] font-medium text-white cursor-pointer">
                  CHECK OUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
