import React from 'react';
import { viewsFormat } from '../../utils/viewsFormat';

const VideoCard = ({ video }) => {
    const { creator, duration, thumbnail, title, views } = video;
    return (
        <div className='p-1 h-full rounded-lg sm:rounded-xl group hover:cursor-pointer duration-500'>
            {/* thumbnail */}
            <figure className='mb-4 relative w-full overflow-hidden aspect-video flex items-center rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500'>
                <img className='rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500 group-hover:scale-[1.01] w-full' src={thumbnail} alt="" />

                <span className='absolute right-2 bottom-2 bg-black/60 p-1 rounded-md text-sm group-hover:hidden'>{duration}</span>
            </figure>
            <div className='flex gap-3 font-semibold'>
                {/* channel logo */}
                <figure><img className='rounded-full w-10' src="/default-avatar.jpg" alt="" /></figure>
                <div className='*:leading-6'>
                    <h1 className='text-lg mb-1 line-clamp-2'>{title}</h1>
                    <h1 className='text-gray-300'>{creator}</h1>
                    <div className='flex items-center gap-1 text-gray-300 '>
                        <h3>{viewsFormat(views)} Views</h3>
                        ▪
                        <h3>2 year ago</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;