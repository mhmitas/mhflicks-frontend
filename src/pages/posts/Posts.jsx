import React from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

const Posts = () => {
    return (
        <section className='my-container w-full min-h-screen'>
            <div className='max-w-4xl mx-auto flex flex-col gap-6'>
                {posts.map((post, index) => <PostCard post={post} key={index} />)}
            </div>
        </section>
    );
};

export default Posts;


const PostCard = ({ post }) => {
    const { title, content, author } = post;

    return (
        <div className='p-4 bg-base-200 rounded-lg'>
            <div className='flex items-center justify-between gap-2 mb-3'>
                <div className='flex items-center gap-2'>
                    <figure className='size-11 rounded-full overflow-hidden'><img src="/default-avatar.jpg" alt="" /></figure>
                    <div className='*:leading-5'>
                        <h1 className='text-xl font-semibold'>{author?.fullName}</h1>
                        <div className='text-color-gray flex gap-1'>
                            <h1>{author?.username}</h1>▪
                            <h1>165k subscribers</h1>
                        </div>
                    </div>
                </div>
                <div className='space-x-1'>
                    <button className='btn btn-primary rounded-full btn-sm'>Subscribe</button>
                    <button className='btn btn-sm font-black btn-ghost text-lg'>⁝</button>
                </div>
            </div>
            <div>
                <h1 className='card-title'>{title}</h1>
                <p>{content}</p>
            </div>
            <div>
                <div className='flex join'>
                    <button className='btn btn-sm btn-neutral join-item rounded-l-full'><AiFillLike size={20} /></button>
                    <button className='btn btn-sm btn-neutral join-item rounded-r-full'><AiFillDislike size={20} /></button>
                </div>
                <div></div>
            </div>
        </div>
    )
}


const posts = [
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
    {
        author: {
            fullName: "Lorem Ipsum",
            username: '@lorem'
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis repellendus sunt error ex placeat pariatur aliquam expedita deleniti labore optio quibusdam, tempore omnis accusantium eos ducimus voluptatibus saepe delectus debitis ipsam iure officia voluptatum! Ratione facere cum dignissimos distinctio libero amet cumque magni, fugiat, a similique earum at. Labore, error. Laboriosam reprehenderit delectus eaque voluptate facere earum iusto assumenda ex sint eveniet rerum ipsum excepturi porro odio nisi animi corporis quidem, accusamus ut, molestias tenetur incidunt! Ipsam temporibus, explicabo quaerat a tempora aperiam ipsum nesciunt tenetur nemo mollitia vero sapiente quo voluptatibus cupiditate ut, praesentium reprehenderit earum soluta minima!`,
        title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nulla debitis, fugiat asperiores.`
    },
]