import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducers/cartSlice";
import { Link } from "react-router-dom";
import { productDetails } from "../api/api";

const ProductPage = () => {
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

  return (
    // <div className="font-[sans-serif]">
    //     <div className="px-6  py-2 mx-auto lw-full mt-4">
    //         <h2 className="text-4xl  text-gray-800 mb-12  capitalize">Cookie house</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //             {
    //                 productsData.map((item) => {
    //                     return (
    //                         <div key={item.id} className="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
    //                             <div
    //                                 className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
    //                                 <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
    //                                     <path
    //                                         d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
    //                                         data-original="#000000"></path>
    //                                 </svg>
    //                             </div>
    //                             <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
    //                                 <Link to={`/productdetails/${item.id}`}>
    //                                     <img src={item.images[0]} alt="Product 1" className="h-full w-full object-contain" />
    //                                 </Link>
    //                             </div>
    //                             <div className="text-center mt-4">
    //                                 <h3 className="text-lg font-extrabold text-gray-800">{item.title}</h3>
    //                                 <h4 className="text-2xl text-gray-800 font-bold mt-4">{item.discountPercentage} <strike
    //                                     className="text-gray-400 ml-2 font-medium">{item.price}</strike>
    //                                 </h4>
    //                                 <button type="button"
    //
    //                                     className="w-full flex items-center justify-center gap-3 mt-6 px-4 py-2.5 bg-white hover:bg-gray-200 hover:text-gray-700 text-gray-900  border-2 font-semibold border-[#333] rounded-xl">
    //                                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512 " className='text-secondary'>
    //                                         <path
    //                                             d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
    //                                             data-original="#000000"></path>
    //                                     </svg> */}
    //                                     Add to cart</button>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }

    //         </div>
    //     </div>
    // </div>
    <>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          {productsData.map((item, index) => {
            return (
              <section className="p-5 py-10 bg-yellow-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
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
                <div className="space-x-1 flex justify-center mt-10">
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                </div>
                <h1 className="text-3xl my-5">{item.title}</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, incidunt!
                </p>
                <div className="flex justify-around item-center">
                  <div className=" flex justify-around item-center gap-2">
                    <h2 className="font-semibold mb-5">
                      ${item.discountPercentage}
                    </h2>
                    <h2 className="font-semibold mb-5 line-through">
                      ${item.price}
                    </h2>
                  </div>
                </div>
                <button
                  className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={(e) => {
                    handleAdd(e, item);
                  }}
                >
                  Add To Cart
                </button>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default ProductPage;
