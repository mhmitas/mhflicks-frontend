import React from 'react';
import PostCommentBox from './PostCommentBox';
import PostCommentCard from './PostCommentCard';

const PostCommentSection = ({ user }) => {
    return (
        <div>
            <PostCommentBox user={user} />
            <div className='flex flex-col gap-4'>
                <PostCommentCard />
                <PostCommentCard />
                <PostCommentCard />
            </div>
        </div>
    );
};

export default PostCommentSection;