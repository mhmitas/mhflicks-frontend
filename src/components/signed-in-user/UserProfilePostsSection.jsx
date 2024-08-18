import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosInstance } from '../../hooks/useAxios';
import LoadingSkeletonPost from '../LoadingSkelitons/LoadingSkelitonPost';
import useAuth from '../../hooks/useAuth';
import UserProfilePostCard from '../cards/UserProfilePostCard';

const UserProfilePostsSection = () => {
    const { user } = useAuth()

    const { data: posts = [], error: postsError, isLoading: postsLoading } = useQuery({
        queryKey: [`user-posts-${user?._id}`],
        queryFn: async () => {
            const { data } = await axiosInstance(`/posts/get-user-posts/${user?._id}`)
            console.log(data?.data);
            return data?.data
        }
    })

    if (postsError) console.error(postsError);
    if (postsLoading) {
        <div className='max-w-2xl mx-auto flex flex-col gap-6 mb-4'>
            <LoadingSkeletonPost />
            <LoadingSkeletonPost />
            <LoadingSkeletonPost />
        </div>
    }

    return (
        <div>
            <div className='max-w-xl md:max-w-[650px] mx-auto flex flex-col gap-6'>
                {posts.map(post => <UserProfilePostCard key={post?._id} post={post} />)}
            </div>
        </div>
    );
};

export default UserProfilePostsSection;