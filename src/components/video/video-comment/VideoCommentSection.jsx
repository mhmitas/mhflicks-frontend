import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import CommentBox from "./VideoCommentBox";
import { axiosInstance } from "../../../hooks/useAxios";
import VideoCommentCard from "./VideoCommentCard";

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
                    <VideoCommentCard
                        key={index}
                        comment={comment}
                        user={user}
                        refetchComments={refetchComments}
                        refetchCommentCount={refetchCommentCount}
                    />
                ))}
            </div>
        </div>
    );
};


export default CommentsSection
