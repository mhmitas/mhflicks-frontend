import React from 'react';
import useAuth from '../../hooks/useAuth';
import SignInToContinue from '../../components/common/SignInToContinue';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import moment from 'moment';

const LikedVideoPage = () => {
    const { user, loading: authLoading } = useAuth()

    const { data: likedVideos = [], isLoading, error } = useQuery({
        queryKey: [`liked-videos-${user?._id}`, user?._id],
        enabled: () => !!user && !authLoading,
        queryFn: async () => {
            const { data } = await axiosInstance(`/users/liked-videos/${user?._id}`)
            // console.log(data.data);
            return data.data
        }
    })

    if (error) {
        console.error(error);
    }

    if (authLoading || isLoading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <SignInToContinue Icon={AiOutlineLike} title='Liked videos' message={`Liked videos isn't viewable when you're signed out.`} />
    }

    return (
        <section className='my-container'>
            <div className='max-w-4xl mx-auto flex flex-col gap-3'>
                {likedVideos.map((video, index) => <VideoCard videoData={video} key={index} />)}
            </div>
        </section>
    );
};

export default LikedVideoPage;



const VideoCard = ({ videoData }) => {
    const { channel, video, likes, createdAt } = videoData;

    const timestamps = moment(new Date(video.createdAt), "YYYYMMDD").fromNow();

    return (
        <Link to={`/play-video/${video?._id}`}>
            <div className='max-w-4xl mx-auto'>
                <div className="grid grid-cols-4 sm:grid-cols-5 hover:bg-base-200 border border-base-300 rounded-md overflow-hidden">
                    <figure className="relative aspect-video col-span-2">
                        <img
                            src={video?.thumbnail}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute rounded-tr bottom-0 left-0 bg-black bg-opacity-75 text-white px-2 py-1 text-xs">
                            25:47
                        </div>
                    </figure>
                    <div className="p-2 sm:p-4 flex-1 col-span-2 sm:col-span-3 leading-5">
                        <h2 className="text-sm sm:text-lg lg:text-xl font-semibold line-clamp-2 sm:line-clamp-3 leading-5 mb-1 sm:mb-2">
                            {video?.title}
                        </h2>
                        <div className="text-xs sm:text-sm md:text-base text-color-gray flex flex-wrap items-center gap-1 leading-3">
                            <span>{channel?.fullName}</span>•
                            <span className='flex items-center gap-1'><AiFillLike className='text-info' /> {likes}</span>•
                            <span>{timestamps}</span></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}