const Product = ({ product, cart, setCart }) => {
  const title =
    product.title.length > 41
      ? product.title.substring(0, 40) + "..."
      : product.title;

  const isInCart = cart.some((item) => item.id === product.id);

  const addCart = () => {
    if (isInCart) {
      return;
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%]  bg-white p-4 flex flex-col">
      <div className="w-full h-50 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-auto h-full object-fit"
        />
      </div>
      <div className="flex flex-col items-center flex-grow text-center space-y-3 mt-3">
        <h1 className="font-semibold text-[17px] text-gray-900">{title}</h1>
        <p className="text-lg font-bold text-[19px] text-gray-800">
          ₹ &nbsp;{product.price}
        </p>
        <button
          onClick={addCart}
          className={`text-sm  px-5 py-2 rounded-sm  font-semibold   mt-auto
            ${
              isInCart
                ? "bg-sky-500/60 cursor-not-allowed text-gray-700"
                : "bg-[#fb641b] hover:bg-[#2455f4] cursor-pointer text-white"
            }`}
        >
          <i class="fa-solid fa-cart-shopping"></i> &nbsp;
          {isInCart ? "ALREADY IN CART" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default Product;
