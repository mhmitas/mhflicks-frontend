import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoCard from "../cards/VideoCard"
import Container from '../container/Container';

const HomeVideosSection = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios("/videos.json")
            .then(res => {
                setVideos(res.data)
                // console.log(res.data);
            })
    }, [])

    return (
        <Container>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto w-full h-full flex-1'>
                {videos.map((video, index) => <VideoCard video={video} key={index} />)}
            </section>
        </Container>
    );
};

export default HomeVideosSection;