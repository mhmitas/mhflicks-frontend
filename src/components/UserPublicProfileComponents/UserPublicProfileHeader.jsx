import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosInstance } from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';

const UserPublicProfileHeader = ({ username, channelId }) => {
    const { user: currentUser, loading: authLoading } = useAuth();

    const { data: profileData = {}, isLoading, error } = useQuery({
        queryKey: [`user-public-profile-${username}`, channelId],
        queryFn: async () => {
            const { data } = await axiosInstance(`/users/public-profile/${channelId}${currentUser && `/?currentUser=${currentUser?._id}`}`)
            console.log(data.data);
            return data.data
        }
    })
    const { avatar, coverImage, fullName, stats, isSubscribed, _id, username: dbUsername } = profileData;


    if (isLoading || authLoading) {
        return <span>Loading...</span>
    }

    if (error) {
        console.error(error);
    }

    return (
        <header className="space-y-4 sm:space-y-6">
            <figure className='aspect-[16/2] flex items-center rounded-lg overflow-hidden'>
                {coverImage ?
                    <img
                        src={coverImage}
                        alt="Channel Banner"
                        className="w-full rounded-lg"
                    /> :
                    <div className='w-full h-full bg-gradient-to-r from-rose-900 to-blue-900'></div>
                }
            </figure>
            <div className="flex gap-4">
                <figure>
                    <img
                        src={avatar}
                        alt={fullName}
                        className="rounded-full border-2 border-base-200 size-20 lg:size-24"
                    />
                </figure>
                <div className='space-y-3 flex-1'>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">{fullName}</h1>
                        <div className='flex flex-wrap gap-2 text-color-gray'>
                            <span className="">@{dbUsername}</span>▪
                            <span className="">{stats?.subscribers} subscribers</span>▪
                            <span className="">{stats?.videos} videos</span>
                            {/* <span className="">▪9 posts</span> */}
                        </div>
                        <p className="line-clamp-2">
                            It's not what you look at that matters, it's what you see. - David Thoreau
                        </p>
                    </div>
                    <SubscribeButton />
                </div>
            </div>
        </header>
    );
};

export default UserPublicProfileHeader;

function SubscribeButton() {
    return (
        <button className="btn btn-sm md:btn-md btn-primary rounded-full md:text-lg">Subscribe</button>
    )
}