import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({ feature }) => {
    return (
        <div>
            <p className="my-3 flex ml-3 gap-2"><CircleCheckBig></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default PricingFeatures;