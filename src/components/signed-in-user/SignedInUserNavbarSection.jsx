import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa6';

const SignedInUserNavbarSection = () => {
    return (
        <div className='flex items-center gap-2'>
            <button className='btn hidden sm:flex  btn-sm md:btn-md btn-ghost btn-circle'><FaBell size={20} /></button>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="/mahimbabu.jpg" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-3 w-52 p-2 shadow">
                    <li><a href="#">Profile</a></li>
                    <li className='flex sm:hidden'>
                        <a className="justify-between items-center">Notifications<FaBell /></a>
                    </li>
                    <li>
                        <a className="justify-between items-center">Logout<FaSignOutAlt /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SignedInUserNavbarSection;