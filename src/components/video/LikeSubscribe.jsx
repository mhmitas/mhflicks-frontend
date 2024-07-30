import React, { useEffect, useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { viewsFormat } from '../../utils/viewsFormat';
import { axiosInstance } from '../../hooks/useAxios';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import askModal from '../modals/ask/askModal';

const LikeSubscribe = ({ id }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { user, loading: authLoading } = useAuth()


    // fetch video data
    const { data: videoData = {}, isLoading: isVideoDataLoading, error: videoDataError, refetch: refetchVideoData } = useQuery({
        queryKey: [`video-data-${id}`, id],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-video-page-data/${id}`)
            // console.log(data.data);
            return data.data
        }
    })
    // fetch like and subscribe object
    const { data: likeAndSubscribeObject = {}, isLoading: LSLoading, error: LSError, refetch: refetchLikeAndSubscribe } = useQuery({
        queryKey: [`like-and-subscribe-obj-${id}`],
        enabled: () => !!user && !authLoading,
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-like-and-subscribe/${id}?userId=${user?._id}`)
            // console.log(data.data);
            setIsSubscribed(!!data.data.subscribeObj)
            return data.data
        }
    })

    const { channel, subscriber, likeCount } = videoData;

    async function handleLike() {

    }
    // handle subscribe
    async function handleSubscribe() {
        if (isSubscribed) {
            const ask = await askModal("Do you want to unsubscribe")
            if (!ask) return
            setIsSubscribed(false)
        } else {
            setIsSubscribed(true)
        }
        try {
            const info = {
                channel: videoData?.channel?.channelId,
                subscriber: user?._id
            }
            const { data } = await axiosInstance.post(`/user-actions/subscribe`, info)
            console.log(data);
            refetchLikeAndSubscribe()
            refetchVideoData()
        } catch (err) {
            console.error(err);
            refetchLikeAndSubscribe()
            refetchVideoData()
        }
    }

    if (isVideoDataLoading) {
        return <span>Loading...</span>
    }
    if (videoDataError) console.error(videoDataError);
    if (LSError) console.error(LSError);

    return (
        <>
            <div className='flex flex-col sm:flex-row gap-2 sm:items-center justify-between pb-1'>
                <div className='flex items-center justify-between sm:justify-start sm:gap-10 flex-1'>
                    <div className='flex items-center justify-between gap-2 sm:gap-3' >
                        <figure><img src={channel?.channelAvatar} alt="" className='w-10 sm:w-12 rounded-full' /></figure>
                        <div className=''>
                            <h1 className='line-clamp-1 text-lg sm:text-xl md:text-2xl font-semibold'>{channel?.channelName}</h1>
                            <h1 className='text-color-gray text-sm sm:text-base font-semibold'>{subscriber} Subscriber</h1>
                        </div>
                    </div>
                    <div className=''>
                        <button
                            onClick={handleSubscribe}
                            className={
                                `btn btn-sm md:btn-md sm:text-lg ${isSubscribed ?
                                    "btn-neutral" :
                                    "btn-primary"
                                } rounded-full`
                            }>
                            {isSubscribed ?
                                "Subscribed" :
                                "Subscribe"
                            }
                        </button>
                    </div>
                </div>
                <div className='join sm:justify-end'>
                    <button className='btn btn-sm md:btn-md join-item rounded-l-full'>
                        <span className='text-warning '><AiFillLike size={20} /></span>
                        {viewsFormat(likeCount)}
                    </button>
                    <span className='join-item bg-base-200 flex items-center'>|</span>
                    <button className='btn btn-sm md:btn-md join-item rounded-r-full'><AiFillDislike size={20} /></button>
                </div>
            </div>
            <DescriptionSection videoData={videoData} />
        </>
    );
};

export default LikeSubscribe;


function DescriptionSection({ videoData }) {

    const uploaded = moment(new Date(videoData.createdAt), "YYYYMMDD").fromNow();

    return (
        <div className='bg-base-200 p-3 rounded-lg'>
            <p className='font-semibold'>{uploaded}</p>
            <h1 className='text-sm sm:text-base'>{videoData?.description}</h1>
        </div>
    )
}