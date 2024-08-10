import React from 'react';
import CloseModalButton from '../common/CloseModalButton';
import { TextareaAutosize, Tooltip } from '@mui/material';
import { GoHeartFill } from 'react-icons/go';
import { MdBookmark } from 'react-icons/md';
import { FcComments } from 'react-icons/fc';
import { IoSend } from "react-icons/io5";


const PostCommentsModal = ({ setShowModal, post, user }) => {
    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setShowModal(false)
        }
    }

    return (
        <div onClick={handleOverlayClick} className='modal modal-open'>
            <div className='modal-box h-full max-w-2xl w-full'>
                <PostCardForDetailModal post={post} user={user} />
                <div>
                    <CommentSection user={user} />
                </div>
                <CloseModalButton setShowModal={setShowModal} />
            </div>
        </div>
    );
};

export default PostCommentsModal;


function PostCardForDetailModal({ post, user }) {
    const { title, content, channel, image } = post;

    return (
        <div className="space-y-3 md:space-y-4">
            <div className='flex items-center justify-between gap2'>
                <div className='flex items-center gap-2'>
                    <figure className='size-9 sm:size-11 rounded-full overflow-hidden'><img src="/default-avatar.jpg" alt="" /></figure>
                    <div className='*:leading-5'>
                        <h1 title={channel?.fullName} className='text-lg sm:text-xl font-semibold line-clamp-1'>{channel?.fullName}</h1>
                        <div className='text-color-gray flex flex-wrap gap-1 text-xs sm:text-sm md:text-base [400px]:text-lg leading-5'>
                            <h1>{channel?.username}</h1>▪
                            <h1>165k subscribers</h1>
                        </div>
                    </div>
                </div>
                <div className={`space-x-1 ${user?.username === channel?.username && "hidden"}`}>
                    <button className='btn btn-primary rounded-full btn-sm'>Subscribe</button>
                </div>
            </div>
            <div className=''>
                <h1 className={`text-base sm:text-lg font-semibold line-clamp-3`}>{title}</h1>
                <h1 className={`${image && "line-clamp-4 text-sm sm:text-base"}`}>{content}</h1>
            </div>
            {image &&
                <div className="flex items-center justify-center w-full overflow-hidden rounded-md">
                    <img className="rounded-md w-auto" src={image?.secure_url} alt="Image" />
                </div>
            }
            <div className='flex items-center justify-end gap-3 cursor-default border-t border-b border-base-300 py-1'>
                <Tooltip arrow title="Comment">
                    <div className="flex items-center ">
                        <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-primary hover:bg-accent/10 text-lg sm:text-xl'><FcComments /></button>
                        <span className="font-semibold">535</span>
                    </div>
                </Tooltip>
                <Tooltip arrow title="Like">
                    <div className="flex items-center ">
                        <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-primary hover:bg-primary/10 text-lg sm:text-xl'><GoHeartFill /></button>
                        <span className="font-semibold">535</span>
                    </div>
                </Tooltip>
                <Tooltip arrow title="Save">
                    <div className="flex items-center ">
                        <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-info hover:bg-info/10 text-lg sm:text-xl'><MdBookmark /></button>
                        <span className="font-semibold">535</span>
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}


function CommentSection({ user }) {
    return (
        <div className="w-full mx-auto rounded-lg shadow-md">
            <PostCommentForm user={user} />
            {/* Comment 1 */}
            <div className='flex flex-col gap-4'>
                <PostCommentCard />
                <PostCommentCard />
                <PostCommentCard />
            </div>
            {/* Comment Input */}
        </div>
    );
}

function PostCommentForm({ user }) {
    return (
        <div className="flex items-center my-4 gap-2">
            <img
                src={user?.avatar}
                alt="avatar"
                className="size-10 rounded-full"
            />
            <div className='w-full relative'>
                <TextareaAutosize
                    minRows={1}
                    autoFocus
                    className="bg-base-100 border border-base-300 focus:outline-none size-full p-2 rounded-lg pb-6"
                    placeholder="Write a public comment..."
                />
                <button className='absolute bottom-[6px] right-[1px] py-1 px-2 bg-base-100 rounded-sm active:scale-105 hover:bg-neutral text-info'><IoSend /></button>
            </div>
        </div>
    )
}

function PostCommentCard({ }) {
    return (
        <div className="flex space-x-3 p-3 sm:py-4 bg-base-200 relative rounded-lg">
            <div className="avatar">
                <div className="size-7 sm:size-10 rounded-full">
                    <img src="/default-avatar.jpg" alt="User Avatar" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">Lorem, ipsum.</span>
                    <span className="text-sm text-color-gray">12 january</span>
                </div>
                <p className='text-sm line-clamp-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti tempora sunt omnis, possimus praesentium et culpa officiis quia ab quos nisi sint aspernatur iure sit optio tempore perferendis, obcaecati nostrum.</p>
            </div>
        </div>
    )
}