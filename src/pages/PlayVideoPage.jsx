import React from 'react';
import VideoPlayer from './VideoPlayer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../hooks/useAxios';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import CommentsSection from '../components/VideoCommentBox';
import moment from 'moment';

const PlayVideoPage = () => {
    const { id } = useParams();

    // fetch video data
    const { data: video = {}, isLoading, error } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-video/${id}`)
            // console.log(data.data);
            return data.data
        }
    })

    const uploaded = moment(new Date(video.createdAt), "YYYYMMDD").fromNow();

    if (isLoading) {
        return <div className="my-container flex w-full flex-col gap-4">
            <div className="skeleton rounded-lg aspect-video w-full"></div>
            <div className="skeleton h-6 w-1/2"></div>
            <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                </div>
            </div>
            <div className="skeleton h-10 rounded-lg w-full"></div>
        </div>
    }
    if (error) {
        console.error(error);
    }

    return (
        <section className="my-container max-w-4xl mx-auto pt-3 pb-10">
            <VideoPlayer videoUrl={video?.video?.playback_url} />
            <div className='space-y-3 my-4'>
                <div>
                    <h1 className='text-2xl font-semibold'>{video?.title}</h1>
                </div>
                <div className='flex items-center justify-between pb-1'>
                    <div className='flex items-center justify-between w-1/2' >
                        <div className='flex items-center gap-3'>
                            <figure><img src="/default-avatar.jpg" alt="" className='w-14 rounded-full' /></figure>
                            <div className=''>
                                <h1 className='line-clamp-1 text-2xl font-semibold'>Mahim Babu</h1>
                                <h1 className='text-color-gray'>21M subscriber</h1>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <button className='btn btn-primary text-lg rounded-full'>Subscribe</button>
                        </div>
                    </div>
                    <div className='join'>
                        <button className='btn join-item text-warning rounded-l-full'><AiFillLike size={20} /></button>
                        <span className='join-item bg-base-200 flex items-center'>|</span>
                        <button className='btn join-item rounded-r-full'><AiFillDislike size={20} /></button>
                    </div>
                </div>
                <div className='bg-base-200 p-3 rounded-lg'>
                    <p className='font-semibold'>{uploaded}</p>
                    <h1 className=''>{video?.description}</h1>
                </div>
            </div>
            <CommentsSection />
        </section>
    );
};

export default PlayVideoPage;