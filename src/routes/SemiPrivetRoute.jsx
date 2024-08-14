import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Link } from 'react-router-dom';
import { MdInfo } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';

const SemiPrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingSpinner />
    }

    if (user) {
        return children
    }

    return <div className='flex flex-col justify-center items-center text-center min-h-[60vh]'>
        <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-info'><MdInfo /></div>
        <div>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>You are not signed in!</h3>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>Please sign in to continue</h3>
        </div>
        <Link to="/sign-in">
            <button className='btn btn-sm md:btn-md rounded-full btn-outline btn-info md:text-lg mt-4'><HiUser />Sign in</button>
        </Link>
    </div>
};

export default SemiPrivetRoute;