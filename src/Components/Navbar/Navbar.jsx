import React, { useState } from 'react';
import Link from './Link';
import { CircleX, MenuIcon } from 'lucide-react';

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
        <nav className='mt-5 flex justify-between mx-8'>

            <span className='flex ' onClick={() => setOpen(!open)}>
                {
                    open ? <CircleX className='md:hidden' /> : <MenuIcon className='md:hidden'></MenuIcon>
                }
                <ul className={`md:hidden gap-5 duration-1000 rounded p-5 absolute bg-white text-black
                   ${open ? "top-8" : '-top-40'}
                    `}>
                    {links}
                </ul>
                <h3 className='ml-4'>My navbar</h3>
            </span>


            <ul className='md:flex hidden ml-10 '>
                {links}
            </ul>
            <button>Sign in </button>
        </nav>
    );
};

export default Navbar;