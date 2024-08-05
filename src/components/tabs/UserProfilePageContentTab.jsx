import React from 'react';

const UserProfilePageContentTab = () => {
    return (
        <div role='tablist' className='tabs tabs-boxed font-semibold w-max m-auto border border-base-300'>
            <button role='tab' className='tab bg-info'>Videos</button>
            <button role='tab' className='tab'>Posts</button>
        </div>
    );
};

export default UserProfilePageContentTab;