import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { productDetails } from "../api/api";

const ProductDetails = () => {
    const [productDetail, setProductDetails] = useState();
    const id = useParams();
    console.log(id);
    const fetchproductdetails = async () => {
        const response = await productDetails(id.id);
        setProductDetails(response);
        console.log(response);
    };
    useEffect(() => {
        fetchproductdetails();
    }, []);
    const myref = useRef();
    const handleClick = (id) => {
        myref.current.src = productDetail?.images[id];
    };
    return (
        <div className="font-[sans-serif]">
            <div className="p-6 px-12 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                        <div className="w-4/5 rounded object-cover" style={{ height: '300px' }}>
                            <img src={productDetail?.images[0]} ref={myref} alt="Product" className="w-full h-full" />
                        </div>
                        <hr className="border-white border-2 my-6" />
                        <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
                            <img onClick={() => handleClick(1)} src={productDetail?.images[1]} alt="Product1" className="w-24 cursor-pointer" />
                            <img onClick={() => handleClick(2)} src={productDetail?.images[2]} alt="Product2" className="w-24 cursor-pointer" />
                            <img onClick={() => handleClick(3)} src={productDetail?.images[3]} alt="Product3" className="w-24 cursor-pointer" />
                            <img onClick={() => handleClick(1)} src={productDetail?.images[1]} alt="Product4" className="w-24 cursor-pointer" />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">{productDetail?.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">{productDetail?.discountPercentage}</p>
                            <p className="text-gray-400 text-xl"><strike>{productDetail?.price}</strike> <span className="text-sm ml-1">Tax included</span></p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">About the Product</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>{productDetail?.category}</li>
                                <li>{productDetail?.description}.</li>
                            </ul>
                        </div>
                        <div className="mt-8 max-w-md">
                            <h3 className="text-lg font-bold text-gray-800">Reviews(10)</h3>
                            <div className="space-y-3 mt-4">
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">5.0</p>
                                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-2/3 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-1/3 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-1/6 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">2.0</p>
                                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-1/12 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">1.0</p>
                                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-[6%] h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                                </div>
                            </div>
                            <div className="flex items-start mt-8">
                                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                <div className="ml-3">
                                    <h4 className="text-sm font-bold">John Doe</h4>
                                    <div className="flex space-x-1 mt-1">
                                        <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                                    </div>
                                    <p className="text-xs mt-4">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                </div>
                            </div>
                            <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded">Read all reviews</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-24">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 class="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
                      Realted Products
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <a href="javascript:;" class="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                            <div class="">
                                <img src="https://pagedone.io/asset/uploads/1700726158.png" alt="face cream image" class="w-full aspect-square" />
                            </div>
                            <div class="mt-5">
                                <div class="flex items-center justify-between">
                                    <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">Face cream</h6>
                                    <h6 class="font-semibold text-xl leading-8 text-indigo-600">$100</h6>
                                </div>
                                <p class="mt-2 font-normal text-sm leading-6 text-gray-500">Orange & Aloe Vera</p>
                            </div>
                        </a>

                        <a href="javascript:;" class="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                            <div class="">
                                <img src="https://pagedone.io/asset/uploads/1700726174.png" alt="plastic bottle image" class="w-full aspect-square" />
                            </div>
                            <div class="mt-5">
                                <div class="flex items-center justify-between">
                                    <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">Plstic bottle</h6>
                                    <h6 class="font-semibold text-xl leading-8 text-indigo-600">$40</h6>
                                </div>
                                <p class="mt-2 font-normal text-sm leading-6 text-gray-500">Black color</p>
                            </div>
                        </a>

                        <a href="javascript:;" class="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                            <div class="">
                                <img src="https://pagedone.io/asset/uploads/1700726191.png" alt="cream image" class="w-full aspect-square" />
                            </div>
                            <div class="mt-5">
                                <div class="flex items-center justify-between">
                                    <h6 class="font-semibold text-xl leading-8 text-black  transition-all duration-500 group-hover:text-indigo-600">Men cream</h6>
                                    <h6 class="font-semibold text-xl leading-8 text-indigo-600">$100</h6>
                                </div>
                                <p class="mt-2 font-normal text-sm leading-6 text-gray-500">Aloe Vera and Neem</p>
                            </div>
                        </a>

                        <a href="javascript:;" class="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
                            <div class="">
                                <img src="https://pagedone.io/asset/uploads/1700726207.png" alt="perfume bottle image" class="w-full aspect-square" />
                            </div>
                            <div class="mt-5">
                                <div class="flex items-center justify-between">
                                    <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">Cold Perfume</h6>
                                    <h6 class="font-semibold text-xl leading-8 text-indigo-600">$100</h6>
                                </div>
                                <p class="mt-2 font-normal text-sm leading-6 text-gray-500">White perfume</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
       
    );
};

export default ProductDetails;
