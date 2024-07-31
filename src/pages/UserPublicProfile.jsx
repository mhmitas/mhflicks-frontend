import React from 'react';
import UserPublicProfileHeader from '../components/UserPublicProfileComponents/UserPublicProfileHeader';
import UserPublicProfileVideosSection from '../components/UserPublicProfileComponents/UserPublicProfileVideosSection';
import { useParams } from 'react-router-dom';

const UserPublicProfile = () => {
    const { username } = useParams()

    return (
        <section className='my-container'>
            <UserPublicProfileHeader />
            <div className=''>
                <nav role="tablist" className="tabs tabs-boxed w-max mt-4 sm:mt-6 mb-2">
                    <a role="tab" className="tab tab-1 bg-info">Videos</a>
                    <a role="tab" className="tab tab-1">Posts</a>
                </nav>
                <div className="divider p-0 m-0"></div>
            </div>
            <UserPublicProfileVideosSection username={username} />
        </section>
    );
};

export default UserPublicProfile;