import React, { useState } from 'react';
import Link from './Link';
import { CircleX, Dumbbell, MenuIcon } from 'lucide-react';

const navData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Projects",
        path: "/projects"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navData.map((route) => <Link key={route.id} route={route} ></Link>)

    return (
        <nav className=' flex justify-between  bg-gray-900 p-5 w-full'>

            <span className='flex ' onClick={() => setOpen(!open)}>
                {
                    open ? <CircleX className='md:hidden' /> : <MenuIcon className='md:hidden'></MenuIcon>
                }
                <ul className={`md:hidden gap-5 duration-1000 rounded p-5 absolute bg-gray-400 text-white font-bold
                   ${open ? "top-12" : '-top-40'}
                    `}>
                    {links}
                </ul>
                <Dumbbell size={35} />
                <h3 className='ml-4 font-bold text-xl md:text-3xl'>Beast fitness</h3>
            </span>


            <ul className='md:flex hidden font-bold text-xl ml-10 '>
                {links}
            </ul>
            <button className='btn  bg-gray-400 text-black font-bold duration-500 md:py-1 md:px-8 hover:bg-gray-700 hover:text-white'>Sign in </button>
        </nav>
    );
};

export default Navbar;