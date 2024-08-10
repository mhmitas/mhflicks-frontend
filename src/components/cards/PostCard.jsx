import { Tooltip } from "@mui/material";
import { useState } from "react";
import { FcComments } from "react-icons/fc";
import { GoHeartFill } from "react-icons/go";
import { MdBookmark } from "react-icons/md";
import PostCommentsModal from "../modals/PostCommentsModal";

const PostCard = ({ post, user }) => {
    const { title, content, channel, image } = post;
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='p-4 md:p-5 bg-base-100 border-base-300 border rounded-lg'>
            <div className="space-y-3 md:space-y-4">
                <div className='flex items-center justify-between gap2'>
                    <div className='flex items-center gap-2'>
                        <figure className="size-10 *:size-full rounded-full overflow-hidden border border-base-300">
                            <img
                                alt={channel?.username}
                                src={channel?.avatar} />
                        </figure>
                        <div className='*:leading-5'>
                            <h1 title={channel?.fullName} className='text-lg sm:text-xl font-semibold line-clamp-1'>{channel?.fullName}</h1>
                            <div className='text-color-gray flex flex-wrap gap-1 text-xs sm:text-sm md:text-base [400px]:text-lg leading-5'>
                                <h1>{channel?.username}</h1>▪
                                <h1>165k subscribers</h1>
                            </div>
                        </div>
                    </div>
                    <div className={`space-x-1 ${user?.username === channel?.username && "hidden"}`}>
                        <button className='btn btn-primary rounded-full btn-sm'>Subscribe</button>
                    </div>
                </div>
                <div className=''>
                    <h1 className={`text-base sm:text-lg font-semibold line-clamp-3`}>{title}</h1>
                    <h1 className={`${image && "line-clamp-4 text-sm sm:text-base"}`}>{content}</h1>
                </div>
                {image &&
                    <div onClick={() => setShowModal(true)} className="flex items-center justify-center w-full max-h-[80vh] sm:max-h-[85vh] overflow-hidden rounded-md">
                        <img className="rounded-md w-auto" src={image?.secure_url} alt="Image" />
                    </div>
                }
                <div className='flex items-center justify-end gap-3 cursor-default'>
                    <Tooltip arrow title="Comment">
                        <div className="flex items-center ">
                            <button onClick={() => setShowModal(true)} className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-primary hover:bg-accent/10 text-lg sm:text-xl'><FcComments /></button>
                            <span className="font-semibold">535</span>
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Like">
                        <div className="flex items-center ">
                            <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-primary hover:bg-primary/10 text-lg sm:text-xl'><GoHeartFill /></button>
                            <span className="font-semibold">535</span>
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Bookmark">
                        <div className="flex items-center ">
                            <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-info hover:bg-info/10 text-lg sm:text-xl'><MdBookmark /></button>
                            <span className="font-semibold">535</span>
                        </div>
                    </Tooltip>
                </div>
            </div>
            {showModal && <PostCommentsModal setShowModal={setShowModal} post={post} user={user} />}
        </div>
    )
}

export default PostCard;


const MediaCarousel = () => {
    return (
        <div></div>
    )
}