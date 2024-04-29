import React from 'react'

const HomeTextSection = () => {
    const hometextheading = `loafs you are sure to love`;
    const homesubheading = ` Freshly baked is the assorted variety of breads we bring for you to savour. Prepared with the ﬁnest ingredients come our wholesome sliced & loafs of bread, including Sour Dough, Whole-wheat Bread, Atta, Garlic, Multigrain & Brain Bread.`;
    
    return (
        <div className="w-full h-64  bg-yellow-100 text-primary flex justify-around items-center mt-10">
            <div className="flex flex-col items-center justify-around mt-6 mobile:gap-2 gap-4 ">
                {/* home text main heading  */}
                <h2 className='text-5xl mobile:text-2xl capitalize'>{hometextheading}</h2>
                <p className='w-1/2 mobile:w-full text-center mobile:text-sm mobile:px-10'>{homesubheading}</p>
                {/* explre btn */}
                <div className="p-2 mb-6">
                    <button class="button">
                        <span className="ml-2">Explore Now</span>
                        
                        {/* <span className=""><img src={rightarrow} alt="" /></span> */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeTextSection