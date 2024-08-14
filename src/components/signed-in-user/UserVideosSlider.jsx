import React from 'react';
import { scrollLeft, scrollRight } from '../../utils/scroll';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { viewsFormat } from '../../utils/viewsFormat';


const UserVideosSlider = ({ title, videos, containerId }) => {
    return (
        <div className='rounded-lg border border-base-300 p-4'>
            <h3 className='card-title mb-2'>{title}</h3>
            <div className='relative'>
                <div className='grid grid-cols-1'>
                    <div className='overflow-auto flex gap-4 rounded-lg py-2 slider-scrollbar' id={containerId}>
                        {videos.map((video, index) => <VideoSlideCard key={index} video={video} />)}
                    </div>
                </div>
                <>
                    <button
                        onClick={() => scrollLeft(containerId)}
                        className='btn btn-sm sm:btn-md btn-neutral btn-circle rounded-full absolute left-2 top-1/2'
                    >
                        <GoChevronLeft size={25} />
                    </button>
                    <button
                        onClick={() => scrollRight(containerId)}
                        className='btn btn-sm sm:btn-md btn-neutral btn-circle rounded-full absolute right-2 top-1/2'
                    >
                        <GoChevronRight size={25} />
                    </button>
                </>
            </div>
        </div>
    );
};

export default UserVideosSlider;

function VideoSlideCard({ video }) {

    return (
        <div className="w-64">
            <div className="flex flex-col relative w-64 rounded-md">
                <figure className='aspect-video overflow-hidden flex items-center rounded-md'>
                    <img
                        className='w-full'
                        src={video?.thumbnail}
                        alt="Shoes" />
                </figure>
                <div className="pt-2 *:leading-6">
                    <h2 className="text-lg line-clamp-2">{video?.title}</h2>
                    <h3 className='line-clamp-1 text-gray-400'>{video.creator}</h3>
                    <div className='flex gap-2 text-gray-400'>
                        <span>{viewsFormat(video?.views)} Views</span>•
                        <span>2 years ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}