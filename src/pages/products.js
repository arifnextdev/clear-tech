import { useSelector } from "react-redux";
import ProductCard from "../compoenents/ProductCard";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  return (
    <div className="products-section container mx-auto py-10 ">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center">
        Browse all products
      </h2>
      <div className="products-wrapper grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10 2xl:grid-cols-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
