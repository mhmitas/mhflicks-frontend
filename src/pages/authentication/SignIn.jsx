import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import ProviderSignIn from '../../components/provider-sign-in/ProviderSignIn';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const SignInForm = () => {
    const navigate = useNavigate()
    const [processing, setProcessing] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser, loading, setLoading } = useAuth()


    const onSubmit = async (data) => {
        setProcessing(true)
        try {
            const res = await axiosInstance.post(`/users/sign-in`, data)
            console.log(res.data);
            if (res.data.success) {
                navigate("/")
                setUser(res.data.data)
                setLoading(false)
                toast.success("Welcome back 😊")
            }
            setLoading(false)
            setProcessing(false)
        } catch (err) {
            console.error("Sign up error:", err);
            setLoading(false)
            setProcessing(false)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card w-96 bg-base-200">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Sign In to MhFlicks</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                {...register('email', { required: 'Email is required' })}
                                className={`input input-bordered bg-base-200`}
                            />
                        </div>
                        <div className="form-control mt-1">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                required
                                {...register('password')}
                                className={`input input-bordered bg-base-200`}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-info text-lg" disabled={processing} >{processing ? <span className='loading loading-spinner text-info text-base'></span> : "Sign In"}</button>
                        </div>
                    </form>
                    <p className='my-1'>Don't have an account? Please <Link to="/sign-up" className='link link-info'>Sign up</Link> </p>
                    {/* <div className="divider my-0">or</div>
                    <ProviderSignIn /> */}
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
