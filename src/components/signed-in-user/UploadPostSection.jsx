import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UploadPostSection = () => {
    return (
        <div className='bg-base-200 p-8 flex items-center justify-center rounded-lg'>
            <button className='btn btn-secondary text-base'> <FaEdit size={20} />Create Post</button>
        </div>
    );
};

export default UploadPostSection;