import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";
import CartSummary from "./components/CartSummary";
import Footer from "./components/Footer";
import OrderPage from "./components/OrderPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />}/>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart/>}>
            <Route index element={<CartSummary cart={cart} setCart={setCart}/>}/>
            <Route path="cartSummary" element={<CartSummary />}/>
            <Route path="orderSuccess" element={<OrderPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
