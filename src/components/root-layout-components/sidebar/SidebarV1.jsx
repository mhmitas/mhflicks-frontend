// Sidebar.js
import { Tooltip } from '@mui/material';
import React from 'react';
import { AiOutlinePlayCircle, AiOutlineLike, AiOutlineUser, AiOutlineHistory } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { MdOutlineArticle, MdPlaylistPlay } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ sidebarOpen }) => {

    return (
        <div
            className={`fixed ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-base-100 md:translate-x-0 z-20 h-[calc(100vh-64px)] w-64 md:w-20 lg:w-64 duration-200`}
        >
            <div className='h-full overflow-y-auto'>
                <ul className="menu text-base-content min-h-full px-4 py-4 md:px-0 lg:px-4 space-y-2">
                    {sidebarMenuItems.map(item => <SidebarMenuItem name={item.name} path={item.path} Icon={item.icon} key={item.path} available={item?.available} />)}

                    <div className='divider'></div>

                    {/* Ekhane ektu jhol ache */}
                    {sidebarUserMenuItems.map(item => <SidebarMenuItem name={item.name} path={item.path} Icon={item.icon} key={item.path} available={item?.available} />)}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;


function SidebarMenuItem({ name, path, Icon, available }) {

    return (
        <li className='md:p-1 lg:p-0'>
            <Tooltip arrow title={<span className='text-sm'>{name}</span>} placement='right'>
                <NavLink to={path} className="text-base flex md:items-center lg:items-stretch gap-2 w-full lg:mx-0 p-2">
                    <span className="md:mx-auto lg:mx-0">
                        <Icon size={25} />
                    </span>
                    <span className='md:hidden lg:inline-block'>{name}</span>
                </NavLink>
            </Tooltip>
        </li>
    )
}


const sidebarMenuItems = [
    { name: "Home", path: "/", icon: GoHome, available: true },
    // { name: "Explore", path: "/explore", icon: AiOutlineCompass },
    { name: "Posts", path: "/posts", icon: MdOutlineArticle, available: true },
    { name: "Subscriptions", path: "/subscriptions", icon: AiOutlinePlayCircle, available: false },
]

const sidebarUserMenuItems = [
    { name: "You", path: "/user-profile", icon: AiOutlineUser, available: true },
    { name: "History", path: "/history", icon: AiOutlineHistory, available: false },
    { name: "Playlist", path: "/playlists", icon: MdPlaylistPlay, available: false },
    { name: "Liked Videos", path: "/liked-videos", icon: AiOutlineLike, available: true },
]