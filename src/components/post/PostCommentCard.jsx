import React from 'react';


function PostCommentCard({ }) {
    return (
        <div className="flex space-x-3 p-3 sm:py-4 bg-base-200 relative rounded-lg">
            <div className="avatar">
                <div className="size-7 sm:size-10 rounded-full">
                    <img src="/default-avatar.jpg" alt="User Avatar" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">Lorem, ipsum.</span>
                    <span className="text-sm text-color-gray">12 january</span>
                </div>
                <p className='text-sm line-clamp-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti tempora sunt omnis, possimus praesentium et culpa officiis quia ab quos nisi sint aspernatur iure sit optio tempore perferendis, obcaecati nostrum.</p>
            </div>
        </div>
    )
}

export default PostCommentCard;