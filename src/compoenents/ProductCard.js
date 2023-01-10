import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilitis/currencyFormatter";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const addToCartHandler = (id) => {
    navigate("/cart");
  };

  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl">
      <div className="img ">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-teal-500">
          {product.category}
        </span>
        <h3 className="tittle text-xl font-medium h-[5.2rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[6rem]">{product.description}</p>
        <div className="flex justify-between ">
          <span className="price text-xl font-medium text-rose-500">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product.id)}
            className="uppercase bg-violet-500 font-medium text-violet-50 py-3 px-8 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-orange-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
