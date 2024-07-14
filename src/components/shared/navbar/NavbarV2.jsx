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
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className='btn btn-ghost btn-circle md:hidden'><AiOutlineBars size={25} /></button>
                <BrandLogo />
            </div>
            <div className='flex-1'>
                <div className='hidden w-full md:flex justify-center items-center'>
                    <NavbarV1SearchInputBox />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='flex items-center'>
                    <div className='block md:hidden'>
                        <NavbarV1SearchInputBox />
                    </div>
                    <SignedInUserNavbarSection />
                </div>
                <Link to="/sign-in"><button className='btn btn-info btn-outline btn-sm'>Sign In</button></Link>
            </div>
        </div>
    );
};

export default NavbarV2;