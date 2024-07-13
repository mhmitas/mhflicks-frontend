import React from 'react';
import BrandLogo from '../../Logos/BrandLogo';
import NavbarV1SearchInputBox from './NavbarV1SearchInputBox';
import SignedInUserNavbarSection from '../../signed-in-user/SignedInUserNavbarSection';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';

const NavbarV2 = ({ sidebarOpen, setSidebarOpen }) => {

    return (
        <div className='flex items-center justify-between p-4 max-h-16 fixed inset-x-0 bg-base-100 z-20'>
            <div className='flex items-center gap-2'>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className='btn btn-ghost btn-circle'><AiOutlineBars size={25} /></button>
                <BrandLogo />
            </div>
            <div>
                <NavbarV1SearchInputBox />
            </div>
            <div className='flex items-center gap-2'>
                <SignedInUserNavbarSection />
                <Link to="/sign-in"><button className='btn btn-info btn-outline btn-sm'>Sign In</button></Link>
            </div>
        </div>
    );
};

export default NavbarV2;