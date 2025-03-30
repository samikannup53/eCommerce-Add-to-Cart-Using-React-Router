import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render anything
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
