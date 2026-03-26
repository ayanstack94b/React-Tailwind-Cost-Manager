import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing
    console.log(pricing);
    return (
        <div className='group flex flex-col border bg-gray-400 text-black rounded-2xl p-4
                    shadow-md transition-all duration-300
                    hover:shadow-2xl hover:-translate-y-2'>
            {/* card header */}
            <div className="text-white">
                <h1 className="text-5xl font-bold">{name}</h1>
                <h4 className="text-2xl pt-3">${price}</h4>
            </div>
            {/* card body */}
            <div className="bg-gray-700 flex-1 text-white p-4 rounded-2xl mt-10
                      transition-all duration-300
                      group-hover:bg-gray-800">
                <p className="text-2xl font-bold">{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures
                        key={index}
                        feature={feature}
                    ></PricingFeatures>)
                }
            </div>
            <button className="btn w-full mt-8 transition-all duration-300
                         hover:bg-black hover:text-white">Subscribe</button>
        </div>

    );
};

export default PricingCard;