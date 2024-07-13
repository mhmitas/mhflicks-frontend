import React from 'react';
import NavbarV1 from '../components/root-layout-components/navbar/NavbarV1';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavbarV1 />
            <div className='pt-16'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;