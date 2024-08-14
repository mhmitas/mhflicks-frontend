import moment from 'moment';
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { axiosInstance } from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import askModal from '../modals/ask/askModal';


function PostCommentCard({ comment, user, refetchComments }) {
    const { comment: commentTexts, createdAt, commentator } = comment;
    const [showCommentUpdateBox, setShowCommentUpdateBox] = useState(false)

    async function handleUpdateComment(e) {
        e.preventDefault()
        if (!user) return;
        try {
            const { data } = await axiosInstance.patch(`/user-actions/update-post-comment/${comment?._id}`, {
                updatedComment: e.target.comment.value
            })
            console.log(data.data);
            if (data?.success) {
                toast("Comment Updated")
            }
            refetchComments()
            setShowCommentUpdateBox(false)
        } catch (error) {
            console.error("comment update error:", error);
        }
    }

    async function handleDelete() {
        const ask = await askModal("Are you sure?", "You want to remove this comment")
        if (!ask) return
        try {
            const { data } = await axiosInstance.delete(`user-actions/delete-post-comment/${comment?._id}`)
            console.log(data.data);
            if (data.data?.deletedCount > 0) {
                toast("Comment removed")
                refetchComments()
            }
        } catch (err) {
            console.error(err);

        }
    }

    const timestamps = moment(new Date(createdAt), "YYYYMMDD").fromNow();

    return (
        <div className="flex space-x-3 p-3 sm:py-4 bg-base-200 relative rounded-lg">
            <div className="avatar">
                <div className="size-7 sm:size-10 rounded-full">
                    <img src={commentator?.avatar} alt="User image" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">{commentator?.fullName}</span>
                    <span className="text-sm text-color-gray">{timestamps}</span>
                </div>
                <p className='text-sm line-clamp-3'>{commentTexts}</p>
                {showCommentUpdateBox &&
                    <form onSubmit={handleUpdateComment} className="w-full mt-2">
                        <textarea defaultValue={commentTexts} name="comment" maxLength={225} className="textarea textarea-bordered w-full"></textarea>
                        <div className="flex gap-1 p-2 pb-0 justify-end">
                            <button onClick={() => setShowCommentUpdateBox(false)} type="button" className="btn btn-sm btn-neutral rounded-full">Cancel</button>
                            <button type="submit" className="btn btn-sm btn-neutral rounded-full">Update</button>
                        </div>
                    </form>
                }
            </div>
            {/* take actions of comment by user */}
            {user?.username === commentator?.username &&
                <div className="dropdown dropdown-left absolute right-2 top-2">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-ghost font-bold text-lg rounded m-1">⁝</div>
                    <ul tabIndex={0} className={`dropdown-content bg-base-200 shadow shadow-base-300 rounded z-[1] p-2 menu w-max`}>
                        <li><button onClick={() => setShowCommentUpdateBox(true)}><FaEdit /> Update</button></li>
                        <li><button onClick={handleDelete}><FaTrashAlt /> Delete</button></li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default PostCommentCard;