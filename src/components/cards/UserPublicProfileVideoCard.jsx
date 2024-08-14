import React from 'react';
// import { viewsFormat } from '../../utils/viewsFormat';
import { AiFillLike } from 'react-icons/ai';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { viewsFormat } from '../../utils/viewsFormat';

const UserPublicProfileVideoCard = ({ video }) => {
    const { duration, thumbnail, title, likes, channel } = video;

    const uploaded = moment(new Date(video.createdAt), "YYYYMMDD").fromNow();

    return (
        <div title='Click to view' className='p-1 h-full rounded-lg sm:rounded-xl group hover:cursor-pointer duration-500'>
            {/* thumbnail */}
            <Link to={`/play-video/${video?._id}`}>
                <figure className='mb-2 relative w-full overflow-hidden aspect-video flex items-center rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500'>
                    <img className='rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500 group-hover:scale-[1.01] w-full' src={thumbnail} alt="" />
                    <span className='absolute right-2 bottom-2 bg-black/60 p-1 rounded-md text-sm group-hover:hidden'>{duration}</span>
                </figure>
                <h1 title={title} className='line-clamp-2'>{title}</h1>
            </Link>
            <div className='flex gap-3 font-semibold'>
                <div className='flex gap-1 text-color-gray'>
                    {/* <h3>{viewsFormat(views)} Views</h3> */}
                    <h3 className='flex items-center gap-1'>
                        <AiFillLike className='text-info' />
                        {viewsFormat(likes)}
                    </h3>
                    ▪
                    <h3>{uploaded}</h3>
                </div>
            </div>
        </div>
    );
};

export default UserPublicProfileVideoCard;