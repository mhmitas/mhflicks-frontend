import { TextareaAutosize } from '@mui/material';
import React from 'react';
import { IoSend } from 'react-icons/io5';

const PostCommentBox = ({ user }) => {
    return (
        <div className="my-4 gap-2">
            <div className='w-full flex items-start gap-2'>
                <img
                    src={user?.avatar}
                    alt="avatar"
                    className="size-10 rounded-full"
                />
                <TextareaAutosize
                    minRows={2}
                    autoFocus
                    className="bg-base-100 border border-base-300 focus:outline-none size-full p-2 rounded-lg mb-2"
                    placeholder="Write a public comment..."
                />
            </div>
            <div className='text-end'>
                <button className='btn btn-neutral btn-sm rounded text-lg text-info'><IoSend /></button>
            </div>
        </div>
    );
};

export default PostCommentBox;