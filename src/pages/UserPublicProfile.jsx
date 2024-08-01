import React, { useEffect, useState } from 'react';
import UserPublicProfileHeader from '../components/UserPublicProfileComponents/UserPublicProfileHeader';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const UserPublicProfile = () => {
    const { username } = useParams()

    return (
        <section className='my-container'>
            <UserPublicProfileHeader />
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