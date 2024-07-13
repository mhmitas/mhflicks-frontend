import React from 'react';
import BrandLogo from '../../Logos/BrandLogo';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";
import SignedInUserNavbarSection from '../../signed-in-user/SignedInUserNavbarSection';
import { Link } from 'react-router-dom';


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
            <div className='flex items-center gap-2'>
                <SignedInUserNavbarSection />
                <Link to="/sign-in"><button className='btn btn-info btn-outline btn-sm'>Sign In</button></Link>
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