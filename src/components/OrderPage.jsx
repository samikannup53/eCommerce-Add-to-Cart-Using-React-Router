import success from "../assets/success.png";
import { Link } from "react-router";
import { scrollToTop } from "../utilities/scrollToTop";

const OrderPage = () => {
  return (
    <section className="p-6 bg-gradient-to-t from-[rgba(217,236,255,2)] to-[rgba(240,243,255,0)] min-h-[90vh]">
      <div className="px-4 container mx-auto mt-15 2xl:mt-30 flex flex-col justify-center items-center">
        <img src={success} alt="Order Success" className="w-30 animate-pulse ml-8 sm:ml-0" />
        <p className="text-center mt-4 text-gray-800 font-medium text-[18px]">
          Your Order Has Been Placed Successfully !
        </p>
        <p className="text-center mt-2 text-gray-800 font-medium">
          "We appreciate your business and can’t wait for you to receive your
          order! Thank you for choosing ShoppyCart."
        </p>
        <Link
          to="/products"
          onClick={scrollToTop}
          className="uppercase text-[14px] sm:text-[18px] bg-[#fb641b] px-6 text-center py-3 mt-8 rounded-full hover:bg-[#2455f4] font-medium text-white cursor-pointer"
        >
          - Continue Shopping -
        </Link>
      </div>
    </section>
  );
};

export default OrderPage;
