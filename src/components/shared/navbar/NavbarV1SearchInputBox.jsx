import React from 'react';
import { FaSearch } from 'react-icons/fa';


const NavbarV1SearchInputBox = () => {
    return (
        <div className="join max-w-xl flex">
            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered join-item rounded-l-full input-sm py-5 px-6 border border-[#3f4555] text-base flex-1" />
            <button title='Search' className="bg-neutral join-item rounded-r-full px-6 tooltip tooltip-bottom border border-[#3f4555]" data-tip='Search'><FaSearch size={17} /></button>
        </div>
    );
};

export default NavbarV1SearchInputBox;