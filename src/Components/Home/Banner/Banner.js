import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.barikoi.com/static/media/landing-image.309a7cba.webp")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Hello there ,</h1>
                        <h1 className="mb-5 text-5xl font-bold">WellCome To <span className='text-black'>Bari</span><span className='text-green-500'>Koi</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;