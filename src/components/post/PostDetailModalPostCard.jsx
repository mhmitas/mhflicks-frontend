import { Tooltip } from '@mui/material';
import React from 'react';
import { FcComments } from 'react-icons/fc';
import { GoHeartFill } from 'react-icons/go';
import { MdBookmark } from 'react-icons/md';
import { BookmarkComponent, LikeComponent } from './PostCardLikeAndSaveComponents';

function PostDetailModalPostCard({ cardData }) {
    const { user, post, stats, userStatus, isLiked, setIsLiked, isBookmarked, setIsBookmarked, refetchStats } = cardData
    const { title, content, channel, image } = post;

    return (
        <div className="space-y-3 md:space-y-4">
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
                <LikeComponent user={user} post={post} stats={stats} refetchStats={refetchStats} isLiked={isLiked} setIsLiked={setIsLiked} />
                <BookmarkComponent user={user} post={post} stats={stats} refetchStats={refetchStats} isBookmarked={isBookmarked} setIsBookmarked={setIsBookmarked} />
            </div>
        </div>
    )
}

export default PostDetailModalPostCard;