import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import VideoCard from '../../components/cards/VideoCard';
import { axiosInstance } from '../../hooks/useAxios';
import SignInToContinue from '../../components/common/SignInToContinue';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const SubscriptionsPage = () => {
    const { user, loading: authLoading } = useAuth()

    const { data: videos = [], isLoading, refetch, error } = useQuery({
        queryKey: ["all-subscribed-channels-videos"],
        enabled: () => !!user && !authLoading,
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/subscription-videos/${user?._id}?limit=8`)
            // console.log(data.data);
            return data.data
        }
    })

    if (isLoading || authLoading) {
        return <LoadingSkeletonAllVideos />
    }
    // if user not exits return
    if (!user) {
        return <SignInToContinue Icon={AiOutlinePlayCircle} title='Subscription videos' message={`Videos under subscription cannot be viewed without signing in.`} />
    }
    if (error) {
        console.log(error);
    }

    return (
        <section className='my-container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full h-full flex-1'>
                {videos.map((video, index) => <VideoCard video={video} key={index} />)}
            </div>
        </section>
    );
};

export default SubscriptionsPage;



export function LoadingSkeletonAllVideos() {
    return (
        <section className='my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full h-full flex-1'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </section>
    )
}

function Skeleton() {
    return (
        <div className='flex flex-col'>
            <div className='skeleton bg-base-200 aspect-video rounded-lg'></div>
            <div className='flex gap-3 font-semibold items-center pt-2'>
                {/* channel logo */}
                <div className='rounded-full w-10 h-10 skeleton bg-base-200'></div>
                <div className='flex flex-col gap-1 flex-1 *:rounded-sm'>
                    <div className='skeleton bg-base-200 h-4'></div>
                    <div className='skeleton bg-base-200 h-4 w-1/2'></div>
                </div>
            </div>
        </div>
    )
}