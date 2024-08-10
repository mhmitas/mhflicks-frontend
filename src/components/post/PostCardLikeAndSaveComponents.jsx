import { Tooltip } from "@mui/material"
import { GoHeartFill } from "react-icons/go"
import { axiosInstance } from "../../hooks/useAxios"
import { MdBookmark } from "react-icons/md"

export const LikeComponent = ({ user, post, stats, statsRefetch, isLiked, setIsLiked }) => {
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

    return (
        <Tooltip arrow title="Like">
            <div className="flex items-center ">
                <button onClick={handleLike} className={`btn btn-sm btn-circle ${isLiked ? "text-primary" : ""} rounded-box hover:text-primary hover:bg-primary/10 text-lg sm:text-xl`}><GoHeartFill /></button>
                <span>{stats?.totalLike}</span>
            </div>
        </Tooltip>
    )
}

export const BookmarkComponent = ({ user, post, stats, statsRefetch, isBookmarked, setIsBookmarked }) => {

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

    return (
        <Tooltip arrow title="Save">
            <div className="flex items-center ">
                <button onClick={handleBookmark} className={`btn btn-sm btn-circle ${isBookmarked ? "text-info" : ""} rounded-box hover:text-info hover:bg-info/10 text-lg sm:text-xl`}><MdBookmark /></button>
                <span>{stats?.totalBookmark}</span>
            </div>
        </Tooltip>
    )
}