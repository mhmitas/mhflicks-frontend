import React from 'react';
import PostCard from '../../components/cards/PostCard';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';
import LoadingSkeletonPost from '../../components/LoadingSkelitons/LoadingSkelitonPost';

const Posts = () => {

    const { data: posts = [], isLoading, refetch, error } = useQuery({
        queryKey: ["all-posts"],
        queryFn: async () => {
            const { data } = await axiosInstance("/posts/all-posts")
            console.log(data.data);
            return data.data
        }
    })

    if (error) {
        console.log(error);
    }


    return (
        <section className='my-container w-full min-h-screen bg-slate-950 py-8 rounded-lg'>
            {isLoading && <LoadingSkeletonAllPosts />}
            <div className='max-w-xl md:max-w-2xl mx-auto flex flex-col gap-6'>
                {posts.map((post, index) => <PostCard post={post} key={index} />)}
            </div>
        </section>
    );
};

export default Posts;


function LoadingSkeletonAllPosts() {
    return (
        <div className='max-w-2xl mx-auto flex flex-col gap-6 mb-4'>
            <LoadingSkeletonPost />
            <LoadingSkeletonPost />
            <LoadingSkeletonPost />
        </div>
    )
}
