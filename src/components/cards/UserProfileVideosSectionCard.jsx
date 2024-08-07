import moment from 'moment';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UserProfileVideosSectionCard = ({ video }) => {
    const { likes, createdAt, thumbnail, title, duration } = video;

    const timestamps = moment(new Date(createdAt), "YYYYMMDD").fromNow();

    return (
        <div className='max-w-4xl mx-auto w-full'>
            <div className="grid grid-cols-4 sm:grid-cols-5 border border-base-300 rounded-md overflow-hidden">
                <figure className="relative aspect-video col-span-2">
                    <Link to={`/play-video/${video?._id}`}>
                        <img
                            src={thumbnail}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover hover:scale-[1.01] duration-500"
                        />
                        <div className="absolute rounded-tr bottom-0 left-0 bg-black bg-opacity-75 text-white px-2 py-1 text-xs">
                            {duration}
                        </div>
                    </Link>
                </figure>
                <div className="p-2 sm:p-4 flex-1 col-span-2 sm:col-span-3 leading-5">
                    <Link to={`/play-video/${video?._id}`}>
                        <h2 className="text-sm sm:text-lg lg:text-xl font-semibold line-clamp-2 sm:line-clamp-3 leading-5 mb-1 sm:mb-2">
                            {title}
                        </h2>
                    </Link>
                    <div className="text-xs sm:text-sm md:text-base text-color-gray flex flex-wrap items-center gap-1 leading-3 mb-2">
                        <span className='flex items-center gap-1'><AiFillLike className='text-info' /> {likes}</span>•
                        <span>{timestamps}</span>
                    </div>
                    <div className="flex gap-2">
                        <button title='Edit' className='btn btn-sm rounded btn-neutral'>Edit</button>
                        <button title='Delete' className='btn btn-sm rounded btn-neutral hover:btn-error'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserProfileVideosSectionCard;