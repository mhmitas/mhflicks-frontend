import React, { useEffect, useState } from 'react';
import axios from "axios"
import VideoCard from '../../components/cards/VideoCard';
import Container from '../../components/container/Container';

const Home = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios("/videos.json")
            .then(res => {
                setVideos(res.data)
                console.log(res.data);
            })
    }, [])

    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl gap-4 mx-auto'>
                {videos.map((video, index) => <VideoCard video={video} key={index} />)}
            </div>
        </Container>
    );
};

export default Home;

