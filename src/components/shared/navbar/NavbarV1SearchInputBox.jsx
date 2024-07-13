import React from 'react';
import { FaSearch } from 'react-icons/fa';


const NavbarV1SearchInputBox = () => {
    return (
        <div className='flex items-center w-full duration-300'>
            <div className="hidden md:flex lg:max-w-2xl max-w-xl w-full px-8 mx-auto">
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered border-r-0 rounded-l-full input-sm py-5 px-6 border border-[#3f4555] text-base flex-1" />
                <button title='Search' className="bg-neutral rounded-r-full px-6 tooltip tooltip-bottom border border-[#3f4555]" data-tip='Search'><FaSearch size={17} /></button>
            </div>
            <button className='btn btn-circle btn-ghost md:hidden'><FaSearch size={17} /></button>
        </div>
    );
};

export default NavbarV1SearchInputBox;