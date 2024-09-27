import { Tooltip } from "@mui/material";
import { useState } from "react";
import { FcComments } from "react-icons/fc";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../hooks/useAxios";
import { viewsFormat } from "../../utils/viewsFormat";
import useSubscribe from "../../hooks/UseSubscribe";
import PostDetailModal from "../modals/PostDetailModal";
import { BookmarkComponent, LikeComponent } from "../post/PostCardLikeAndSaveComponents";
import { Link } from "react-router-dom";
import moment from "moment";

const PostCard = ({ post, user, authLoading }) => {
    const { title, content, channel, image, createdAt } = post;
    const [showModal, setShowModal] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const handleSubscribe = useSubscribe(isSubscribed, setIsSubscribed, allRefetch, post?.owner)

    const { data: stats = {}, statsLoading, statsError, refetch: refetchStats } = useQuery({
        queryKey: [`post-stats-${post?._id}`],
        queryFn: async () => {
            const { data } = await axiosInstance(`/posts/post-stats/${post?._id}?owner=${post?.owner}`)
            return data.data
        }
    })

    const { data: userStatus = {}, isLoading: userStatusLoading, error: userStatusError } = useQuery({
        queryKey: [`user-status-of-the-post-${post?._id}`],
        enabled: () => !!user && !authLoading,
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

    function allRefetch() {
        refetchStats()
    }

    if (statsError) console.error(statsError);
    if (userStatusError) console.error(userStatusError);

    const timestamps = moment(new Date(createdAt), "YYYYMMDD").fromNow();

    return (
        <div className='p-4 md:p-5 bg-base-100 border-base-300 border rounded-lg'>
            <div className="space-y-3 md:space-y-4">
                <div className='flex items-center justify-between gap2'>
                    <Link to={`/profile/@${post?.channel?.username}`}><div className='flex items-center gap-2'>
                        <figure className="size-10 *:size-full rounded-full overflow-hidden border border-base-300">
                            <img
                                alt={channel?.username}
                                src={channel?.avatar} />
                        </figure>
                        <div className='*:leading-5'>
                            <h1 title={channel?.fullName} className='text-lg sm:text-xl font-semibold line-clamp-1'>{channel?.fullName}</h1>
                            <h1 className='text-color-gray flex flex-wrap gap-1 text-xs sm:text-sm md:text-base leading-3'>
                                <span>@{channel?.username}</span>▪
                                <span>{viewsFormat(stats?.subscribers)} subscribers</span>▪
                                <span>{timestamps}</span>
                            </h1>
                        </div>
                    </div></Link>
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
                        <img className="rounded-md w-auto" width={100} height={100} src={image?.secure_url} alt="Image" />
                    </div>
                }
                <div className='flex items-center justify-end gap-3 cursor-default'>
                    <Tooltip arrow title="Comment">
                        <div className="flex items-center ">
                            <button onClick={() => setShowModal(true)} className='btn btn-sm btn-circle rounded-box hover:text-primary hover:bg-accent/10 text-lg sm:text-xl'><FcComments /></button>
                            <span>{stats?.totalComment}</span>
                        </div>
                    </Tooltip>
                    <LikeComponent user={user} post={post} stats={stats} refetchStats={refetchStats} isLiked={isLiked} setIsLiked={setIsLiked} />
                    <BookmarkComponent user={user} post={post} stats={stats} refetchStats={refetchStats} isBookmarked={isBookmarked} setIsBookmarked={setIsBookmarked} />
                </div>
            </div>
            {showModal && <PostDetailModal
                setShowModal={setShowModal}
                post={post}
                user={user}
                cardData={{
                    user,
                    post,
                    stats,
                    userStatus,
                    isLiked, setIsLiked,
                    isBookmarked, setIsBookmarked,
                    isSubscribed, setIsSubscribed,
                    refetchStats
                }}
            />}
        </div>
    )
}

export default PostCard;


const MediaCarousel = () => {
    return (
        <div></div>
    )
}