import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../hooks/useAxios';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const { id } = useParams();

    const { data: video = {}, isLoading } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-video/${id}`)
            console.log(data.data);
            return data.data
        }
    })

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <section className='my-container'>
            <div>

                {/* <video controls color='#191919' src={video.video.secure_url} className='w-full rounded-lg'></video> */}
                <div className="divider"></div>
                <ReactPlayer
                    url="https://res.cloudinary.com/dquqygs9h/video/upload/sp_auto/v1722094091/v9nmk7xvf06tvphecdqd.m3u8"
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
            <div className='my-2 space-y-1'>
                <h1 className='text-2xl font-semibold'>{video?.title}</h1>
                <h1 className=''>{video?.description}</h1>
            </div>
        </section>
    );
};

export default VideoPlayer;


{/* <iframe
    src={`https://player.cloudinary.com/embed/?cloud_name=dquqygs9h&public_id=${video?.video?.public_id}&player[showJumpControls]=true`}
    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
    allowFullScreen
    className='w-full aspect-video rounded-lg'
></iframe> */}