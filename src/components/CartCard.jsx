import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeItem, setItemQuantity, setItemQuantityHigh, setItemQuantityLow } from '../redux/reducers/cartSlice';

const CartCard = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleincrease = () => {
        setQuantity(quantity + 1)
        dispatch(setItemQuantityHigh(item))
    }
    const handledecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(setItemQuantityLow(item))
        }
    };
    const handleremove = () => { dispatch(removeItem(item)) }
    return (
        <div className="flex items-start max-sm:flex-col gap-8 py-6">
            <div className="h-52 shrink-0">
                <img src="https://cdn.dummyjson.com/product-images/1/1.jpg" className="w-full h-full object-contain rounded-md" />
            </div>
            <div className="flex items-start gap-6 max-md:flex-col w-full">
                <div>
                    <h3 className="text-xl font-extrabold text-[#333] mb-6">{item.title}</h3>
                    <div>
                        <h6 className="text-md text-gray-500">Size: <strong className="ml-2">7.5</strong></h6>
                        <h6 className="text-md text-gray-500 mt-2">Color: <strong className="ml-2">Black</strong></h6>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-6">
                        <button type="button" className="font-semibold text-gray-500 text-sm flex items-center gap-2 shrink-0" onClick={() => {
                            handleremove(item)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-current inline" viewBox="0 0 24 24">
                                <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                            </svg>
                            Remove
                        </button>
                        <button type="button" className="font-semibold text-gray-500 text-sm flex items-center gap-2 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-current inline" viewBox="0 0 64 64">
                                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                            </svg>
                            Move to wish list
                        </button>
                    </div>
                </div>
                <div className="md:ml-auto md:text-right">
                    <div className="flex">
                        <button type="button" className="bg-transparent py-2 font-semibold text-[#333]" onClick={handledecrease}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                            </svg>
                        </button>
                        <button type="button" className="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md border">
                            {quantity}
                        </button>
                        <button type="button" className="bg-transparent py-2 font-semibold text-[#333] " onClick={handleincrease}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-lg font-bold text-[#333]"><strike className="text-gray-500 mr-2 font-medium">$22.5</strike></h4>
                        <h4 className="text-lg font-bold text-[#333] mt-2">$18.5</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard