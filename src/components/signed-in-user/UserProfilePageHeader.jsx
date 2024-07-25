import React from 'react';

const UserProfileHeader = () => {
    return (
        <div className='p-6 border rounded-md border-base-200'>
            <div className='flex flex-col sm:flex-row gap-4 items-center'>
                <figure className='w-36 h-3w-36'>
                    <img className='w-full rounded-full' src="/mahimbabu.jpg" alt="" />
                </figure>
                <div className='flex flex-col items-center sm:items-start'>
                    <h1 className='text-4xl font-semibold mb-1'>Mahim Babu</h1>
                    <div className='flex flex-wrap items-center justify-center gap-2 text-lg text-gray-200'>
                        <span>@mahimbabu</span>
                        <span className=''>•</span>
                        <span>21M Subscribers</span>
                        <span className=''>•</span>
                        <span>121 Videos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileHeader;

// https://res.cloudinary.com/dquqygs9h/image/upload/v1720966362/irrgqxga2vryx1gcff78.jpg