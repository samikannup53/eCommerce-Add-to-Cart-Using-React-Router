import { Link } from "react-router";

const About = () => {
  return (
    <section className="bg-[#EFF7F6] p-6">
      <div className="container mx-auto">
        <h1 className="uppercase text-center text-lg font-semibold">
          About Us
        </h1>
        <p className="text-center texit-sm font-medum text-gray-600">
          Shope Outside the Box
        </p>
        <div className="w-20 h-1 bg-[#261FB3] mx-auto mt-2"></div>

        <div className="sm:w-[75vw] mx-auto my-10 flex flex-col gap-8 bg-white text-gray-800 shadow-2xl px-8 sm:px-15 py-12 rounded-xl">
          <div>
            <h2 className="uppercase text-base font-semibold text-[#261FB3]">
              About Us
            </h2>
            <p className="text-justify mt-4 indent-10 capitalize">
              Welcome to ShoppyCart, your one-stop destination for premium
              fashion, the latest tech gadgets, everyday essentials. Founded in
              2025, we are passionate about bringing you the best products at
              the best prices, with the convenience of shopping from anywhere,
              anytime.
            </p>
          </div>

          <div>
            <h2 className="uppercase text-base font-semibold text-[#261FB3]">
              Our Mission
            </h2>
            <p className="text-justify mt-4 indent-10 capitalize">
              Our mission is simple: to make your shopping experience seamless,
              enjoyable, and hassle-free. We’re committed to offering
              high-quality products, outstanding customer service, and fast,
              reliable delivery to meet all your needs.
            </p>
          </div>
          <div>
            <h2 className="uppercase text-base font-semibold text-[#261FB3]">
              Our Vision
            </h2>
            <p className="text-justify mt-4 indent-10 capitalize">
              To be the most customer-centric eCommerce platform, where people
              can find and discover anything they want to buy online & To
              inspire confidence in every purchase, foster trust in every
              transaction, and build a community where everyone feels valued,
              heard, and supported. We’re here to make shopping smarter,
              simpler, and more meaningful for everyone.
            </p>
          </div>
          <div>
            <h2 className="uppercase text-base font-semibold text-[#261FB3]">
              What We Offer
            </h2>
            <h3 className="mt-4">We Specialize In :</h3>
            <div className="px-4 flex flex-col gap-2">
              <p className="mt-4">
                ✅{" "}
                <span className="uppercase font-semibold">
                  Quality Assurance
                </span>
                : We source products from trusted brands and ensure they meet
                our high standards.
              </p>
              <p>
                ✅{" "}
                <span className="uppercase font-semibold">Exclusive Deals</span>
                : Enjoy regular discounts, promotions, and special offers just
                for you.
              </p>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-base font-semibold text-[#261FB3]">
              Why Choose Us ?
            </h2>
            <div className="px-4 flex flex-col gap-2">
              <p className="mt-4">
                ✅
                <span className="uppercase font-semibold">
                  Secure Shopping{" "}
                </span>
                : Your privacy and security are our top priorities.
              </p>
              <p>
                ✅
                <span className="uppercase font-semibold">Fast Delivery </span>:
                Get your orders delivered quickly and efficiently.
              </p>
              <p>
                ✅
                <span className="uppercase font-semibold">
                  Customer Centric{" "}
                </span>
                : We’re always here to help with responsive customer support.
              </p>
            </div>
          </div>
          <div className="w-40 h-1 bg-[#261FB3] mx-auto mt-2"></div>
          <div className="w-20 h-1 bg-[#fb641b] mx-auto -mt-5"></div>
          <p className="capitalize text-justify sm:text-center text-[#261FB3] font-medium">
            We believe shopping should be more than just a transaction - It should
            be an experience. Thank you for choosing <span>ShoppyCart</span>.
            We’re excited to serve you!
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Link
            className="uppercase text-lg bg-[#fb641b] px-6 py-3 rounded-full hover:bg-[#2455f4] font-semibold text-white cursor-pointer"
            to="/products"
          >
            - Continue Shopping -
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
