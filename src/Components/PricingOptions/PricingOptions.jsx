import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)
    console.log(pricingData);

    return (
        <div className='my-20 container mx-auto p-5'>
            <h2 className='md:text-6xl text-5xl font-bold mb-10 text-center container mx-auto'>Get our Membership</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    pricingData.map((pricing) => <PricingCard
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;