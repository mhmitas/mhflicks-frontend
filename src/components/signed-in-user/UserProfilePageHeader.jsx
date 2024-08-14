import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import UpdateProfileModal from '../modals/UpdateProfileModal';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';
import LoadingSpinner from '../common/LoadingSpinner';
import { viewsFormat } from '../../utils/viewsFormat';

const UserProfileHeader = ({ currentUser }) => {
    const [expandAbout, setExpandAbout] = useState(false)
    const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

    const { data: userData, isLoading: isUserDataLoading, error: userDataError, refetch: refetchUserData } = useQuery({
        queryKey: ['user-profile-data-YouPage'],
        queryFn: async () => {
            const { data } = await axiosInstance(`/users/user-data/${currentUser?._id}`)
            // console.log(data.data);
            return data.data
        }
    })

    if (isUserDataLoading) {
        return <LoadingSpinner />
    }
    if (userDataError) console.error(userDataError);

    return (
        <section>
            <div className='p-3 sm:p-5 md:p-5 border rounded-lg border-base-300 relative bg-base-200 shadow-md space-y-2 sm:space-y-4'>
                <figure className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden aspect-[16/3]'>
                    {userData?.coverImage ? (
                        <img
                            src={userData?.coverImage}
                            alt="Channel Banner"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className='w-full h-full bg-gradient-to-r from-rose-900 to-blue-900'></div>
                    )}
                </figure>
                <div className='flex flex-col sm:flex-row gap-3 md:gap-6 items-center'>
                    <figure className='size-20 md:size-28 rounded-full overflow-hidden border-2 border-info'>
                        <img className='w-full h-full object-cover' src={userData?.avatar} alt={userData?.fullName} />
                    </figure>
                    <div className='flex flex-col items-center sm:items-start flex-1'>
                        <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold mb-1'>{userData?.fullName}</h1>
                        <div className='flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm sm:text-base lg:text-lg text-color-gray leading-3'>
                            <span>@{userData?.username}</span>
                            <span>•</span>
                            <span>{viewsFormat(userData?.stats?.subscribers)} Subscribers</span>
                            <span>•</span>
                            <span>{userData?.stats?.videos} Videos</span>
                        </div>
                    </div>
                </div>
                <h3 className='text-sm md:text-base'>
                    <span className={`${expandAbout || 'line-clamp-1'}`}>
                        {userData?.about || "About: Empty (Write something about you and update your profile)"}
                    </span>
                    <span onClick={() => setExpandAbout(!expandAbout)} className='font-semibold cursor-default'>
                        {expandAbout ? " Show less" : "..Show more"}
                    </span>
                </h3>
                <Tooltip arrow title={<span className='text-sm'>Update Profile</span>}>
                    <button
                        onClick={() => setShowUpdateProfileModal(true)}
                        className='btn btn-sm btn-square btn-neutral absolute bottom-2 right-2 text-base'
                    >
                        <FaEdit />
                    </button>
                </Tooltip>
            </div>

            {showUpdateProfileModal && <UpdateProfileModal userData={userData} setShowModal={setShowUpdateProfileModal} refetch={refetchUserData} />}
        </section>
    );
};

export default UserProfileHeader;

// https://res.cloudinary.com/dquqygs9h/image/upload/v1720966362/irrgqxga2vryx1gcff78.jpg
