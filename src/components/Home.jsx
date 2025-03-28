import React from "react";
import heroImage from "../assets/heroImage.png"

const Home = () => {
  return (
    <section className="p-6">
      <div className="container mx-auto flex justify-between mt-10">
        <div className="py-10">
          <h1 className="text-6xl font-[600]">Shope Outside the Box</h1>
          <h3 className="text-4xl font-[500] mt-10">
            Make it Perfect ! &nbsp; Choice is Yours !!
          </h3>
          <p className="text-xl font-semibold mt-10">
            We Make Online Shopping Superbly Easy
          </p>
          <button class="text-xl bg-[#fb641b] px-8 py-4 rounded-full hover:bg-[#2455f4] font-semibold text-white cursor-pointer mt-10">
            Shope Now
          </button>
        </div>
        <div>
          <img src={heroImage} className="w-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
