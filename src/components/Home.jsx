import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <section className="p-6 bg-[#EFF7F6]">
      <div className="container mx-auto flex justify-between py-10 items-center">
        <div className="flex flex-col items-center sm:items-start md:gap-6 cursor-default">
          <h1 className="text-[#fb641b] font-[600] text-4xl text-center sm:text-3xl sm:text-left md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Shope <span className="text-[#2455f4]">Outside  the Box</span>
          </h1>
          <h3 className="text-[18px] font-medium text-center sm:text-left md:text-2xl lg:text-4xl leading-9 sm:leading-0 xl:leading-14 lg:leading-8">
            Make it <span className="text-[#FEB139]">Perfect ! </span>&nbsp; Choice is <span className="text-[#FEB139]">Yours !! </span>
          </h3>
          <p className="text-xl text-[#261FB3] font-semibold text-center sm:text-left">
            We Make Online Shopping Superbly Easy
          </p>

          <Link
            className="text-xl bg-[#fb641b] px-8 py-4 rounded-full hover:bg-[#2455f4] font-semibold text-white cursor-pointer mt-8"
            to="/products"
          >
            Shope Now
          </Link>
        </div>
        <div>
          <img
            src={heroImage}
            className="w-[300px] lg:w-[350px] xl:w-[450px]  hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
