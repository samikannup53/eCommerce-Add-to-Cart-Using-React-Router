import emptyCartImage from "../assets/emptyCartImage.png";
import shield from "../assets/shield.png";

const Cart = ({ cart, setCart, product }) => {
  const totalPrice = cart
    .reduce((value, index) => value + index.price * index.quantity, 0)
    .toFixed(2);

  const discount = 10;
  const discountPrice = ((totalPrice * discount) / 100).toFixed(2);
  const amountPayable = (totalPrice - discountPrice).toFixed(2);

  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleIncrement = (product_id) => {
    setCart((cart) =>
      cart.map((item) =>
        product_id === item.id
          ? { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) }
          : item
      )
    );
  };
  const handleDecrement = (product_id) => {
    setCart((cart) =>
      cart.map((item) =>
        product_id === item.id
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };

  return (
    <section className=" min-h-[75vh] bg-[#EFF7F6] p-6">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold pb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <img src={emptyCartImage} className="w-58 mr-10" />
            <p className="text-xl mt-4">Your Cart is Empty!</p>
            <p className="text-sm -mt-0">Add Items to it Now.</p>
            <button className="text-sm bg-[#fb641b] px-5 py-2 mt-6 rounded-sm hover:bg-[#2455f4] font-semibold text-white cursor-pointer">
              <i class="fa-solid fa-cart-shopping"></i> &nbsp; SHOPE NOW
            </button>
          </div>
        ) : (
          <div className="pb-6 gap-4 flex flex-col-reverse sm:flex-row-reverse justify-between items-start">
            <div className=" flex-1/4 sm:sticky sm:top-[148px]">
              <div className="flex flex-col gap-6 bg-white shadow-md rounded-sm">
                <p className="border-b-[1px] border-gray-300 py-4 px-6 text-gray-500 font-semibold">
                  PRICE DETAILS
                </p>
                <div className="flex justify-between px-6 font-medium text-gray-700">
                  <span>Price ({cart.length} Product) </span>
                  <span>₹ {totalPrice}</span>
                </div>
                <div className="flex justify-between px-6 font-medium text-gray-700">
                  <span>Discount (10%) </span>
                  <span>₹ {discountPrice}</span>
                </div>
                <div className="flex justify-between px-6 font-medium text-gray-700">
                  <span>Delivery Charges </span>
                  <span className="line-through ml-auto">₹ 50</span>
                  <span className="text-green-700 ml-2">Free</span>
                </div>
                <div className=" px-6 ">
                  <div className=" text-lg font-semibold text-gray-900 pt-4 flex justify-between border-dashed border-t-[1px] border-gray-300">
                    <span>Total Payable</span>
                    <span>₹ {amountPayable}</span>
                  </div>
                </div>

                <p className="border-t-[1px] border-gray-300 p-6 text-green-700 font-medium">
                  You Will Save ₹ {discountPrice} on this Order
                </p>
              </div>
              <div className="p-4 flex items-center gap-2">
                <img src={shield} className="w-8" />
                <p className="text-gray-500">
                  Safe and Secure Payments.
                  <br /> Easy Returns 100% Authentic Products.
                </p>
              </div>
            </div>

            <div className="flex-3/4 bg-white shadow-md rounded-sm">
              <div className="">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col gap-4 p-6 shadow-sm"
                  >
                    <div className="">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div className="flex gap-4">
                          <div className="w-30 h-30 flex items-center">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-24"
                            />
                          </div>
                          <div className="">
                            <p className="w-full text-[1rem]sm:w-70 lg:w-100">
                              {product.title}
                            </p>
                            <div className="flex items-center gap-2">
                              <p className="line-through strick-linethrough text-[1rem]/0 text-gray-700 font-semibold py-3 sm:py-0">
                                ₹&nbsp;{product.price}
                              </p>
                              <span className="text-green-700 ml-2">
                                10% Off
                              </span>
                            </div>
                            <p className="strick-linethrough text-[18px]/0 sm:text-[18px]/6 text-gray-700 font-semibold py-3 sm:py-0">
                              ₹&nbsp;
                              {(
                                product.price -
                                (product.price * 10) / 100
                              ).toFixed(2)}
                            </p>
                            <p className="text-[1rem]  text-gray-700 py-3 sm:py-0">
                              {product.quantity} Qty Price : ₹&nbsp;
                              {(
                                (product.price * product.quantity * 90) /
                                100
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <p className="text-[14px] sm:text-[1rem] text-gray-500 text-center sm:text-right">
                          Delivery By Tomorrow |
                          <span className="line-through ml-2">₹ 50</span>
                          <span className="text-green-700 ml-2">Free</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            handleDecrement(product.id);
                          }}
                          className=" text-[1rem] cursor-pointer hover:text-[#2455f4] border-[1px] hover:border-[#2455f4] rounded-full px-[10px] pt-[1px]  "
                        >
                          -
                        </button>
                        <span className="text-[1rem] font-medium border-[1px] w-8 text-center">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => {
                            handleIncrement(product.id);
                          }}
                          className=" text-[1rem] cursor-pointer hover:text-[#2455f4] border-[1px] hover:border-[#2455f4] rounded-full px-2 pt-[1px] "
                        >
                          +
                        </button>
                      </div>
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
