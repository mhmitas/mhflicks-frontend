import React from 'react';
import { GoX } from 'react-icons/go';

const CloseModalButton = ({ setShowModal }) => {
    return <button
        onClick={() => setShowModal(false)}
        className='btn btn-sm btn-circle btn-ghost absolute top-1 right-2'
    >
        <GoX size={20} />
    </button>
};

export default CloseModalButton;