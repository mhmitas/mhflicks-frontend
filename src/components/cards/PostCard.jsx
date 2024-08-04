import { Tooltip } from "@mui/material";
import { FcComments } from "react-icons/fc";
import { GoHeartFill } from "react-icons/go";
import { MdBookmark, MdComment } from "react-icons/md";

const PostCard = ({ post }) => {
    const { title, content, author, media } = post;

    return (
        <div className='p-4 md:p-5 bg-base-100 border-base-300 border rounded-lg space-y-3 md:space-y-4'>
            <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
                    <figure className='size-9 sm:size-11 rounded-full overflow-hidden'><img src="/default-avatar.jpg" alt="" /></figure>
                    <div className='*:leading-5'>
                        <h1 title={author?.fullName} className='text-lg sm:text-xl font-semibold line-clamp-1'>{author?.fullName}</h1>
                        <div className='text-color-gray flex flex-wrap gap-1 text-xs sm:text-sm md:text-base [400px]:text-lg leading-5'>
                            <h1>{author?.username}</h1>▪
                            <h1>165k subscribers</h1>
                        </div>
                    </div>
                </div>
                <div className='space-x-1'>
                    <button className='btn btn-primary rounded-full btn-sm'>Subscribe</button>
                </div>
            </div>
            <div className=''>
                <h1 className={`text-base sm:text-lg font-semibold line-clamp-3`}>{title}</h1>
                <p className={`${media && "line-clamp-4 text-sm sm:text-base"}`}>{content}</p>
            </div>
            {media?.length > 0 &&
                <div className='relative w-full'>
                    <div className='rounded-md overflow-hidden'>
                        <img src={media} alt="" />
                    </div>
                </div>
            }
            <div className='flex items-center justify-end gap-3 cursor-default'>
                <Tooltip arrow title="Comment">
                    <div className="flex items-center ">
                        <button className='btn btn-sm btn-circle btn-ghost btn-neutral rounded-box hover:text-primary hover:bg-accent/10 text-lg sm:text-xl'><FcComments /></button>
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
    )
}

export default PostCard;


const MediaCarousel = () => {
    return (
        <div></div>
    )
}