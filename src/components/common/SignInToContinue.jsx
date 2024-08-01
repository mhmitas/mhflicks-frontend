import React from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SignInToContinue = ({ Icon = FaTruckLoading, title = "Hello", message = "Hello world" }) => {

    return (
        <section className='flex flex-col items-center justify-center h-[60vh] space-y-4 text-center'>
            <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary'><Icon /></div>
            <div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-1'>{title}</h3>
                <h3 className='text-xl'>{message}</h3>
            </div>
            <Link to="/sign-in">
                <button className='btn btn-sm md:btn-md rounded-full btn-outline btn-info md:text-lg'><HiUser />Sign in</button>
            </Link>
        </section>
    );
};

export default SignInToContinue;