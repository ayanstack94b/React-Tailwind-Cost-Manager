import React from 'react';
import hero from '../../../public/hero.jpg'
const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${hero})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Train Hard. Stay Strong.
                    </h1>
                    <p className="mb-5">
                        Build your body and mind with Beast Fitness.
                    </p>
                    <button className='btn  bg-gray-400 text-black font-bold duration-500 md:py-1 md:px-8 hover:bg-gray-700 hover:text-white'>Join Now </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;