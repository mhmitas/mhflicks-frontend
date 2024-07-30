import React, { useEffect, useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { viewsFormat } from '../../utils/viewsFormat';
import { axiosInstance } from '../../hooks/useAxios';

const LikeSubscribe = ({ videoData, user, userActionsData, refetch2, refetch3 }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { channel, subscriber, likeCount } = videoData;


    async function handleLike() {

    }
    // handle subscribe
    async function handleSubscribe() {
        try {
            const info = {
                channel: videoData?.channel?.channelId,
                subscriber: user?._id
            }
            const { data } = await axiosInstance.post(`/user-actions/subscribe`, info)
            console.log(data);
            // refetch3()
        } catch (err) {
            console.error(err);
        }
    }

    return (
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
    );
};

export default LikeSubscribe;