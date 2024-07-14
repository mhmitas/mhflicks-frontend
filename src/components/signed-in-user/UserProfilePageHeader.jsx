import React from 'react';

const UserProfileHeader = () => {
    return (
        <div className='p-6 border rounded-md border-base-200'>
            <div className='flex gap-4 items-center'>
                <figure className='w-36 h-3w-36'>
                    <img className='w-full rounded-full' src="https://res.cloudinary.com/dquqygs9h/image/upload/c_crop,g_auto,h_800,w_800/qp3swzpehwjytppdqu9h.jpg" alt="" />
                </figure>
                <div>
                    <h1 className='text-4xl font-semibold'>Mahim Babu</h1>
                    <div className='flex gap-2 text-lg text-gray-200'>
                        <span>@mahimbabu</span>•
                        <span>21M Subscribers</span>•
                        <span>121 Videos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileHeader;