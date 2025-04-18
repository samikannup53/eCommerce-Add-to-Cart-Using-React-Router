const Product = ({ product, cart, setCart }) => {
  const title =
    product.title.length > 41
      ? product.title.substring(0, 40) + "..."
      : product.title;

  const description =
    product.description.length > 61
      ? product.description.substring(0, 60) + "..."
      : product.description;

  const isInCart = cart.find((item) => item.id === product.id);

  const addCart = () => {
    if (isInCart) {
      return;
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] rounded-sm bg-white p-4 flex flex-col shadow-sm hover:shadow-2xl cursor-default">
      <div className="w-full h-50 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-auto h-full object-fit"
        />
      </div>
      <div className="flex flex-col items-center flex-grow text-center space-y-3 mt-3">
        <h1 className="font-semibold text-[17px] text-gray-700 capitalize">
          {title}
        </h1>
        <p className="taxt-[14px] text-gray-500 capitalize">{description}</p>
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
