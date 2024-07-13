// Sidebar.js
import React, { useContext } from 'react';
import { AiFillHome, AiOutlineCompass, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineHistory } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../../layouts/root';

const Sidebar = () => {
    const { setSidebarOpen, sidebarOpen } = useContext(SidebarContext)

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setSidebarOpen(false)
        }
    }

    return (
        <div className={`fixed ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-base-100 duration-200 md:translate-x-0 overflow-y-auto h-[calc(100vh-64px)] z-20`}>
            <ul className="menu text-base-content min-h-full p-4">
                <li>
                    <Link className="text-lg flex items-center gap-2">
                        <AiFillHome size={22} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="text-lg flex items-center gap-2">
                        <AiOutlineCompass size={22} />
                        Explore
                    </Link>
                </li>
                <li>
                    <Link className="text-lg flex items-center gap-2">
                        <AiOutlinePlayCircle size={22} />
                        Subscriptions
                    </Link>
                </li>
                <li>
                    <Link className="text-lg flex items-center gap-2">
                        <AiOutlineHeart size={22} />
                        Liked Videos
                    </Link>
                </li>
                <li>
                    <Link className="text-lg flex items-center gap-2">
                        <AiOutlineHistory size={22} />
                        History
                    </Link>
                </li>
                <li>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}>Hello</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
