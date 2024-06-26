import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  //  getting cart data from cartslice
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-3 gap-12 p-6">
        {cartItems.length ? (
          <>
            <div className="lg:col-span-2 bg-white divide-y">
              {/* product details */}
              {cartItems.map((item) => {
                return <CartCard item={item} />;
              })}
            </div>
            <div className="shadow-md p-6">
              <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
                Order Summary
              </h3>
              <ul className="text-[#333] divide-y mt-6">
                <li className="flex flex-wrap gap-4 text-md py-4">
                  Subtotal{" "}
                  <span className="ml-auto font-bold">
                    {Math.floor(
                      cartItems.reduce(function (accumulator, currentValue) {
                        console.log(currentValue.discountPercentage);
                        return (
                          accumulator +
                          currentValue.discountPercentage *
                            currentValue.quantity
                        );
                      }, 0)
                    )}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-md py-4">
                  Shipping <span className="ml-auto font-bold">$4.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-md py-4">
                  Tax <span className="ml-auto font-bold">$4.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                  Total <span className="ml-auto">$63.5</span>
                </li>
              </ul>
              <Link to={"/ordersummary"}>
                <button
                  type="button"
                  className="mt-6 text-md px-6 py-2.5 w-full bg-primary text-secondary rounded"
                >
                  Continue
                </button>
              </Link>
              <div className="mt-10">
                <h3 className="text-xl font-extrabold text-[#333] mb-6">
                  Apply promo code
                </h3>
                <div className="flex border border-primary  overflow-hidden max-w-md rounded">
                  <input
                    type="email"
                    placeholder="Promo code"
                    className="w-full outline-none bg-white text-gray-600 text-md px-4 py-2.5"
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center bg-primary text-secondary  px-6 text-md text-white"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {!cartItems.length ? (
        <section className="mt-10">
          <div className="w-full flex flex-col items-center ">
            <div className="flex flex-col gap-6 max-w-md text-center">
              <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100  flex items-center justify-around">
                <img
                  src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png?f=webp"
                  className="w-1/2"
                  alt=""
                />
              </h2>
              <p className="text-2xl md:text-3xl dark:text-gray-300 capitalize font-extralight">
                Nothing in the cart
              </p>
         <div className="flex items-center justify-center">
         <Link
                to={"/"}
                className="px-8 mobile:w-[80%] py-4 text-xl font-semibold rounded bg-primary text-gray-50 hover:text-gray-200"
              >
                Continue Shopping
              </Link>
         </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Cart;
