import { Tooltip } from '@mui/material';
import React from 'react';
import { FcComments } from 'react-icons/fc';
import { GoHeartFill } from 'react-icons/go';
import { MdBookmark } from 'react-icons/md';

function PostDetailModalPostCard({ post, user }) {
    const { title, content, channel, image } = post;

    return (
        <div className="space-y-3 md:space-y-4">
            <div className='flex items-center justify-between gap2'>
                <div className='flex items-center gap-2'>
                    <figure className='size-9 sm:size-11 rounded-full overflow-hidden'><img src="/default-avatar.jpg" alt="" /></figure>
                    <div className='*:leading-5'>
                        <h1 title={channel?.fullName} className='text-lg sm:text-xl font-semibold line-clamp-1'>{channel?.fullName}</h1>
                        <div className='text-color-gray flex flex-wrap gap-1 text-xs sm:text-sm md:text-base [400px]:text-lg leading-5'>
                            <h1>{channel?.username}</h1>▪
                            <h1>165k subscribers</h1>
                        </div>
                    </div>
                </div>
                <div className={`space-x-1 ${user?.username === channel?.username && "hidden"}`}>
                    <button className='btn btn-primary rounded-full btn-sm'>Subscribe</button>
                </div>
            </div>
            <div className=''>
                <h1 className={`text-base sm:text-lg font-semibold line-clamp-3`}>{title}</h1>
                <h1 className={`${image && "line-clamp-4 text-sm sm:text-base"}`}>{content}</h1>
            </div>
            {image &&
                <div className="flex items-center justify-center w-full overflow-hidden rounded-md">
                    <img className="rounded-md w-auto" src={image?.secure_url} alt="Image" />
                </div>
            }
            <div className='flex items-center justify-end gap-3 cursor-default border-t border-b border-base-300 py-1'>
                <Tooltip arrow title="Comment">
                    <div className="flex items-center ">
                        <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-primary hover:bg-accent/10 text-lg sm:text-xl'><FcComments /></button>
                        <span className="font-semibold">535</span>
                    </div>
                </Tooltip>
                <Tooltip arrow title="Like">
                    <div className="flex items-center ">
                        <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-primary hover:bg-primary/10 text-lg sm:text-xl'><GoHeartFill /></button>
                        <span className="font-semibold">535</span>
                    </div>
                </Tooltip>
                <Tooltip arrow title="Save">
                    <div className="flex items-center ">
                        <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-info hover:bg-info/10 text-lg sm:text-xl'><MdBookmark /></button>
                        <span className="font-semibold">535</span>
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default PostDetailModalPostCard;