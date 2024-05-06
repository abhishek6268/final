import React from 'react'

const OrderHistory = () => {
    return (
        <section class="py-24 relative">
            <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 md:col-span-8 md:pr-8 md:border-r border-gray-200">
                        <div class="flex max-sm:flex-col items-center justify-between mb-3">
                            <h3 class="font-manrope font-bold text-2xl leading-9 text-black">Purchase Item 1</h3>
                            <p class="font-medium text-lg leading-8 text-gray-500">Order # 91256800100</p>
                        </div>
                        <div class="flex max-sm:flex-col items-center justify-between mb-12">
                            <h2 class="font-manrope font-bold text-3xl leading-10 text-black">$150.00</h2>
                            <p class="font-semibold text-xl leading-8 text-indigo-600 cursor-pointer">Details</p>
                        </div>
                        <div class="img-box w-full max-sm:mx-auto mb-12">
                            <img src="https://pagedone.io/asset/uploads/1705403665.png" alt="" class="" />
                        </div>
                        <div class="flex items-center max-sm:flex-col md:justify-end gap-4">
                            <button class="rounded-full px-8 py-3 bg-indigo-600 shadow-sm shadow-transparent text-white font-semibold text-base transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">Buy
                                Again</button>
                            <button class="rounded-full px-8 py-3 bg-white shadow-sm shadow-transparent text-gray-900 border border-gray-300 font-semibold text-base transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-100 hover:border-gray-400">View
                                product</button>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-4 md:pl-8 max-md:mt-7 flex flex-col items-center">
                        <div class="w-full">
                            <div class="flex items-center justify-between mb-5 max-md:max-w-sm max-sm:mx-auto">
                                <h3 class="font-manrope font-bold text-2xl leading-9 text-black">Write a review</h3>
                                <svg class="cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0261 14.2259L25.5755 25.7753M14.0261 25.7753L25.5755 14.2259" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col items-center w-full max-w-sm max-sm:mx-auto">
                                <textarea name="review" id="review" cols="30" rows="10" class="py-3 px-4 mb-16 rounded-2xl border border-gray-300 w-full h-[283px] resize-none font-normal text-base leading-7 placeholder:text-gray-400 text-gray-900 outline-0 max-sm:mx-auto" placeholder="Enter a description..."></textarea>
                                <button class="rounded-full py-3 px-5 text-center bg-indigo-600 text-white font-semibold text-base w-full max-w-sm  shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">Post
                                    review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OrderHistory