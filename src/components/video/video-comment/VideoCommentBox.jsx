import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../hooks/useAxios";
import askForSignInModal from "../../modals/ask/AskForSignInModal";

const CommentBox = ({ videoId, user, totalComment, refetchComments, refetchCommentCount }) => {
    const navigate = useNavigate()
    const [commentProcessing, setCommentProcessing] = useState(false)
    const [comment, setComment] = useState("")

    async function handleComment() {
        try {
            if (!user) {
                const askSignIn = await askForSignInModal("comment on video")
                if (askSignIn) {
                    return navigate("/sign-in")
                } else { return }
            }
            const info = {
                user: user?._id,
                video: videoId,
                comment
            }
            setCommentProcessing(true)
            const { data } = await axiosInstance.post("/user-actions/comment-video", info)
            console.log(data.data);
            refetchComments()
            refetchCommentCount()
            setComment("")
            setCommentProcessing(false)
        } catch (err) {
            console.error("commenting error:", err);
            setComment("")
            setCommentProcessing(false)
        }
    }

    // console.log(totalComment);

    return (
        <div className='mt-8'>
            <h3 className='sm:text-lg font-bold mb-2'>{totalComment} Comments </h3>
            <div className="flex flex-col space-y-4 rounded-md">
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    className="textarea textarea-bordered w-full"
                    rows="2"
                    value={comment}
                    placeholder="Add a public comment..."
                ></textarea>
                <button onClick={handleComment} disabled={!comment && true} className="btn btn-secondary btn-sm rounded-full self-end">
                    {commentProcessing ? <span className="loading loading-spinner text-info"></span> : "Comment"}
                </button>
            </div>
        </div>
    );
};

export default CommentBox

