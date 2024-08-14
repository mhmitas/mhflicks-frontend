import React from 'react';
import PostCommentBox from './PostCommentBox';
import PostCommentCard from './PostCommentCard';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';

const PostCommentSection = ({ cardData }) => {
    const { user, post, statsRefetch } = cardData
    // fetch all comments
    const { data: comments = [], isLoading: commentsLoading, error: commentsError, refetch: refetchComments } = useQuery({
        queryKey: [`total-comments-${post?._id}`],
        queryFn: async () => {
            const { data } = await axiosInstance(`/posts/post-comments/${post?._id}`)
            // console.log(data.data);
            return data.data
        }
    })

    if (commentsError) console.error(commentsError);

    return (
        <div className='relative'>
            <PostCommentBox user={user} post={post} refetchComments={refetchComments} />
            {commentsLoading && <span>Loading...</span>}
            <div className='flex flex-col gap-4'>
                {comments?.map(comment => <PostCommentCard key={comment?._id} comment={comment} user={user} refetchComments={refetchComments} />)}
            </div>
        </div>
    );
};

export default PostCommentSection;