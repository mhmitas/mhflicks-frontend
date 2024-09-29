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

    return <div className='flex flex-col justify-center items-center text-center min-h-[60vh] space-y-4'>
        <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary'><MdInfo /></div>
        <div>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-1'>You are not signed in!</h3>
            <h3 className='text-xl'>Please sign in to continue</h3>
        </div>
        <Link to="/sign-in">
            <button className='btn btn-sm md:btn-md rounded-full btn-outline btn-info md:text-lg'><HiUser />Sign in</button>
        </Link>
    </div>
};

export default SemiPrivetRoute;