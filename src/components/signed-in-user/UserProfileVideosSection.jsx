import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosInstance } from '../../hooks/useAxios';
import UserProfileVideosSectionCard from '../cards/UserProfileVideosSectionCard';

const UserProfileVideosSection = ({ user }) => {

    const { data: videos = [], isLoading, error, refetch: refetchVideos } = useQuery({
        queryKey: ['my-videos', user?._id],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-my-videos/${user?.username}`)
            // console.log(data.data);
            return data.data
        }
    })

    if (error) {
        console.error(error);
    }

    return (
        <section className='min-h-screen relative'>
            {isLoading && <h3 className='absolute z-10 bg-black w-full p-1 text-center bg-opacity-25'>Loading...</h3>}
            <div className='max-w-4xl mx-auto flex flex-col gap-3'>
                {videos.map(video => <UserProfileVideosSectionCard key={video?._id} video={video} refetchVideos={refetchVideos} />)}
            </div>
        </section>
    );
};

export default UserProfileVideosSection;