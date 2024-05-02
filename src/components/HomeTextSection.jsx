import React from 'react'

const HomeTextSection = () => {
    const hometextheading = `loafs you are sure to love`;
    const homesubheading = ` Freshly baked is the assorted variety of breads we bring for you to savour. Prepared with the ﬁnest ingredients come our wholesome sliced & loafs of bread, including Sour Dough, Whole-wheat Bread, Atta, Garlic, Multigrain & Brain Bread.`;

    return (
        <div className="w-full h-64 bg-yellow-50 text-primary flex justify-around items-center relative">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fef08a" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,138.7C672,149,768,235,864,266.7C960,299,1056,277,1152,261.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-around mt-6 mobile:gap-2 gap-4">
                {/* home text main heading */}
                <h2 className='text-5xl mobile:text-2xl capitalize'>{hometextheading}</h2>
                <p className='w-1/2 mobile:w-full text-center mobile:text-sm mobile:px-10'>{homesubheading}</p>
                {/* explore btn */}
                <div className="p-2 mb-6">
                    <button className="button">
                        <span className="ml-2">Explore Now</span>
                        {/* <span className=""><img src={rightarrow} alt="" /></span> */}
                    </button>
                </div>
            </div>
            <div className="absolute inset-0 z-0 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320 " ><path fill="#fef08a" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,138.7C672,149,768,235,864,266.7C960,299,1056,277,1152,261.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>

    )
}

export default HomeTextSection