import React, { useState } from 'react';
import UserProfileHeader from '../../components/signed-in-user/UserProfilePageHeader';
import useAuth from '../../hooks/useAuth';
import UploadVideoSection from '../../components/signed-in-user/UploadVideoSection';
import UploadPostSection from '../../components/signed-in-user/UploadPostSection';
import UserProfilePageContentTab from '../../components/tabs/UserProfilePageContentTab';
import UserProfileVideosSection from '../../components/signed-in-user/UserProfileVideosSection';
import UserProfilePostsSection from '../../components/signed-in-user/UserProfilePostsSection';

const UserProfilePage = () => {
    const { user } = useAuth()
    const [currentTab, setCurrentTab] = useState('videos')

    console.log(user);

    return (
        <section className='my-container *:mb-10'>
            <UserProfileHeader currentUser={user} />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <UploadVideoSection />
                <UploadPostSection />
            </div>
            <div>
                <UserProfilePageContentTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
                <div className="divider my-2 p-0"></div>
                {currentTab === "videos" && <UserProfileVideosSection user={user} />}
                {currentTab === "posts" && <UserProfilePostsSection />}
            </div>
        </section>
    );
};

export default UserProfilePage;

{/* <>
    <UserVideosSlider title={"Watch History"} videos={videos} containerId="watch-history-slider" />
    <UserVideosSlider title={"Liked Videos"} videos={videos?.slice(4)} containerId="liked-video-slider" />
</> */}