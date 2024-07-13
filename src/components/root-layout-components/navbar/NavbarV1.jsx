import React from 'react';
import BrandLogo from '../../Logos/BrandLogo';
import { FaBell, FaSearch } from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";


const NavbarV1 = () => {
    return (
        <div className='flex items-center justify-between p-4 max-h-16 fixed inset-x-0 bg-base-100 z-20'>
            <div className='flex items-center gap-2'>
                <button className='btn btn-ghost btn-circle'><AiOutlineBars size={25} /></button>
                <BrandLogo />
            </div>
            <div>
                <NavbarV1SearchInputBox />
            </div>
            <div className='flex items-center'>
                <button className='btn btn-ghost btn-circle'><FaBell size={20} /></button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarV1;



function NavbarV1SearchInputBox() {
    return (
        <div className="join">
            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered join-item rounded-l-full input-sm py-5 px-6 border border-[#3f4555] text-base" />
            <button title='Search' className="bg-neutral join-item rounded-r-full px-6 tooltip tooltip-bottom border border-[#3f4555]" data-tip='Search'><FaSearch size={17} /></button>
        </div>
    )
}