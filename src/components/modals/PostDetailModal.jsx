import React from 'react';
import PostDetailModalPostCard from '../post/PostDetailModalPostCard';
import PostCommentSection from '../post/PostCommentSection';
import { GoX } from 'react-icons/go';

const PostDetailModal = ({ setShowModal, post, user, cardData }) => {

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setShowModal(false)
        }
    }

    return (
        <div onClick={handleOverlayClick} className='modal modal-open z-30'>
            <div className='modal-box h-full max-w-2xl w-full pt-0'>
                <div className='flex justify-between pt-2'>
                    <h3 className='text-xl font-semibold line-clamp-1 flex-1'>{post?.channel?.fullName}'s post</h3>
                    <button onClick={() => setShowModal(false)} className='btn btn-ghost btn-sm btn-circle text-xl'><GoX /></button>
                </div>
                <div className='divider p-0 m-0'></div>
                <PostDetailModalPostCard cardData={cardData} />
                <PostCommentSection cardData={cardData} />
            </div>
        </div>
    );
};

export default PostDetailModal;