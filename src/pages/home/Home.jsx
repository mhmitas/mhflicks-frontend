import React from 'react';
import SidebarV1 from '../../components/root-layout-components/sidebar/SidebarV1';
import HomeVideosSection from '../../components/root-layout-components/HomeVideosSection';


const Home = () => {

    return (
        <div className='flex'>
            <SidebarV1 />
            <HomeVideosSection />
        </div>
    );
};

export default Home;

