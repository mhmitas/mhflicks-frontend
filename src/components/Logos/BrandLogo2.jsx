import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo2 = () => {
    return (
        <Link to="/">
            <span className='bg-gradient-to-r from-rose-500 via-blue-600 to-blue-600 py-1 px-2 rounded-md text-xl sm:text-2xl font-bold'>MhFlicks</span>
        </Link>
    );
};

export default BrandLogo2;