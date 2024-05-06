import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducers/cartSlice";
import { Link } from "react-router-dom";
import { productDetails } from "../api/api";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  // setting up the usedispatch to dispatvh an action
  // useselector for getting the state of the products
  const productsData = useSelector((state) => state.products.products);
  const cartsData = useSelector((state) => state.cart.cartItems);

   // state for handeling the icon
   const [selected, setSelected] = useState(false);
   const dispatch = useDispatch();
 
   const handleitem = () => {
     setSelected(!selected);
     dispatch(addItem(1));
   };
 


  return (
    <>
      {/* <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
        <h1 class="text-3xl">Tailwind CSS</h1>
      </div> */}

      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 web:grid-cols-5  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {/* sample mapping data */}
        {Array.from({ length: 10 }).map((item) => {
          return (
            <>
             <ProductCard/>
            </>
          );
        })}
      </section>

      <div class="text-center py-10 px-10">
        <h2 class="font-bold text-2xl md:text-4xl mb-4">
          Thanks to{" "}
          <a
            href="https://unsplash.com/@nixcreative"
            class="underline font-black"
          >
            Tyler Nix
          </a>{" "}
          for those AMAZING product images!
        </h2>
      </div>
    </>
  );
};

export default ProductPage;
