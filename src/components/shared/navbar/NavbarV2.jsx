import React from 'react';
import BrandLogo from '../../Logos/BrandLogo';
import NavbarV1SearchInputBox from './NavbarV1SearchInputBox';
import SignedInUserNavbarSection from '../../signed-in-user/SignedInUserNavbarSection';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavbarV2 = ({ sidebarOpen, setSidebarOpen }) => {
    const { user, loading } = useAuth()

    return (
        <div className='flex items-center justify-between p-4 max-h-16 fixed inset-x-0 bg-base-100 z-20'>
            <div className='flex items-center gap-2'>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className='btn btn-ghost btn-circle btn-sm md:btn-md md:hidden text-2xl md:text-3xl'><AiOutlineBars /></button>
                <BrandLogo />
            </div>
            <div className='flex-1 hidden md:inline-block'>
                <div className='hidden w-full md:flex justify-center items-center'>
                    <NavbarV1SearchInputBox />
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div className='flex items-center'>
                    <div className='block md:hidden'>
                        <NavbarV1SearchInputBox />
                    </div>
                    {!loading && user && <SignedInUserNavbarSection />}
                </div>
                {loading && "Loading..."}
                {!loading && !user && <Link to="/sign-in"><button className='btn btn-info btn-outline btn-sm'>Sign In</button></Link>}
            </div>
        </div>
    );
};

export default NavbarV2;