import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducers/cartSlice";
import { Link } from "react-router-dom";
import { productDetails } from "../api/api";

const ProductContainer = ({ selectedCategory, setSelectedCategory }) => {
  // setting up the usedispatch to dispatvh an action
  const dispatch = useDispatch();
  // useselector for getting the state of the products
  const productsData = useSelector((state) => state.products.products);
  const cartsData = useSelector((state) => state.cart.cartItems);
  // handle add item
  const handleAdd = (e, item) => {
    dispatch(addItem(item));
    console.log(cartsData);
  };
  // setproduct according to the api calls
  return (
    <div class="font-[sans-serif]">
      <div class="px-6  py-2 mx-auto lw-full mt-4">
        <h2 class="text-4xl  text-gray-800 mb-12 text-center text-primary capitalize">
          {selectedCategory} house
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((item, index) => {
            return (
              <section class="p-5 py-10 bg-yellow-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 bg-transparent">
                  <Link to={`/productdetails/${item.id}`}>
                    <img
                      src={item.images[0]}
                      alt="Product 1"
                      className="h-full w-full object-contain bg-transparent"
                      style={{
                        backgroundColor: "transparent !important",
                      }}
                    />
                  </Link>
                </div>
                <div class="space-x-1 flex justify-center mt-10">
                  <svg
                    class="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    class="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    class="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    class="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    class="w-4 h-4 mx-px fill-current text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                </div>
                <h1 class="text-3xl my-5">{item.title}</h1>
                <p class="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, incidunt!
                </p>
                <div className="flex justify-around item-center">
                  <div className=" flex justify-around item-center gap-2">
                    <h2 class="font-semibold mb-5">
                      ${item.discountPercentage}
                    </h2>
                    <h2 class="font-semibold mb-5 line-through">
                      ${item.price}
                    </h2>
                  </div>
                </div>
                <button
                  class="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={(e) => {
                    handleAdd(e, item);
                  }}
                >
                  Add To Cart
                </button>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
