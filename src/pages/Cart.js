import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeToFormatCart,
} from "../features/cartSlice";
import { currencyFormatter } from "../utilitis/currencyFormatter";

const Cart = () => {
  const { cartItems: data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(removeToFormatCart(product));
  };

  const handelDecrese = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart-section container mx-auto py-10">
      <div className="cart-headline">
        <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
          {data.length > 0 ? "Your cart" : "Cart is empty"}
        </h2>
        <div className="text-center">
          {data.length === 0 && (
            <Link
              to={"/products"}
              className="text-center text-sky-500 cursor-pointer inline-block"
            >
              Start Shopping now
            </Link>
          )}
        </div>
      </div>
      {data.length > 0 && (
        <>
          <div className="cart-container">
            <div className="product-headline grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
              <div className="col-product col-span-2">product</div>
              <div className="col-unit-price">Unit price</div>
              <div className="col-qantity">Quantity</div>
              <div className="col-total-price ml-auto">Total price</div>
            </div>

            <div className="products flex flex-col ">
              {data?.map((product) => (
                <div className="product grid grid-cols-5 gap-10 border-b  pb-5  mt-10">
                  <div className="left flex col-span-2 gap-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-32 w32 object-cover"
                    />
                    <div className="details flex flex-col gap-3 items-start">
                      <span>{product.name}</span>
                      <button
                        onClick={() => handleRemove(product)}
                        className=" font-medium text-gray-400 hover:text-rose-500 duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price">
                    {currencyFormatter(product.price)}
                  </div>
                  <div className="counter  flex ">
                    <button
                      onClick={() => handelDecrese(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>

                    <span className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {currencyFormatter(product.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-lower flex justify-between items-start py-10">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium hover:border-rose-200 duration-300"
            >
              Clear cart
            </button>
            <div className="flex flex-col items-start gap-2">
              <div className="top flex justify-between w-full text-2xl font-medium">
                <span className="subtotal text-sky-500">Subtotal</span>
                <span className="price text-rose-500">$200</span>
              </div>
              <p>Texes and shipping costs are calculated at the checkout</p>
              <Link
                to={"/"}
                className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300 inline-block mx-auto text-center "
              >
                Checkout
              </Link>
              <Link
                to={"/products"}
                className="continune uppercase text-sky-500 font-medium"
              >
                Countinune Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
