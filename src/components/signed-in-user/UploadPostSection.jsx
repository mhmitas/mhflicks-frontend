import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import CreatePostModal from '../modals/CreatePostModal';

const UploadPostSection = ({ user }) => {
    const [showModal, setShowModal] = useState(false)


    return (
        <div className='bg-base-200 p-6 sm:p-8 flex items-center justify-center rounded-lg border border-base-300'>
            <button onClick={() => setShowModal(true)} className='btn btn-sm sm:btn-md btn-secondary sm:text-base'> <FaEdit size={20} />Create Post</button>
            {showModal && <CreatePostModal setShowModal={setShowModal} user={user} />}
        </div>
    );
};

export default UploadPostSection;


/* 
{openEmojiPicker &&
    <div className={`fixed bottom-4 left-4 hidden md:flex`}>

        <button onClick={() => setOpenEmojiPicker(false)} className='absolute btn btn-sm btn-circle -top-2 -right-3 z-10 btn-neutral text-lg'><GoX /></button>
        <EmojiPicker onEmojiClick={handleEmojiChange} className='shadow shadow-info w-10' theme='dark' />
    </div>
}
<button
    className="size-10 bg-base-300 text-xl text-warning rounded-full items-center justify-center shadow-md cursor-pointer hidden md:flex"
>
    <FaSmile />
</button>
*/