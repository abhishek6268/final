import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/reducers/cartSlice";
import product from "../assets/masala-bread.jpg";
import { toast } from "react-toastify";

const ProductCard = () => {
  // state for handeling the icon
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handleitem = () => {
    setSelected(!selected);
    dispatch(addItem(1));
    toast("ITEM ADDEDN TO CART");
  };

  return (
    <div>
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:shadow-secondary">
        <div>
          <Link to={`/productdetails/${1}`}>
            <img
              src={product}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
          </Link>
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">
              Category :{" "}
              <span className={"text-tertiary font-semibold"}>Bakery</span>
            </span>
            <Link to={`/productdetails/${1}`}>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Masala Bread
              </p>
            </Link>
            <div class="flex items-center">
              
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                ₹149
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">₹199</p>
              </del>
              <div class="ml-auto " onClick={handleitem}>
                {selected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#842925"
                      d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#842925"
                      d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
