import React from 'react';

const UserPublicProfileHeader = () => {
    return (
        <header className="space-y-4 sm:space-y-6">
            <figure className='aspect-[16/2] flex items-center rounded-lg overflow-hidden'>
                {/* <img
                    src="/assets/channel_banner.jpg"
                    alt="Channel Banner"
                    className="w-full rounded-lg"
                /> */}
                <div className='w-full h-full bg-gradient-to-r from-rose-900 to-blue-900'></div>
            </figure>
            <div className="flex gap-4">
                <figure>
                    <img
                        src="/default-avatar.jpg"
                        alt="Profile"
                        className="rounded-full border-2 border-base-200 size-20 lg:size-24"
                    />
                </figure>
                <div className='space-y-3 flex-1'>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">Jacob + Katie Schwarz</h1>
                        <div className='flex flex-wrap gap-2 text-color-gray'>
                            <span className="">@JacobKatie</span>▪
                            <span className="">727k subscribers</span>▪
                            <span className="">39 videos</span>▪
                            <span className="">9 posts</span>
                        </div>
                        <p className="line-clamp-2">
                            It's not what you look at that matters, it's what you see. - David Thoreau
                        </p>
                    </div>
                    <SubscribeButton />
                </div>
            </div>
        </header>
    );
};

export default UserPublicProfileHeader;

function SubscribeButton() {
    return (
        <button className="btn btn-sm md:btn-md btn-primary rounded-full md:text-lg">Subscribe</button>
    )
}