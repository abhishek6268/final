// main api file

import axios from "axios";

export const baseUrl = `https://dummyjson.com`;

//  fetch specific product details

export const fetchProducts = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/products`);
    return res.data;
  } catch (error) {
    console.log(`error while getting the product details`);
  }
};

//  fetch specific product details

export const productDetails = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(`error while getting the product details`);
  }
};
