import React from 'react';
import { useForm } from 'react-hook-form';
import ProviderSignIn from '../../components/provider-sign-in/ProviderSignIn';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card w-96 bg-base-200">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="form-control mt-1">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', { required: 'Password is required' })}
                                className={`input bg-base-200 input-bordered ${errors.password ? 'input-error' : ''}`}
                            />
                            {errors.password && <span className="text-error">{errors.password.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info text-lg">Sign In</button>
                        </div>
                    </form>
                    <p className='my-1'>Don't have an account? Please <Link to="/sign-up" className='link link-info'>Sign up</Link> </p>
                    <div className="divider my-0">or</div>
                    <ProviderSignIn />
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
