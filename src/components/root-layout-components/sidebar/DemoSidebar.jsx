import React from 'react';

const DemoSidebar = ({ sidebarOpen }) => {
    return (
        // <div className='fixed overflow-y-auto z-20 h-[calc(100vh-64px)] w-64 md:w-20 lg:w-64 bg-base-100 translate-x-0'>
        <div className={`fixed ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-base-100 duration-200 md:translate-x-0 overflow-y-auto z-20 h-[calc(100vh-64px)] w-64 md:w-20 lg:w-64`}>
            <ul className='menu'>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
                <li><a>Lorem, ipsum.</a></li>
            </ul>
        </div>
    );
};

export default DemoSidebar;