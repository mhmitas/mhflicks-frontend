import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import UpdateProfileModal from '../modals/UpdateProfileModal';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';
import LoadingSpinner from '../common/LoadingSpinner';

const UserProfileHeader = () => {
    const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false)

    const { data: user = {}, isLoading, refetch } = useQuery({
        queryKey: ["user-profile-data-you"],
        queryFn: async () => {
            const { data } = await axiosInstance("/users/current-user")
            return data.data
        }
    })

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <section>
            <div className='p-6 border rounded-lg border-base-300 relative bg-base-200 shadow-md'>
                <figure className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden aspect-[16/3]'>
                    {user?.coverImage ? (
                        <img
                            src={user?.coverImage}
                            alt="Channel Banner"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className='w-full h-full bg-gradient-to-r from-rose-900 to-blue-900'></div>
                    )}
                </figure>
                <div className='flex flex-col sm:flex-row gap-3 md:gap-6 items-center mt-4'>
                    <figure className='size-24 md:size-28 rounded-full overflow-hidden border-2 border-info'>
                        <img className='w-full h-full object-cover' src={user?.avatar} alt={user?.fullName} />
                    </figure>
                    <div className='flex flex-col items-center sm:items-start flex-1'>
                        <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold mb-1'>{user?.fullName}</h1>
                        <div className='flex flex-wrap items-center justify-center sm:justify-start gap-2 lg:text-lg text-color-gray'>
                            <span>@mahimbabu</span>
                            <span>•</span>
                            <span>21M Subscribers</span>
                            <span>•</span>
                            <span>121 Videos</span>
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

            {showUpdateProfileModal && <UpdateProfileModal user={user} setShowModal={setShowUpdateProfileModal} refetch={refetch} />}
        </section>
    );
};

export default UserProfileHeader;

// https://res.cloudinary.com/dquqygs9h/image/upload/v1720966362/irrgqxga2vryx1gcff78.jpg
