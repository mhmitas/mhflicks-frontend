import React, { useEffect, useState } from 'react';
import UserPublicProfileHeader from '../components/UserPublicProfileComponents/UserPublicProfileHeader';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../hooks/useAxios';
import LoadingSpinner from '../components/common/LoadingSpinner';

const UserPublicProfile = () => {
    const [channelId, setChannelId] = useState("")
    const [finding, setFinding] = useState(true)
    const navigate = useNavigate()
    const { username } = useParams()

    // check is this user exists or not
    useEffect(() => {
        axiosInstance(`/users/is-exists/${username.split("@")[1]}`)
            .then(res => {
                setChannelId(res.data?.data?._id)
                // console.log(res.data?.data?._id)
                setFinding(false)
            })
            .catch(err => {
                console.error(err);
                setFinding(false)
                if (err.response.status === 404) {
                    return navigate("/error", { replace: true })
                }
            })
    }, [])

    if (finding) {
        return <LoadingSpinner />
    }

    return (
        <section className='my-container relative'>
            <UserPublicProfileHeader username={username} channelId={channelId} />
            <div className=''>
                <nav role="tablist" className="tabs tabs-sm lg:tabs-md tabs-boxed w-max mt-4 sm:mt-6 mb-2">
                    <TabComponent path={`/profile/${username}`} name="Videos" />
                    <TabComponent name="Posts" path={`/profile/${username}/posts`} />
                </nav>
                <div className="divider p-0 m-0"></div>
            </div>
            <Outlet />
        </section>
    );
};

export default UserPublicProfile;


const TabComponent = ({ name, path }) => {
    return (
        <NavLink
            to={path}
            role="tab"
            end={true}
            className={({ isActive }) => {
                return `tab tab-1 ${isActive && "bg-info"}`
            }}
        >
            {name}
        </NavLink>
    )
}