import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { axiosInstance } from '../../hooks/useAxios';
import myAlert from '../../components/modals/myAlert';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser, loading, setLoading } = useAuth()

    const onSubmit = async (data) => {
        try {
            const res = await axiosInstance.post(`/users/register`, data)
            console.log(res.data);
            if (res.data.success) {
                navigate("/")
                setUser(res.data.data)
                setLoading(false)
                myAlert("Congratulations! Sign up successfully")
            }
            setLoading(false)
        } catch (err) {
            console.error("Sign up error:", err);
            setLoading(false)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-10">
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
                                {...register('fullName')}
                                required
                                className={`input input-bordered bg-base-200`}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="username">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                {...register('username')}
                                required
                                className={`input input-bordered bg-base-200`}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register('email')}
                                required
                                className={`input input-bordered bg-base-200`}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register('password')}
                                required
                                className={`input input-bordered bg-base-200`}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info text-lg">Sign Up</button>
                        </div>
                    </form>
                    <p className='my-1'>Already have an account? Please <Link to="/sign-in" className='link link-info'>Sign up</Link> </p>
                    {/* <div className="divider my-0">or</div>
                    <ProviderSignIn /> */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
