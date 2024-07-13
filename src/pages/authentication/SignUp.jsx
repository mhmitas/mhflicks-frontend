import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ProviderSignIn from '../../components/provider-sign-in/ProviderSignIn';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-10 mb-16">
            <div className="card max-w-md w-full bg-base-200 shadow-xl">
                <div className="card-body w-full">
                    <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label" htmlFor="name">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('fullName', { required: 'Name is required' })}
                                className={`input input-bordered bg-base-200 ${errors.name ? 'input-error' : ''}`}
                            />
                            {errors.name && <span className="text-error">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="username">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                {...register('userName', { required: 'Username is required' })}
                                className={`input input-bordered bg-base-200 ${errors.username ? 'input-error' : ''}`}
                            />
                            {errors.username && <span className="text-error">{errors.username.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { required: 'Email is required' })}
                                className={`input input-bordered bg-base-200 ${errors.email ? 'input-error' : ''}`}
                            />
                            {errors.email && <span className="text-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', { required: 'Password is required' })}
                                className={`input input-bordered bg-base-200 ${errors.password ? 'input-error' : ''}`}
                            />
                            {errors.password && <span className="text-error">{errors.password.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info text-lg">Sign Up</button>
                        </div>
                    </form>
                    <p className='my-1'>Already have an account? Please <Link to="/sign-in" className='link link-info'>Sign up</Link> </p>
                    <div className="divider my-0">or</div>
                    <ProviderSignIn />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
