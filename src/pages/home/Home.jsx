import React, { useContext } from 'react';
import HomeVideosSection from '../../components/root-layout-components/HomeVideosSection';
import { SidebarContext } from '../../layouts/root';


const Home = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)

    return (
        <div className=''>
            <HomeVideosSection />
        </div>
    );
};

export default Home;

