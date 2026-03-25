import { Dumbbell } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left side */}
                <div className="flex gap-3">
                    <Dumbbell size={35} /> 
                    <h2 className="text-3xl font-bold">
                        Beast Fitness
                    </h2>
                </div>
                

                {/* Middle links */}
                <ul className="flex gap-6 text-sm">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">About</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                </ul>

                {/* Right side */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Ayon Banerjee. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;