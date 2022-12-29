import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="navbar-bg bg-violet-700 text-violet-50 h-20 flex justify-between items-center ">
      <div className="navber container mx-auto flex justify-between items-center gap-5">
        <div className="nav-left cursor-pointer">
          <span className="logo  text-xl font-semibold">
            Clear <span className="text-orange-500 ">Tech</span>
          </span>
        </div>
        <div className="nav-right flex items-center gap-5 ">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/Products" className="nav-links">
            Products
          </Link>

          <Link to="Cart">
            <span className="cart-icons relative">
              <FiShoppingCart />
              <span className="cart-container z-[1] absolute -top-3 -right-3 text-xs bg-orange-600 h-5 w-5 rounded-full flex items-center justify-center font-medium ">
                10
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
