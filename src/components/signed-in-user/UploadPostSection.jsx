import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UploadPostSection = () => {
    return (
        <div className='bg-base-200 p-6 sm:p-8 flex items-center justify-center rounded-lg border border-base-300'>
            <button className='btn btn-sm sm:btn-md btn-secondary sm:text-base'> <FaEdit size={20} />Create Post</button>
        </div>
    );
};

export default UploadPostSection;