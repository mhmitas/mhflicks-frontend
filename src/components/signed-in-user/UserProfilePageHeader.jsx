import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import UpdateProfileModal from '../modals/UpdateProfileModal';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';
import LoadingSpinner from '../common/LoadingSpinner';
import { viewsFormat } from '../../utils/viewsFormat';

const UserProfileHeader = ({ user }) => {
    const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

    const { data: userData, isLoading: isUserDataLoading, error: userDataError, refetch: refetchUserData } = useQuery({
        queryKey: ['user-profile-data-YouPage'],
        queryFn: async () => {
            const { data } = await axiosInstance(`/users/user-data/${user?._id}`)
            console.log(data.data);
            return data.data
        }
    })

    if (isUserDataLoading) {
        return <LoadingSpinner />
    }
    if (userDataError) console.error(userDataError);


    return (
        <section>
            <div className='p-6 border rounded-lg border-base-300 relative bg-base-200 shadow-md'>
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
                <div className='flex flex-col sm:flex-row gap-3 md:gap-6 items-center mt-4'>
                    <figure className='size-24 md:size-28 rounded-full overflow-hidden border-2 border-info'>
                        <img className='w-full h-full object-cover' src={userData?.avatar} alt={userData?.fullName} />
                    </figure>
                    <div className='flex flex-col items-center sm:items-start flex-1'>
                        <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold mb-1'>{userData?.fullName}</h1>
                        <div className='flex flex-wrap items-center justify-center sm:justify-start gap-2 lg:text-lg text-color-gray'>
                            <span>@{userData?.username}</span>
                            <span>•</span>
                            <span>{viewsFormat(userData?.stats?.subscribers)} Subscribers</span>
                            <span>•</span>
                            <span>{userData?.stats?.videos} Videos</span>
                        </div>
                    </div>
                </div>
                <Tooltip arrow title={<span className='text-base'>Update Profile</span>}>
                    <button
                        onClick={() => setShowUpdateProfileModal(true)}
                        className='btn btn-xs btn-neutral absolute bottom-4 right-4'
                    >
                        <FaEdit />
                    </button>
                </Tooltip>
            </div>

            {showUpdateProfileModal && <UpdateProfileModal user={user} setShowModal={setShowUpdateProfileModal} refetch={refetchUserData} />}
        </section>
    );
};

export default UserProfileHeader;

// https://res.cloudinary.com/dquqygs9h/image/upload/v1720966362/irrgqxga2vryx1gcff78.jpg
