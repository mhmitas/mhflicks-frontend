import React from 'react';
// import { viewsFormat } from '../../utils/viewsFormat';
import { AiFillLike } from 'react-icons/ai';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { viewsFormat } from '../../utils/viewsFormat';

const VideoCard = ({ video }) => {
    const { duration, thumbnail, title, likes, channel } = video;

    const uploaded = moment(new Date(video.createdAt), "YYYYMMDD").fromNow();

    return (
        <div className='p-1 h-full rounded-lg sm:rounded-xl group hover:cursor-pointer duration-500'>
            {/* thumbnail */}
            <Link to={`/play-video/${video?._id}`}>
                <figure className='mb-4 relative w-full overflow-hidden aspect-video flex items-center rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500'>
                    <img className='rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500 group-hover:scale-[1.01] w-full' src={thumbnail} alt="" />
                    <span className='absolute right-2 bottom-2 bg-black/60 p-1 rounded-md text-sm group-hover:hidden'>{duration}</span>
                </figure>
            </Link>
            <div className='flex gap-3 font-semibold'>
                {/* channel logo */}
                <figure><img className='rounded-full w-10 h-10' src={channel?.avatar || "/default-avatar.jpg"} alt="" /></figure>
                <div className='*:leading-6 flex-1'>
                    {/* video title */}
                    <Link to={`/play-video/${video?._id}`}><h1 title={title} className='text-lg line-clamp-2'>{title}</h1></Link>
                    {/* channel name */}
                    <Link to={`/@${channel?.username}`}><h1 className={`text-color-gray hover:text-info`}>{channel?.fullName}</h1></Link>
                    {/* like time and video */}
                    <div className='flex items-center gap-1 text-color-gray '>
                        {/* <h3>{viewsFormat(views)} Views</h3> */}
                        <h3 className='flex items-center gap-1'>
                            <AiFillLike className='text-warning' />
                            {viewsFormat(likes)}
                        </h3>
                        ▪
                        <h3>{uploaded}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;