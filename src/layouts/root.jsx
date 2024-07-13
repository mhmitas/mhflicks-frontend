import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarV2 from '../components/shared/navbar/NavbarV2';

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
                <div className='pt-16'>
                    <Outlet />
                </div>
            </div>
        </SidebarContext.Provider>
    );
};

export default Root;