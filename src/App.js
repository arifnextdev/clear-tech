import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import products from "./pages/products";
import NotFound from "./pages/NotFound";
import Navber from "./compoenents/Navber";
import Slider from "./compoenents/Slider";
import Footer from "./compoenents/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
