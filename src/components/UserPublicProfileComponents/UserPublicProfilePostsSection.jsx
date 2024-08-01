import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const UserPublicProfilePostsSection = () => {
    const location = useLocation()
    const { username } = useParams()
    const [currentTab, setCurrentTab] = useState(null)

    useEffect(() => {
        if (location.pathname === `/profile/${username}`) {
            setCurrentTab("videos")
        }
    }, [location])

    return (
        <div className='min-h-screen'>
            <h3> UserPublicProfile posts</h3>
        </div>
    );
};

export default UserPublicProfilePostsSection;