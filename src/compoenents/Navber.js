import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="navber-bg">
      <div className="navber">
        <div className="nav-left">
          <span>
            Clear <span>Tech</span>
          </span>
        </div>
        <div className="nav-right">
          <Link to="/" className="hoem">
            Home
          </Link>
          <Link to="/Products">Products</Link>
          <Link to="Cart">
            <span>
              <FiShoppingCart />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
