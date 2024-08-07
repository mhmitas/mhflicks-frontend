import React, { useEffect, useState } from 'react';
import PostCard from '../../components/cards/PostCard';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios('/posts.json')
            .then(res => setPosts(res.data))
    }, [])

    return (
        <section className='my-container w-full min-h-screen bg-slate-950 py-8 rounded-lg'>
            <div className='max-w-2xl mx-auto flex flex-col gap-6'>
                {posts.map((post, index) => <PostCard post={post} key={index} />)}
            </div>
        </section>
    );
};

export default Posts;


/* 

*/