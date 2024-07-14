import React, { useEffect, useState } from 'react';
import UserProfileHeader from '../../components/signed-in-user/UserProfilePageHeader';
import axios from 'axios';
import UserVideosSlider from '../../components/signed-in-user/UserVideosSlider';

const UserProfilePage = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios("/videos.json")
            .then(res => {
                setVideos(res.data)
            })
    }, [])

    return (
        <section className='my-container *:mb-10'>
            <UserProfileHeader />
            <UserVideosSlider title={"Watch History"} videos={videos} containerId="watch-history-slider" />
            <UserVideosSlider title={"Liked Videos"} videos={videos?.slice(4)} containerId="liked-video-slider" />
        </section>
    );
};

export default UserProfilePage;

