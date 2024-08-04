import React, { useEffect, useState } from 'react';
import PostCard from '../../components/cards/PostCard';
import axios from 'axios';
import { MdInfo } from 'react-icons/md';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios('/posts.json')
            .then(res => setPosts(res.data))
    }, [])

    return (
        <div className='flex flex-col justify-center items-center text-center min-h-[60vh]'>
            <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-info'><MdInfo /></div>
            <div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold sm:mb-2'>Posts Page is currently unavailable</h3>
                <h3>We will make this page available soon</h3>
            </div>
        </div>
    )

    return (
        <section className='my-container w-full min-h-screen bg-slate-950 py-8 rounded-lg'>
            <div className='max-w-2xl mx-auto flex flex-col gap-6'>
                {posts.map((post, index) => <PostCard post={post} key={index} />)}
            </div>
        </section>
    );
};

export default Posts;
