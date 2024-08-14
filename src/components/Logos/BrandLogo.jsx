import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BrandLogo = () => {
    return (
        <Link to="/" className='flex items-center px-1'>
            <span className='p-[6px] font-extrabold text-white bg-rose-500 rounded-full'>
                <FaPlay size={20} />
            </span>
            <span className='text-2xl font-bold text-white pb-[2px] pl-[2px]'>
                MhFlicks
            </span>
        </Link>
    );
};

export default BrandLogo;