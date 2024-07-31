import moment from "moment";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { axiosInstance } from "../../../hooks/useAxios";
import toast from "react-hot-toast";
import askModal from "../../modals/ask/askModal";

const VideoCommentCard = ({ comment, user: currentUser, refetchComments, refetchCommentCount }) => {
    const { comment: commentText, user: author, createdAt } = comment;
    const [collapseComment, setCollapseComment] = useState(true)
    const [showCommentUpdateBox, setShowCommentUpdateBox] = useState(false)
    const [updateCommentText, setUpdateCommentText] = useState(commentText)

    const timestamp = moment(new Date(createdAt), "YYYYMMDD").fromNow();

    async function handleUpdateComment() {
        if (!currentUser) return;
        try {
            const { data } = await axiosInstance.patch(`/user-actions/update-video-comment/${comment?._id}`, {
                updatedComment: updateCommentText
            })
            console.log(data.data);
            if (data?.success) {
                toast("Comment Updated")
            }
            refetchComments()
            setShowCommentUpdateBox(false)
        } catch (error) {
            console.error("comment update error:", error);
            setShowCommentUpdateBox(false)
        }
    }
    async function handleDeleteComment() {
        try {
            if (!currentUser) return;
            const ask = await askModal("Are you sure? You want to delete this comment")
            if (!ask) return;
            const { data } = await axiosInstance.delete(`/user-actions/delete-video-comment/${comment?._id}`)
            console.log(data.data);
            if (data?.data?.deletedCount > 0) {
                toast("Comment Removed")
            }
            refetchComments()
            setShowCommentUpdateBox(false)
        } catch (err) {
            console.error(err);
            setShowCommentUpdateBox(false)
        }
    }

    return (
        <div className="flex space-x-3 py-2 sm:py-4 border-b border-base-200 relative">
            <div className="avatar">
                <div className="size-7 sm:size-10 rounded-full">
                    <img src={author?.avatar} alt="User Avatar" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">{author?.fullName}</span>
                    <span className="text-sm text-color-gray">{timestamp}</span>
                </div>
                <p
                    title="Click to expand"
                    className={`text-sm cursor-default ${collapseComment && "line-clamp-3"}`}
                    onClick={() => setCollapseComment(!collapseComment)}
                >{commentText}
                </p>
                {/* update comment form */}
                {showCommentUpdateBox &&
                    <section className="w-full mt-2">
                        <textarea onChange={(e) => setUpdateCommentText(e.target.value)} value={updateCommentText} className="textarea textarea-bordered w-full" name="commentText"></textarea>
                        <div className="flex gap-1 p-2 pb-0 justify-end">
                            <button onClick={() => setShowCommentUpdateBox(false)} type="button" className="btn btn-sm rounded-full">Cancel</button>
                            <button onClick={handleUpdateComment} disabled={!updateCommentText} className="btn btn-sm rounded-full">Update</button>
                        </div>
                    </section>
                }
            </div>
            {/* take actions of comment by user */}
            {currentUser?._id === author?.userId &&
                <div className="dropdown dropdown-left absolute right-2 top-2">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-ghost font-bold text-lg rounded m-1">⁝</div>
                    <ul tabIndex={0} className={`dropdown-content bg-base-200 rounded z-[1] p-2 shadow menu w-max`}>
                        <li><button onClick={() => setShowCommentUpdateBox(true)}><FaEdit /> Update</button></li>
                        <li><button onClick={handleDeleteComment}><FaTrashAlt /> Delete</button></li>
                    </ul>
                </div>
            }
        </div>
    );
};


export default VideoCommentCard