import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({cart, setCart}) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
 
  return (
    <section className=" bg-[#EFF7F6] p-4">
      <div className="container mx-auto flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;
