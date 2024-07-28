import React from 'react';

const UserProfilePageContentTab = () => {
    return (
        <div role='tablist' className='tabs tabs-boxed font-semibold w-max m-auto'>
            <button role='tab' className='tab tab-active'>Home</button>
            <button role='tab' className='tab'>Posts</button>
        </div>
    );
};

export default UserProfilePageContentTab;