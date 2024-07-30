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
            <div className='p-6 border rounded-md border-base-200 relative'>
                <div className='flex flex-col sm:flex-row gap-4 items-center'>
                    <figure className='size-36'>
                        <img className='rounded-full w-full h-auto' src={user?.avatar} alt="" />
                    </figure>
                    <div className='flex flex-col items-center sm:items-start'>
                        <h1 className='text-4xl font-semibold mb-1'>{user?.fullName}</h1>
                        <div className='flex flex-wrap items-center justify-center gap-2 text-lg text-gray-200'>
                            <span>@mahimbabu</span>
                            <span className=''>•</span>
                            <span>21M Subscribers</span>
                            <span className=''>•</span>
                            <span>121 Videos</span>
                        </div>
                    </div>
                </div>
                <Tooltip arrow title={<span className='text-base'>Update Profile</span>}>
                    <button onClick={() => setShowUpdateProfileModal(true)} className='btn btn-xs btn-neutral absolute bottom-2 right-2'><FaEdit /></button>
                </Tooltip>
            </div>
            {showUpdateProfileModal && <UpdateProfileModal user={user} setShowModal={setShowUpdateProfileModal} refetch={refetch} />}
        </section>
    );
};

export default UserProfileHeader;

// https://res.cloudinary.com/dquqygs9h/image/upload/v1720966362/irrgqxga2vryx1gcff78.jpg
