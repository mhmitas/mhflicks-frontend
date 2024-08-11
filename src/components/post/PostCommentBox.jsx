import { TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { axiosInstance } from '../../hooks/useAxios';

const PostCommentBox = ({ user, post, refetchComments }) => {
    const [commentText, setCommentText] = useState("")
    const [commentProcessing, setCommentProcessing] = useState(false)
    const [commentLengthError, setCommentLengthError] = useState("")

    async function handleSubmit() {
        try {
            const info = {
                user: user?._id,
                post: post?._id,
                comment: commentText
            }
            setCommentProcessing(true)
            const { data } = await axiosInstance.post("/user-actions/comment-post", info)
            console.log(data.data);
            refetchComments()
            // refetchCommentCount()
            setCommentText("")
            setCommentProcessing(false)
        } catch (err) {
            console.error("commenting error:", err);
            setCommentProcessing(false)
        }
    }

    return (
        <div className="my-4 gap-2">
            <div className='w-full flex items-start gap-2'>
                <img
                    src={user?.avatar}
                    alt="avatar"
                    className="size-10 rounded-full"
                />
                <TextareaAutosize
                    onChange={(e) => {
                        setCommentText(e.target.value)
                        if (e.target.value?.length > 224) {
                            setCommentLengthError("error")
                        } else setCommentLengthError("");
                    }}
                    value={commentText}
                    minRows={2}
                    autoFocus
                    maxLength={225}
                    className="bg-base-100 border border-base-300 focus:outline-none size-full p-2 rounded-lg mb-2"
                    placeholder="Write a public comment..."
                />
            </div>
            <div className='text-end flex items-center gap-2 justify-end'>
                {commentLengthError && <button className='badge badge-warning'>225 character limit.</button>}
                <button
                    onClick={handleSubmit}
                    className='btn btn-neutral btn-sm rounded text-lg text-info disabled:text-info/50'
                    disabled={!commentText || commentProcessing}
                    title='Post comment'
                >
                    {commentProcessing ? <span className='gpt-loading-dots text-base-content text-sm'>Processing</span> : <IoSend />}
                </button>
            </div>
        </div>
    );
};

export default PostCommentBox;