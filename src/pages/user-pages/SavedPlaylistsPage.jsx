import React from 'react';
import { MdInfo } from 'react-icons/md';

const SavedPlaylistsPage = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center min-h-[60vh]'>
            <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-info'><MdInfo /></div>
            <div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold sm:mb-2'>Playlists Page is currently unavailable</h3>
                <h3>We will make this page available soon</h3>
            </div>
        </div>
    );
};

export default SavedPlaylistsPage;