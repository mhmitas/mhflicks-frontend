import { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { MdBookmark } from "react-icons/md";

const PostCard = ({ post }) => {
    const { title, content, author, media } = post;

    return (
        <div className='p-5 bg-base-100 border-base-300 border rounded-lg space-y-4'>
            <div className='flex items-center justify-between gap-2'>
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
                    {/* <button className='btn btn-sm font-black btn-ghost text-lg'>⁝</button> */}
                </div>
            </div>
            <div className=''>
                <h1 className={`card-title line-clamp-3`}>{title}</h1>
                <p className={`${media && "line-clamp-4"}`}>{content}</p>
            </div>
            {media?.length > 0 &&
                <div className='relative w-full'>
                    <div className='rounded-md overflow-hidden'>
                        <img src={media} alt="" />
                    </div>
                </div>
            }
            <div className='flex items-center justify-end gap-3'>
                <div className='flex join'>
                    <button className='btn btn-sm btn-neutral join-item rounded-l-full text-info'><AiFillLike size={20} /></button>
                    <button className='btn btn-sm btn-neutral join-item rounded-r-full'><AiFillDislike size={20} /></button>
                </div>
                <div>
                    <button className='btn btn-sm btn-neutral rounded-full text-info'><MdBookmark size={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default PostCard;


const MediaCarousel = () => {
    return (
        <div></div>
    )
}