import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarV2 from '../components/shared/navbar/NavbarV2';
import Sidebar from '../components/root-layout-components/sidebar/SidebarV1';

export const SidebarContext = createContext(null)

const Root = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const value = {
        sidebarOpen,
        setSidebarOpen
    }
    return (
        <SidebarContext.Provider value={value}>
            <div>
                <NavbarV2 sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className='pt-16 flex'>
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="md:ml-16 lg:ml-64 duration-200 flex-1">
                        <Outlet />
                    </div>
                </div>

                {/* Sidebar overlay */}
                {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className='md:hidden fixed inset-0 bg-black/40 duration-200 z-10'></div>}
            </div>
        </SidebarContext.Provider>
    );
};

export default Root;