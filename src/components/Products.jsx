import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Commet } from "react-loading-indicators";
import warning from "../assets/warning.png";

const Products = ({ cart, setCart }) => {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to Fetch the Data from Server");
        }
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className=" bg-[#EFF7F6] p-4 min-h-[75vh] flex items-center justify-center">
        <Commet
          color="#2874f0"
          size="large"
          text="Please Wait..."
          textColor=""
        />
      </section>
    );
  } else {
    return (
      <section className=" bg-[#EFF7F6] px-4 py-4 sm:py-12 min-h-[75vh]">
        {products.length !== 0 && (
          <div className="container mx-auto flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        )}
        {error && (
          <div className="h-[75vh] flex flex-col items-center justify-center">
            <img src={warning} alt="Warning..." className="w-30 mb-6" />
            <p className="text-red-600 text-base italic">
              Error Message: {error} ...
            </p>
            <p className="text-red-600 text-base italic">
              This Error Occurs When Response Not Received from Server / Network
              Error
            </p>
            <p className="text-red-600  text-base italic">
              Kindly check Network Connection, If still error occurs kindly
              Contact Site Administrator
            </p>
          </div>
        )}
      </section>
    );
  }
};

export default Products;
