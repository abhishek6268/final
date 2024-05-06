import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  //  getting products stored in the cart
  const orderedProducts = useSelector((state) => state.cart.cartItems);
  console.log(orderedProducts);

  //    state for handeling billing and shipping address here
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  return (
    <>
      <div className="py-6 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 text-center md:text-start lg:leading-9 text-gray-800">
            Order #13432
          </h1>
          <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600 text-center md:text-start">
            21st Mart 2021 at 10:34 PM
          </p>
        </div>
        {/*  adress line starts here  */}
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-6">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div className="flex justify-start md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                Shipping Address
              </p>
              <input
                value={shippingAddress}
                onChange={(e) => {
                  setShippingAddress(e.target.value);
                }}
                type="text"
                className="border-2  w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                placeholder="Enter shipping address here"
              />
              <p className="w-48 font-semibold lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                {shippingAddress.length
                  ? shippingAddress
                  : "flat no xyz street no xyz bronx usa"}
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p className="text-base  dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                Billing Address
              </p>
              <input
                value={billingAddress}
                onChange={(e) => {
                  setBillingAddress(e.target.value);
                }}
                type="text"
                className="w-48 lg:w-full border-2  dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                placeholder="Enter Billing address here"
              />
              <p className="w-48 font-semibold lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                {billingAddress.length
                  ? billingAddress
                  : "flat no xyz street no xyz bronx usa"}
              </p>
            </div>
          </div>
          <div className="md:flex gap-2">
            <div className="flex mt-4 w-full justify-center items-center md:justify-start md:items-start">
              <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                Edit Details
              </button>
            </div>
            <div className="flex mt-4 w-full justify-center items-center md:justify-start md:items-start">
              <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                <Link to={"/payment"}>Continue</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>

              {/*  cart products starts here  */}
              {orderedProducts.map((item) => {
                return (
                  <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                      <img
                        className="w-full hidden md:block"
                        src={item.images[0]}
                        alt="dress"
                      />
                      <img
                        className="w-full md:hidden"
                        src={item.images[0]}
                        alt="dress"
                      />
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                      <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                          {item.title}
                        </h3>
                        <div className="flex justify-start items-start flex-col space-y-2">
                          <p className="text-sm dark:text-white leading-none text-gray-800">
                            <span className="dark:text-gray-400 text-gray-900">
                              Category:{" "}
                            </span>{" "}
                            {item.category}
                          </p>
                          <p className="text-sm dark:text-white leading-none text-gray-900">
                            <span className="dark:text-gray-400 text-gray-900">
                              Description:{" "}
                            </span>{" "}
                            {item.description.slice(
                              0,
                              item.description.length / 2
                            )}
                            .....
                          </p>
                          <p className="text-sm dark:text-white leading-none text-gray-800">
                            <span className="dark:text-gray-400 text-gray-900">
                              Color:{" "}
                            </span>{" "}
                            Light Blue
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between space-x-8 items-start w-full">
                        <p className="text-base dark:text-white xl:text-lg leading-6">
                          ${item.discountPercentage}{" "}
                          <span className="text-red-300 line-through">
                            ${item.price}
                          </span>
                        </p>
                        <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                          {item.quantity}
                        </p>
                        <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                          ${item.discountPercentage * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                  <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                    Summary
                  </h3>
                  <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between w-full">
                      <p className="text-base dark:text-white leading-4 text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                        $
                        {Math.floor(
                          orderedProducts.reduce(function (
                            accumulator,
                            currentValue
                          ) {
                            return (
                              accumulator +
                              currentValue.discountPercentage *
                                currentValue.quantity
                            );
                          },
                          0)
                        )}
                      </p>
                    </div>
                    {/* <div className="flex justify-between items-center w-full">
                                            <p className="text-base dark:text-white leading-4 text-gray-800">
                                                Discount{" "}
                                                <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                                                    STUDENT
                                                </span>
                                            </p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                                -$28.00 (50%)
                                            </p>
                                        </div> */}
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base dark:text-white leading-4 text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                        $8.00
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                      Total
                    </p>
                    <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                      $
                      {Math.floor(
                        orderedProducts.reduce(function (
                          accumulator,
                          currentValue
                        ) {
                          return (
                            accumulator +
                            currentValue.discountPercentage *
                              currentValue.quantity
                          );
                        },
                        0)
                      ) + 8}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
