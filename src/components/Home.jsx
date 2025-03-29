import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <section className="p-6 bg-[#EFF7F6]">
      <div className="container mx-auto flex justify-between py-10 items-center">
        <div className="flex flex-col items-center sm:items-start gap-6">
          <h1 className="font-[600] text-4xl text-center sm:text-3xl sm:text-left md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Shope Outside the Box
          </h1>
          <h3 className="text-xl font-medium text-center sm:text-2xl sm:text-left md:text-3xl lg:text-4xl">
            Make it Perfect ! &nbsp; Choice is Yours !!
          </h3>
          <p className="text-xl font-semibold text-center sm:text-left">
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
