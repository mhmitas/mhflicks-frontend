import React from 'react';

const UserProfilePostCard = ({ post }) => {
    return (
        <div className="mx-auto w-full">
            <div className="card w-full bg-base-100 shadow-md">
                <div className="card-body p-4">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Avatar"
                            className="rounded-full mr-3"
                        />
                        <div>
                            <h2 className="font-bold text-lg">John Doe</h2>
                            <p className="text-sm text-gray-500">@johndoe</p>
                            <p className="text-xs text-gray-400">2 hours ago</p>
                        </div>
                    </div>

                    {/* Content */}
                    <p className="text-base mb-4">
                        {post.content}
                    </p>
                    {post?.image?.secure_url &&
                        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                            <img
                                src="https://res.cloudinary.com/dpzythyoi/image/upload/w_600/v1723213878/uynkdsj6lj8ddwgidhuo.jpg"
                                alt="Post content"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    }

                    {/* Buttons */}
                    <div className="flex justify-between items-center">
                        <button className="btn btn-sm btn-ghost text-gray-500">
                            👍 Like
                        </button>
                        <button className="btn btn-sm btn-ghost text-gray-500">
                            💬 Comment
                        </button>
                        <button className="btn btn-sm btn-ghost text-gray-500">
                            🔄 Share
                        </button>
                        <button className="btn btn-sm btn-ghost text-gray-500">
                            ⭐ Bookmark
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePostCard;