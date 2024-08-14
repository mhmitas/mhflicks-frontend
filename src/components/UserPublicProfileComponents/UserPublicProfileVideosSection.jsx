import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosInstance } from '../../hooks/useAxios';
import { LoadingSkeletonAllVideos } from '../root-layout-components/HomeVideosSection';
import UserPublicProfileVideoCard from '../cards/UserPublicProfileVideoCard';
import { useParams } from 'react-router-dom';

const UserPublicProfileVideosSection = () => {
    const { username } = useParams()
    const editUserName = username.split("@");

    const { data: videos = [], isLoading, refetch, error } = useQuery({
        queryKey: ["all-videos"],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-videos/${editUserName[1]}`)
            // console.log(data.data);
            return data.data
        }
    })

    if (isLoading) {
        return <LoadingSkeletonAllVideos />
    }
    if (error) {
        console.log(error);
    }

    return (
        <div className='mt-2 min-h-screen'>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full h-full'>
                {videos.map((video, index) => <UserPublicProfileVideoCard video={video} key={index} />)}
            </section>
        </div>
    );
};

export default UserPublicProfileVideosSection;