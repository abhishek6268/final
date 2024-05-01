import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productDetails } from "../api/api";
import { useDispatch } from 'react-redux';
import { addItem, removeItem, setItemQuantity, setItemQuantityHigh, setItemQuantityLow } from '../redux/reducers/cartSlice';


const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [productDetail, setProductDetails] = useState();
    const dispatch = useDispatch();

    const handleincrease = () => {
        setQuantity(quantity + 1)
        dispatch(setItemQuantityHigh(productDetail))
    }
    const handledecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(setItemQuantityLow(productDetail))
        }
    };
    const id = useParams();
    console.log(id);
    const fetchproductdetails = async () => {
        const response = await productDetails(id.id);
        setProductDetails({ ...response, quantity: 1 });
        console.log(response);
    };
    useEffect(() => {
        fetchproductdetails();
    }, []);
    const myref = useRef();
    const handleClick = (id) => {
        myref.current.src = productDetail?.images[id];
    };
    console.log(productDetail)
    return (
        // <div className="font-[sans-serif]">
        //     <div className="p-6 px-12 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
        //         <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
        //             <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
        //                 <div className="w-4/5 rounded object-cover" style={{ height: '300px' }}>
        //                     <img src={productDetail?.images[0]} ref={myref} alt="Product" className="w-full h-full" />
        //                 </div>
        //                 <hr className="border-white border-2 my-6" />
        //                 <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
        //                     <img onClick={() => handleClick(1)} src={productDetail?.images[1]} alt="Product1" className="w-24 cursor-pointer" />
        //                     <img onClick={() => handleClick(2)} src={productDetail?.images[2]} alt="Product2" className="w-24 cursor-pointer" />
        //                     <img onClick={() => handleClick(3)} src={productDetail?.images[3]} alt="Product3" className="w-24 cursor-pointer" />
        //                     <img onClick={() => handleClick(1)} src={productDetail?.images[1]} alt="Product4" className="w-24 cursor-pointer" />
        //                 </div>
        //             </div>

        //             <div className="lg:col-span-2">
        //                 <h2 className="text-2xl font-extrabold text-gray-800">{productDetail?.title}</h2>
        //                 <div className="flex flex-wrap gap-4 mt-4">
        //                     <p className="text-gray-800 text-xl font-bold">{productDetail?.discountPercentage}</p>
        //                     <p className="text-gray-400 text-xl"><strike>{productDetail?.price}</strike> <span className="text-sm ml-1">Tax included</span></p>
        //                 </div>
        //                 <div className="flex space-x-2 mt-4">
        //                     <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
        //                         xmlns="http://www.w3.org/2000/svg">
        //                         <path
        //                             d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                     </svg>
        //                     <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
        //                         xmlns="http://www.w3.org/2000/svg">
        //                         <path
        //                             d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                     </svg>
        //                     <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
        //                         xmlns="http://www.w3.org/2000/svg">
        //                         <path
        //                             d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                     </svg>
        //                     <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
        //                         xmlns="http://www.w3.org/2000/svg">
        //                         <path
        //                             d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                     </svg>
        //                     <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
        //                         xmlns="http://www.w3.org/2000/svg">
        //                         <path
        //                             d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                     </svg>
        //                 </div>
        //                 <div className="mt-8">
        //                     <h3 className="text-lg font-bold text-gray-800">About the Product</h3>
        //                     <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
        //                         <li>{productDetail?.category}</li>
        //                         <li>{productDetail?.description}.</li>
        //                     </ul>
        //                 </div>
        //                 <div className="mt-8 max-w-md">
        //                     <h3 className="text-lg font-bold text-gray-800">Reviews(10)</h3>
        //                     <div className="space-y-3 mt-4">
        //                         <div className="flex items-center">
        //                             <p className="text-sm text-gray-800 font-bold">5.0</p>
        //                             <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path
        //                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                             </svg>
        //                             <div className="bg-gray-300 rounded w-full h-2 ml-3">
        //                                 <div className="w-2/3 h-full rounded bg-gray-800"></div>
        //                             </div>
        //                             <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
        //                         </div>
        //                         <div className="flex items-center">
        //                             <p className="text-sm text-gray-800 font-bold">4.0</p>
        //                             <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path
        //                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                             </svg>
        //                             <div className="bg-gray-300 rounded w-full h-2 ml-3">
        //                                 <div className="w-1/3 h-full rounded bg-gray-800"></div>
        //                             </div>
        //                             <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
        //                         </div>
        //                         <div className="flex items-center">
        //                             <p className="text-sm text-gray-800 font-bold">3.0</p>
        //                             <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path
        //                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                             </svg>
        //                             <div className="bg-gray-300 rounded w-full h-2 ml-3">
        //                                 <div className="w-1/6 h-full rounded bg-gray-800"></div>
        //                             </div>
        //                             <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
        //                         </div>
        //                         <div className="flex items-center">
        //                             <p className="text-sm text-gray-800 font-bold">2.0</p>
        //                             <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path
        //                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                             </svg>
        //                             <div className="bg-gray-300 rounded w-full h-2 ml-3">
        //                                 <div className="w-1/12 h-full rounded bg-gray-800"></div>
        //                             </div>
        //                             <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
        //                         </div>
        //                         <div className="flex items-center">
        //                             <p className="text-sm text-gray-800 font-bold">1.0</p>
        //                             <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path
        //                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                             </svg>
        //                             <div className="bg-gray-300 rounded w-full h-2 ml-3">
        //                                 <div className="w-[6%] h-full rounded bg-gray-800"></div>
        //                             </div>
        //                             <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
        //                         </div>
        //                     </div>
        //                     <div className="flex items-start mt-8">
        //                         <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
        //                         <div className="ml-3">
        //                             <h4 className="text-sm font-bold">John Doe</h4>
        //                             <div className="flex space-x-1 mt-1">
        //                                 <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg">
        //                                     <path
        //                                         d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                                 </svg>
        //                                 <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg">
        //                                     <path
        //                                         d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                                 </svg>
        //                                 <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg">
        //                                     <path
        //                                         d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                                 </svg>
        //                                 <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg">
        //                                     <path
        //                                         d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                                 </svg>
        //                                 <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg">
        //                                     <path
        //                                         d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        //                                 </svg>
        //                                 <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
        //                             </div>
        //                             <p className="text-xs mt-4">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
        //                         </div>
        //                     </div>
        //                     <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded">Read all reviews</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div class="py-24">
        //         <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        //             <h2 class="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
        //               Realted Products
        //             </h2>
        //             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        //                 <a href="javascript:;" class="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
        //                     <div class="">
        //                         <img src="https://pagedone.io/asset/uploads/1700726158.png" alt="face cream image" class="w-full aspect-square" />
        //                     </div>
        //                     <div class="mt-5">
        //                         <div class="flex items-center justify-between">
        //                             <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">Face cream</h6>
        //                             <h6 class="font-semibold text-xl leading-8 text-indigo-600">$100</h6>
        //                         </div>
        //                         <p class="mt-2 font-normal text-sm leading-6 text-gray-500">Orange & Aloe Vera</p>
        //                     </div>
        //                 </a>

        //                 <a href="javascript:;" class="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
        //                     <div class="">
        //                         <img src="https://pagedone.io/asset/uploads/1700726174.png" alt="plastic bottle image" class="w-full aspect-square" />
        //                     </div>
        //                     <div class="mt-5">
        //                         <div class="flex items-center justify-between">
        //                             <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">Plstic bottle</h6>
        //                             <h6 class="font-semibold text-xl leading-8 text-indigo-600">$40</h6>
        //                         </div>
        //                         <p class="mt-2 font-normal text-sm leading-6 text-gray-500">Black color</p>
        //                     </div>
        //                 </a>

        //                 <a href="javascript:;" class="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
        //                     <div class="">
        //                         <img src="https://pagedone.io/asset/uploads/1700726191.png" alt="cream image" class="w-full aspect-square" />
        //                     </div>
        //                     <div class="mt-5">
        //                         <div class="flex items-center justify-between">
        //                             <h6 class="font-semibold text-xl leading-8 text-black  transition-all duration-500 group-hover:text-indigo-600">Men cream</h6>
        //                             <h6 class="font-semibold text-xl leading-8 text-indigo-600">$100</h6>
        //                         </div>
        //                         <p class="mt-2 font-normal text-sm leading-6 text-gray-500">Aloe Vera and Neem</p>
        //                     </div>
        //                 </a>

        //                 <a href="javascript:;" class="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500">
        //                     <div class="">
        //                         <img src="https://pagedone.io/asset/uploads/1700726207.png" alt="perfume bottle image" class="w-full aspect-square" />
        //                     </div>
        //                     <div class="mt-5">
        //                         <div class="flex items-center justify-between">
        //                             <h6 class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">Cold Perfume</h6>
        //                             <h6 class="font-semibold text-xl leading-8 text-indigo-600">$100</h6>
        //                         </div>
        //                         <p class="mt-2 font-normal text-sm leading-6 text-gray-500">White perfume</p>
        //                     </div>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <section class="py-4 relative ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div class="">
                        <div
                            //   style={{"--swiper-navigation-color: #fff" , "--swiper-pagination-color: #fff"}}
                            class="swiper product-prev mb-6"
                        >
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1700471851.png"
                                        alt="Yellow Travel Bag image"
                                        class="mx-auto"
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1711514857.png"
                                        alt="Yellow Travel Bag image"
                                        class="mx-auto"
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1711514875.png"
                                        alt="Yellow Travel Bag image"
                                        class="mx-auto"
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1711514892.png"
                                        alt="Yellow Travel Bag image"
                                        class="mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            thumbsSlider=""
                            class="swiper product-thumb max-w-[608px] mx-auto"
                        >
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1700471871.png"
                                        alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-indigo-600 slide:border-indigo-600"
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1711514930.png"
                                        alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-indigo-600 slide:border-indigo-600"
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1700471908.png"
                                        alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-indigo-600 slide:border-indigo-600"
                                    />
                                </div>
                                <div class="swiper-slide">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1700471925.png"
                                        alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-indigo-600 slide:border-indigo-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
                        <p class="font-medium text-lg text-indigo-600 mb-4">
                            Travel &nbsp; / &nbsp; Menswear
                        </p>
                        <h2 class="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">
                            {productDetail?.title}
                        </h2>
                        <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                            <h6 class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                ${productDetail?.discountPercentage}
                                {"   "}
                                <span className="text-gray-400 line-through">
                                    ${productDetail?.discountPercentage}
                                </span>
                            </h6>

                            <div class="flex items-center gap-2">
                                <div class="flex items-center gap-1">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_8480_66029)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#F3F4F6"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_8480_66029">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span class="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                                    1624 review
                                </span>
                            </div>
                        </div>
                        <p class="text-gray-500 text-base font-normal mb-8 ">
                            {productDetail?.description}
                        </p>
                        <div class="block w-full">
                            <p class="font-medium text-lg leading-8 text-gray-900 mb-4">
                                Variant type
                            </p>
                            <div class="text">
                                <div class="flex items-center justify-start gap-3 md:gap-6 relative mb-6 ">
                                    <button
                                        data-ui="checked active"
                                        class="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500 :border-emerald-500"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="20" cy="20" r="20" fill="#10B981" />
                                        </svg>
                                    </button>
                                    <button class="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-amber-400 focus-within:border-amber-400">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="20" cy="20" r="20" fill="#FBBF24" />
                                        </svg>
                                    </button>
                                    <button class="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-red-500 focus-within:border-red-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                        >
                                            <circle cx="20" cy="20" r="20" fill="#F43F5E" />
                                        </svg>
                                    </button>
                                    <button class="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-blue-400 focus-within:border-blue-400">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="20" cy="20" r="20" fill="#2563EB" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="block w-full mb-6">
                                    <p class="font-medium text-lg leading-8 text-gray-900 mb-4">
                                        Kg / Ponds
                                    </p>
                                    <div class="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                                        <button class="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                                            800 gm
                                        </button>
                                        <button class="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                                            1000 gm
                                        </button>
                                        <button class="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                                            1500 gm
                                        </button>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    <div class="flex items-center justify-center w-full">
                                        <button onClick={() => handledecrease()} class="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                            <svg
                                                class="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            value={quantity}
                                            class="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                                            placeholder={productDetail?.quantity}
                                        />

                                        <button onClick={() => handleincrease()} class="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                            <svg
                                                class="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke=""
                                                    stroke-opacity="0.2"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    {/*  add to cart btn */}
                                    <Link onClick={() => {
                                        dispatch(addItem(productDetail));
                                    }}>
                                        <button class="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                                            <svg
                                                class="stroke-indigo-600 transition-all duration-500"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                                    stroke=""
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                            Add to cart
                                        </button>
                                    </Link>
                                </div>
                                <div class="flex items-center gap-3">
                                    <button class="group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                                                stroke="#4F46E5"
                                                stroke-width="1.6"
                                                stroke-miterlimit="10"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button class="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                                        <Link to={"/ordersummary"}>
                                            Buy Now
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
