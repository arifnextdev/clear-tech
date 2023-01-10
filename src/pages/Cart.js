import { currencyFormatter } from "../utilitis/currencyFormatter";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
];

const Cart = () => {
  return (
    <div className="cart-section container mx-auto py-10">
      <div className="cart-headline">
        <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
          Your Cart
        </h2>
      </div>
      <div className="cart-container">
        <div className="product-headline grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-product col-span-2">product</div>
          <div className="col-unit-price">Unit price</div>
          <div className="col-qantity">Quantity</div>
          <div className="col-total-price">Total price</div>
        </div>
      </div>
      <div className="products flex flex-col ">
        {data.map((product) => (
          <div className="product grid grid-cols-5 gap-10 border-b  pb-5  mt-10">
            <div className="left flex col-span-2 gap-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w32 object-cover"
              />
              <div className="details flex flex-col gap-3 items-start">
                <span>{product.name}</span>
                <button className=" font-medium text-gray-400 hover:text-rose-500 duration-300">
                  Remove
                </button>
              </div>
            </div>
            <div className="unit-price">{currencyFormatter(product.price)}</div>
            <div className="counter  flex ">
              <button className="h-10 w-10 bg-gray-100 border border-gray-300">
                -
              </button>
              <button className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                1
              </button>
              <button className="h-10 w-10 bg-gray-100 border border-gray-300">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-lower"></div>
    </div>
  );
};

export default Cart;
