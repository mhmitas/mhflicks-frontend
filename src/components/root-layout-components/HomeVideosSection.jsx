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

    if (isLoading) {
        return <LoadingSkeletonAllVideos />
    }
    if (error) {
        console.log(error);
    }

    return (
        <Container>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full h-full flex-1'>
                {videos.map((video, index) => <VideoCard video={video} key={index} />)}
            </section>
        </Container>
    );
};

export default HomeVideosSection;



export function LoadingSkeletonAllVideos() {
    return (
        <section className='my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full h-full flex-1'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </section>
    )
}

function Skeleton() {
    return (
        <div className='flex flex-col'>
            <div className='skeleton bg-base-200 aspect-video rounded-lg'></div>
            <div className='flex gap-3 font-semibold items-center pt-2'>
                {/* channel logo */}
                <div className='rounded-full w-10 h-10 skeleton bg-base-200'></div>
                <div className='flex flex-col gap-1 flex-1 *:rounded-lg'>
                    <div className='skeleton bg-base-200 h-4'></div>
                    <div className='skeleton bg-base-200 h-4 w-1/2'></div>
                </div>
            </div>
        </div>
    )
}