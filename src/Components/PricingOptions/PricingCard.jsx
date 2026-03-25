import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing
    console.log(pricing);
    return (
        <div className='border bg-gray-400 text-black rounded-2xl p-4'>
            {/* // card header */}
            <div className="text-white">
                <h1 className="text-7xl">{name}</h1>
                <h4 className="text-3xl">${price}</h4>
            </div>
            {/* // card body */}
            <div className="bg-gray-700 text-white p-4 rounded-2xl mt-10">
                <p className="text-2xl font-bold">{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures
                        key={index}
                        feature={feature}
                    ></PricingFeatures>)
                }
            </div>
        </div>

    );
};

export default PricingCard;