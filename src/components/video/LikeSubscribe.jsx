import React, { useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { viewsFormat } from '../../utils/viewsFormat';
import { axiosInstance } from '../../hooks/useAxios';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import askModal from '../modals/ask/askModal';
import askForSignInModal from '../modals/ask/AskForSignInModal';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const LikeSubscribe = ({ id }) => {
    const navigate = useNavigate()
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLiked, setIsLiked] = useState(null)
    const { user, loading: authLoading } = useAuth()


    // fetch video data
    const { data: videoData = {}, isLoading: isVideoDataLoading, error: videoDataError, refetch: refetchVideoData } = useQuery({
        queryKey: [`video-data-${id}`, user],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-video-page-data/${id}`)
            // console.log(data.data);
            return data.data
        }
    })
    // fetch like and subscribe object
    const { data: likeAndSubscribeObject = {}, isLoading: LSLoading, error: LSError, refetch: refetchLikeAndSubscribe } = useQuery({
        queryKey: [`like-and-subscribe-obj-${id}`, user],
        enabled: () => !!user && !authLoading,
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-like-and-subscribe/${id}?userId=${user?._id}`)
            const result = data.data;
            // console.log(result);
            setIsSubscribed(!!result.subscribeObj)
            if (result?.likeObj) {
                if (result.likeObj.like) setIsLiked(true)
                if (result.likeObj.false) setIsLiked(false)
            } else { setIsLiked(null) }
            return result
        }
    })

    let { channel, subscriber, likeCount } = videoData;

    async function handleLike(like) {
        if (!user) {
            const askForSignIn = await askForSignInModal("to like this video")
            if (askForSignIn) {
                return navigate("/sign-in")
            } else {
                return
            }
        }
        if (typeof like !== 'boolean') return;
        if (like === true) {
            if (isLiked === true) {
                setIsLiked(null)
            } else {
                setIsLiked(true)
            }
        } else if (like === false) {
            if (isLiked === false) {
                setIsLiked(null)
            } else {
                setIsLiked(false)
            }
        }
        const info = {
            user: user?._id,
            video: videoData?._id,
            like
        }
        try {
            const { data } = await axiosInstance.post(`/user-actions/like-video`, info)
            console.log(data.data);
            refetchLikeAndSubscribe()
            refetchVideoData()
        } catch (err) {
            console.error("video like error:", err);
            refetchLikeAndSubscribe()
            refetchVideoData()
        }
    }
    // handle subscribe
    async function handleSubscribe() {
        if (!user) {
            const askForSignIn = await askForSignInModal("to subscribe")
            if (askForSignIn) {
                return navigate("/sign-in")
            } else {
                return
            }
        }
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
                    {/* channel info */}
                    <div className='flex items-center justify-between gap-2 sm:gap-3' >
                        {/* channel avatar */}
                        <Link to={`/profile/@${channel?.channelUsername}`}><figure><img src={channel?.channelAvatar} alt="" className='size-10 sm:size-12 rounded-full' /></figure></Link>
                        <div className=''>
                            {/* channel name */}
                            <Link to={`/profile/@${channel?.channelUsername}`}><h1 className='line-clamp-1 text-lg md:text-xl font-semibold'>{channel?.channelName}</h1></Link>
                            {/* channel's subscribers */}
                            <h1 className='text-color-gray text-xm sm:text-sm font-semibold'>{subscriber} subscriber{subscriber > 0 && "s"}</h1>
                        </div>
                    </div>
                    <div className=''>
                        <Tooltip arrow title={<span className='text-sm'>{isSubscribed ? "Click to unsubscribe" : "Subscribe"}</span>}>
                            <button
                                onClick={handleSubscribe}
                                className={
                                    `btn btn-sm md:btn-md md:text-lg ${isSubscribed ?
                                        "btn-neutral" :
                                        "btn-primary"
                                    } rounded-full`
                                }>
                                {isSubscribed ?
                                    "Subscribed" :
                                    "Subscribe"
                                }
                            </button>
                        </Tooltip>
                    </div>
                </div>
                {/* like buttons */}
                <div className='join sm:justify-end'>
                    <Tooltip arrow title={<span className='text-sm'>Like this video</span>}>
                        <button onClick={() => handleLike(true)} className='btn btn-sm md:btn-md join-item rounded-l-full'>
                            <span className={`${isLiked === true && "text-info"}`}><AiFillLike size={20} /></span>
                            {viewsFormat(likeCount)}
                        </button>
                    </Tooltip>
                    <span className='join-item bg-base-200 flex items-center'>|</span>
                    <Tooltip arrow title={<span className='text-sm'>Unlike this video</span>}>
                        <button onClick={() => handleLike(false)} className='btn btn-sm md:btn-md join-item rounded-r-full'>
                            <span className={`${isLiked === false && "text-info"}`}><AiFillDislike size={20} /></span>
                        </button>
                    </Tooltip>
                </div>
            </div>
            <DescriptionSection videoData={videoData} />
        </>
    );
};

export default LikeSubscribe;


function DescriptionSection({ videoData }) {
    const [collapseDescription, setCollapseDescription] = useState(true)
    const uploaded = moment(new Date(videoData.createdAt), "YYYYMMDD").fromNow();

    return (
        <div className='bg-base-200 p-3 rounded-lg'>
            <p className='font-semibold'>{uploaded}</p>
            <h1 onClick={(e) => { setCollapseDescription(!collapseDescription) }} className={`text-sm sm:text-base cursor-default ${collapseDescription ? "line-clamp-5 md:line-clamp-[8] lg:line-clamp-[10]" : ""}`}>{videoData?.description}</h1>
        </div>
    )
}