import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoCard from "../cards/VideoCard"
import Container from '../container/Container';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';

const HomeVideosSection = () => {

    const { data: videos = [], isLoading, refetch, error } = useQuery({
        queryKey: ["all-videos"],
        queryFn: async () => {
            const { data } = await axiosInstance("/videos/get-videos")
            // console.log(data.data);
            return data.data
        }
    })

    return (
        <Container>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full h-full flex-1'>
                {videos.map((video, index) => <VideoCard video={video} key={index} />)}
            </section>
        </Container>
    );
};

export default HomeVideosSection;