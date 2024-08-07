import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { axiosInstance } from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import askForSignInModal from '../modals/ask/AskForSignInModal';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import askModal from '../modals/ask/askModal';
import LoadingSpinner from '../common/LoadingSpinner';

const UserPublicProfileHeader = ({ username, channelId }) => {
    const [expandAbout, setExpandAbout] = useState(false)
    const navigate = useNavigate()
    const [subscribed, setSubscribed] = useState(false)
    const { user: currentUser, loading: authLoading } = useAuth();

    const { data: profileData = {}, isLoading, error, refetch } = useQuery({
        queryKey: [`user-public-profile-${username}`, channelId, currentUser],
        queryFn: async () => {
            const { data } = await axiosInstance(`/users/public-profile/${channelId}/?currentUser=${currentUser ? currentUser?._id : ""}`)
            console.log(data.data);
            setSubscribed(data.data?.isSubscribed)
            return data.data
        }
    })
    const { avatar, coverImage, fullName, stats, isSubscribed, _id, username: dbUsername, about } = profileData;

    async function handleSubscribe() {
        if (!currentUser) {
            const askForSignIn = await askForSignInModal("to subscribe")
            if (askForSignIn) {
                return navigate("/sign-in")
            } else {
                return
            }
        }
        if (isSubscribed) {
            const ask = await askModal("Do you want to unsubscribe?")
            if (!ask) {
                return
            }
            setSubscribed(false)
        } else {
            setSubscribed(true)
        }
        try {
            const info = {
                channel: profileData?._id,
                subscriber: currentUser?._id
            }
            const { data } = await axiosInstance.post(`/user-actions/subscribe`, info)
            console.log(data);
            refetch()
        } catch (err) {
            console.error(err);
            refetch()
        }
    }

    if (isLoading || authLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        console.error(error);
    }

    return (
        <header className="space-y-4 sm:space-y-6">
            <figure className='aspect-[16/3] flex items-center rounded-lg overflow-hidden'>
                {coverImage ?
                    <img
                        src={coverImage}
                        alt="Channel Banner"
                        className="w-full rounded-lg"
                    /> :
                    <div className='w-full h-full bg-gradient-to-r from-rose-900 to-blue-900'></div>
                }
            </figure>
            <div>
                <div className="flex gap-4">
                    <figure>
                        <img
                            src={avatar}
                            alt={fullName}
                            className="rounded-full border-2 border-base-300 size-20 lg:size-24"
                        />
                    </figure>
                    <div className='space-y-1 mb-2 flex-1'>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">{fullName}</h1>
                            <div className='flex flex-wrap gap-2 text-color-gray'>
                                <span className="">@{dbUsername}</span>▪
                                <span className="">{stats?.subscribers} subscribers</span>▪
                                <span className="">{stats?.videos} videos</span>
                                {/* <span className="">▪9 posts</span> */}
                            </div>
                        </div>
                        <SubscribeButton subscribed={subscribed} handleSubscribe={handleSubscribe} />
                    </div>
                </div>
                {about &&
                    <p>
                        <span className={`${expandAbout || 'line-clamp-1'}`}>{about}</span><span onClick={() => setExpandAbout(!expandAbout)} className='link text-base font-normal'>{expandAbout ? " Show less" : "..Show more"}</span>
                    </p>
                }
            </div>
        </header>
    );
};

export default UserPublicProfileHeader;

function SubscribeButton({ subscribed, handleSubscribe }) {
    return (
        <Tooltip title={<span className='text-sm'>{subscribed ? "Click to unsubscribe" : "Subscribe"}</span>}>
            <button onClick={handleSubscribe} className={`btn btn-sm ${!subscribed ? "btn-primary" : "btn-neutral"} rounded-full`}>{subscribed ? "Subscribed" : "Subscribe"}</button>
        </Tooltip>
    )
}