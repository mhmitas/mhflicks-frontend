import React from 'react';
import { viewsFormat } from '../../utils/viewsFormat';

const VideoCard = ({ video }) => {
    const { creator, duration, thumbnail, title, views } = video;
    return (
        <div className='p-1 h-full rounded-xl group hover:cursor-pointer duration-300'>
            {/* thumbnail */}
            <figure className='mb-4 relative w-full overflow-hidden'>
                <img className='rounded-xl group-hover:rounded-sm duration-300 group-hover:scale-[1.01]' src={thumbnail} alt="" />
                <span className='absolute right-2 bottom-2 bg-black/60 p-1 rounded-md text-sm group-hover:hidden'>{duration}</span>
            </figure>
            <div className='flex gap-3 font-semibold'>
                {/* channel logo */}
                <figure><img className='rounded-full w-10' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" /></figure>
                <div>
                    <h1 className='text-xl mb-1'>{title}</h1>
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