import React from 'react';

const UserProfilePageContentTab = ({ currentTab, setCurrentTab }) => {
    return (
        <div role='tablist' className='tabs tabs-boxed font-semibold w-max m-auto border border-base-300'>
            <button onClick={() => setCurrentTab("videos")} role='tab' className={`tab ${currentTab === "videos" && 'bg-info'}`}>Videos</button>
            <button onClick={() => setCurrentTab("posts")} role='tab' className={`tab ${currentTab === "posts" && 'bg-info'}`}>Posts</button>
        </div>
    );
};

export default UserProfilePageContentTab;