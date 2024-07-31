import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import CommentBox from "./VideoCommentBox";
import { axiosInstance } from "../../../hooks/useAxios";
import moment from "moment";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const CommentsSection = ({ videoId }) => {
    const { user } = useAuth()

    // fetch all comments
    const { data: comments = [], isLoading: commentsLoading, error: commentsError, refetch: refetchComments } = useQuery({
        queryKey: [`total-comments-${videoId}`],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/video-comments/${videoId}`)
            // console.log(data.data);
            return data.data
        }
    })
    // fetch comment count
    const { data: totalComment = 0, isLoading: commentCountLoading, error: commentCountError, refetch: refetchCommentCount } = useQuery({
        queryKey: [`total-comment-count-${videoId}`],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/video-comment-count/${videoId}`)
            // console.log(data.data);
            return data.data.totalComment
        }
    })

    if (commentsLoading) {
        return <span>Loading...</span>
    }
    if (commentsError) console.error(commentsError);
    if (commentCountError) console.error(commentCountError);

    return (
        <div className="space-y-4">
            <CommentBox videoId={videoId} user={user} totalComment={totalComment} refetchComments={refetchComments} refetchCommentCount={refetchCommentCount} />
            <div className="space-y-2">
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        comment={comment}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
};


export default CommentsSection


const Comment = ({ comment, user: currentUser }) => {
    const { comment: commentText, user: author, createdAt } = comment;

    const timestamp = moment(new Date(createdAt), "YYYYMMDD").fromNow();

    return (
        <div className="flex space-x-3 py-2 sm:py-4 border-b border-base-200 relative">
            <div className="avatar">
                <div className="size-7 sm:size-10 rounded-full">
                    <img src={author?.avatar} alt="User Avatar" />
                </div>
            </div>
            <div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">{author?.fullName}</span>
                    <span className="text-sm text-color-gray">{timestamp}</span>
                </div>
                <p className='text-sm line-clamp-3'>{commentText}</p>
            </div>
            {currentUser?._id === author?.userId &&
                <div className="dropdown dropdown-left absolute right-2 top-2">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-ghost font-bold text-lg rounded m-1">⁝</div>
                    <ul tabIndex={0} className={`dropdown-content bg-base-200 rounded z-[1] p-2 shadow menu w-max`}>
                        <li><button><FaEdit /> Update</button></li>
                        <li><button><FaTrashAlt /> Delete</button></li>
                    </ul>
                </div>
            }
        </div>
    );
};