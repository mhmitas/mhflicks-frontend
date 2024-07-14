import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
    return (
        <Link to="/" className='flex items-center px-1'>
            <span className='py-1 sm:py-[6px] px-2 sm:px-3 font-extrabold text-white bg-rose-500 rounded-lg'>
                <FaPlay size={15} />
            </span>
            <span className='text-xl sm:text-2xl font-bold text-white pb-[2px] pl-[2px]'>
                MhFlicks
            </span>
        </Link>
    );
};

export default BrandLogo;