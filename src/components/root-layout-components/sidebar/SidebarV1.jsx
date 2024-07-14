// Sidebar.js
import { Tooltip } from '@mui/material';
import React from 'react';
import { AiFillHome, AiOutlineCompass, AiOutlinePlayCircle, AiOutlineHistory, AiOutlineLike } from 'react-icons/ai';
import { MdPlaylistPlay } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ sidebarOpen }) => {

    return (
        <div
            className={`fixed ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-base-100 duration-200 md:translate-x-0 overflow-y-auto z-20 h-[calc(100vh-64px)] w-64 md:w-16 lg:w-64`}
        >
            <ul className="menu text-base-content min-h-full px-4 py-4 md:px-0 lg:px-4 space-y-2">
                {sidebarMenuItems.map(item => <SidebarMenuItem name={item.name} path={item.path} Icon={item.icon} key={item.path} />)}

                <div className='divider'></div>

                {sidebarUserMenuItems.map(item => <SidebarMenuItem name={item.name} path={item.path} Icon={item.icon} key={item.path} />)}


            </ul>
        </div>
    );
};

export default Sidebar;


function SidebarMenuItem({ name, path, Icon }) {
    return (
        <li className='md:p-1 lg:p-0'>
            <Tooltip title={<span className='text-sm'>{name}</span>} placement='right'>
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
    { name: "Home", path: "/", icon: AiFillHome },
    { name: "Explore", path: "/explore", icon: AiOutlineCompass },
    { name: "Subscriptions", path: "/subscriptions", icon: AiOutlinePlayCircle },
]

const sidebarUserMenuItems = [
    { name: "You", path: "/user-profile", icon: CiUser },
    { name: "History", path: "/history", icon: AiOutlineHistory },
    { name: "Playlist", path: "/playlist", icon: MdPlaylistPlay },
    { name: "Liked Videos", path: "/liked-videos", icon: AiOutlineLike },
]