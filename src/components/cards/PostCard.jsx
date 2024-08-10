import { Tooltip } from "@mui/material";
import { useState } from "react";
import { FcComments } from "react-icons/fc";
import { GoHeartFill } from "react-icons/go";
import { MdBookmark } from "react-icons/md";
import PostCommentsModal from "../modals/PostCommentsModal";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../hooks/useAxios";
import { viewsFormat } from "../../utils/viewsFormat";
import useSubscribe from "../../hooks/UseSubscribe";

const PostCard = ({ post, user, authLoading }) => {
    const { title, content, channel, image } = post;
    const [showModal, setShowModal] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const handleSubscribe = useSubscribe(isSubscribed, setIsSubscribed, allRefetch, post?.owner)

    const { data: stats = {}, statsLoading, statsError, refetch: statsRefetch } = useQuery({
        queryKey: [`post-stats-${post?._id}`],
        queryFn: async () => {
            const { data } = await axiosInstance(`/posts/post-stats/${post?._id}?owner=${post?.owner}`)
            return data.data
        }
    })

    const { data: userStatus = {}, isLoading: userStatusLoading, error: userStatusError } = useQuery({
        queryKey: [`user-status-of-the-post-${post?._id}`],
        queryFn: async () => {
            const { data } = await axiosInstance(`/posts/post/user-status/${post?._id}?userId=${user?._id}&owner=${post?.owner}`)
            const result = data.data;
            // console.log(result)
            if (result?.isLiked) {
                setIsLiked(true)
            }
            if (result?.isBookmarked) {
                setIsBookmarked(true)
            }
            if (result?.isSubscribed) {
                setIsSubscribed(true)
            }
            return data?.data
        }
    })

    async function handleLike() {
        try {
            setIsLiked(() => !isLiked)
            const info = {
                post: post?._id,
                user: user?._id,
                like: true
            }
            const { data } = await axiosInstance.post(`/user-actions/like-post`, info)
            if (data?.success) {
                statsRefetch()
            }
        } catch (err) {
            console.error(err);
        }
    }
    async function handleBookmark() {
        try {
            setIsBookmarked(() => !isBookmarked)
            const info = {
                post: post?._id,
                user: user?._id,
                bookmark: true
            }
            const { data } = await axiosInstance.post(`/user-actions/bookmark-post`, info);
            // console.log(data?.data);
            if (data?.success) {
                statsRefetch()
            }
        } catch (err) {
            console.error(err);
        }
    }

    function allRefetch() {
        statsRefetch()
    }

    if (statsError) console.error(statsError);
    if (userStatusError) console.error(userStatusError);


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
                            <div className='text-color-gray flex flex-wrap gap-1 text-xs sm:text-sm md:text-base [400px]:text-lg leading-5 font-semibold'>
                                <h1>{channel?.username}</h1>▪
                                <h1>{viewsFormat(stats?.subscribers)} subscribers</h1>
                            </div>
                        </div>
                    </div>
                    <div className={`space-x-1 ${user?.username === channel?.username && "hidden"}`}>
                        <button onClick={() => handleSubscribe()} className={`btn ${isSubscribed ? "" : "btn-primary"} rounded-full btn-sm`}>{isSubscribed ? "Subscribed" : "Subscribe"}</button>
                    </div>
                </div>
                <div className=''>
                    <h1 className={`text-base sm:text-lg font-semibold line-clamp-3`}>{title}</h1>
                    <h1 className={`${image && "line-clamp-4 text-sm sm:text-base"}`}>{content}</h1>
                </div>
                {image &&
                    <div onClick={() => setShowModal(true)} className="flex items-center justify-center w-full max-h-[80vh] overflow-hidden rounded-md">
                        <img className="rounded-md w-auto" src={image?.secure_url} alt="Image" />
                    </div>
                }
                <div className='flex items-center justify-end gap-3 cursor-default'>
                    <Tooltip arrow title="Comment">
                        <div className="flex items-center ">
                            <button onClick={() => setShowModal(true)} className='btn btn-sm btn-circle  rounded-box hover:text-primary hover:bg-accent/10 text-lg sm:text-xl'><FcComments /></button>
                            <span className="font-semibold">{stats?.totalComment}</span>
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Like">
                        <div className="flex items-center ">
                            <button onClick={handleLike} className={`btn btn-sm btn-circle ${isLiked ? "text-primary" : ""} rounded-box hover:text-primary hover:bg-primary/10 text-lg sm:text-xl`}><GoHeartFill /></button>
                            <span className="font-semibold">{stats?.totalLike}</span>
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Save">
                        <div className="flex items-center ">
                            <button onClick={handleBookmark} className={`btn btn-sm btn-circle ${isBookmarked ? "text-info" : ""} rounded-box hover:text-info hover:bg-info/10 text-lg sm:text-xl`}><MdBookmark /></button>
                            <span className="font-semibold">{stats?.totalBookmark}</span>
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