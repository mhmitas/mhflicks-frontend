import React, { useState } from 'react';
import PostCard from '../../components/cards/PostCard';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';
import LoadingSkeletonPost from '../../components/LoadingSkelitons/LoadingSkelitonPost';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import CreatePostModal from '../../components/modals/CreatePostModal';

const Posts = () => {
    const { user, loading: authLoading } = useAuth()
    const [showModal, setShowModal] = useState(false)
    const { data: posts = [], isLoading, refetch, error } = useQuery({
        queryKey: ["all-posts"],
        queryFn: async () => {
            const { data } = await axiosInstance("/posts/all-posts")
            // console.log(data.data);
            return data.data
        }
    })

    if (error) {
        console.log(error);
    }

    if (authLoading) {
        return <LoadingSpinner />
    }


    return (
        <section className='my-container w-full min-h-screen bg-slate-950 py-8 rounded-lg'>
            {isLoading && <LoadingSkeletonAllPosts />}
            <div className='max-w-xl md:max-w-[650px] mx-auto flex flex-col gap-6'>
                {user &&
                    <div className="flex items-center space-x-4 bg-base-100 p-4 rounded-lg shadow-md border border-base-300">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={user?.avatar} alt="Avatar" />
                            </div>
                        </div>
                        <input
                            onClick={() => setShowModal(true)}
                            type="text"
                            placeholder={`What's on your mind, ${user && user?.fullName?.split(" ")[0]}?`}
                            className="input input-bordered w-full bg-gradient-to-r
                            from-rose-900 to-blue-900 cursor-pointer border-none"
                            readOnly
                        />
                    </div>
                }
                {posts.map((post, index) => <PostCard post={post} key={index} user={user} authLoading={authLoading} />)}
            </div>
            {showModal && <CreatePostModal user={user} setShowModal={setShowModal} refetch={refetch} />}
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
