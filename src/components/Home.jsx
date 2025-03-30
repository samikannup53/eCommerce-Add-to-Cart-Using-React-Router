import { Link } from "react-router-dom";
import circleImage from "../assets/circleImage.svg";
import semiCircleImage from "../assets/semiCircleImage.svg";
import triangleImage from "../assets/triangleImage.svg";
import { scrollToTop } from "../utilities/scrollToTop";

const Home = () => {
  return (
    <section className="p-6 bg-gradient-to-t from-[rgba(217,236,255,2)] to-[rgba(240,243,255,0)]">
      <div className=" container mx-auto flex flex-col items-center md:gap-6 my-10 cursor-default relative ">
        <h1 className="drop-shadow-lg text-[#fb641b] font-[600] text-2xl sm:text-3xl leading-10 xl:text-[2.5rem] text-center  ">
          Shope <span className="text-[#2455f4]">Outside the Box</span>
        </h1>
        <h1 className="drop-shadow-lg text-[#2455f4] text-center font-[600] text-3xl sm:text-4xl leading-12 xl:text-[3.25rem]">
          10% Offer <span className="text-[#fb641b]">On Every Products</span>
        </h1>
        <h3 className="drop-shadow-lg text-lg sm:text-xl xl:text-2xl font-semibold text-center mt-2 lg:mt-0 text-gray-700">
          Make it <span className="text-[#FEB139]">Perfect ! </span>&nbsp;
          Choice is <span className="text-[#FEB139]">Yours !! </span>
        </h3>
        <p className=" drop-shadow-lg text-[#261FB3] font-semibold text-center text-xl xl:text-2xl leading-9 mt-3 lg:mt-0 w-[80%]">
          We Make Online Shopping Superbly Easy
        </p>
        <i class="fa-solid fa-arrow-down animate-bounce text-4xl text-red-500 mt-6" />
        <Link
          onClick={scrollToTop}
          className="text-xl mb-6 bg-[#fb641b] px-8 py-4 rounded-full hover:bg-[#2455f4] font-medium text-white cursor-pointer"
          to="/products"
        >
          - Shope Now -
        </Link>
        <img
          src={circleImage}
          alt=""
          className="absolute -bottom-15 sm:-bottom-6 right-4 sm:right-10"
        />
        <img
          src={semiCircleImage}
          alt=""
          className="absolute -top-10  sm:-top-5 -left-4 sm:left-10"
        />
        <img
          src={triangleImage}
          alt=""
          className="animate-pulse absolute bottom-10 left-20 lg:left-60 hidden sm:block"
        />
        <img
          src={triangleImage}
          alt=""
          className="animate-pulse absolute top-2 right-10 lg:right-40 hidden sm:block"
        />
      </div>
    </section>
  );
};

export default Home;
