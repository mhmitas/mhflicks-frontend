import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaVideo } from 'react-icons/fa';
import LoadingSpinner from '../common/LoadingSpinner';
import CloseModalButton from '../common/CloseModalButton';
import toast from 'react-hot-toast';
import { axiosInstance } from '../../hooks/useAxios';
import { GoUpload } from 'react-icons/go';

const UploadVideoSection = () => {
    const { register, handleSubmit } = useForm();
    const [showModal, setShowModal] = useState(false)
    const [showProgressModal, setShowProgressModal] = useState(false)
    const [progress, setProgress] = useState(0);

    const { data: user = {}, isLoading, refetch, error } = useQuery({
        queryKey: ["user-profile-data-upload-video"],
        queryFn: async () => {
            const { data } = await axiosInstance("/users/current-user")
            return data.data
        }
    })

    async function onSubmit(data) {
        const formData = new FormData();
        formData.append("video", data.video[0]);
        formData.append("thumbnail", data.thumbnail[0])
        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("duration", data.duration)
        formData.append("owner", user?._id)
        try {
            setShowModal(false)
            setShowProgressModal(true)
            const res = await axiosInstance.post(`/videos/upload-video`, formData, {
                onUploadProgress: (e) => {
                    setProgress((e.loaded / e.total) * 100)
                    console.log("progress:", (e.loaded / e.total) * 100), "%";
                    console.log(e.loaded);
                    console.log(e.total);
                }
            })
            if (res.data.data.modifiedCount > 0) {
                toast.success("Uploaded")
            }
            setShowProgressModal(false)
        } catch (err) {
            console.error(err);
            setShowProgressModal(false);
        }
    }

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error) {
        toast.error(error?.message)
        console.error(error);
    }

    return (
        <div>
            <div className='bg-base-200 p-8 rounded-lg flex items-center justify-center'>
                <button onClick={() => setShowModal(true)} className='btn btn-secondary text-base'> <GoUpload size={20} />Upload Video</button>
            </div>
            {showModal &&
                <section className='modal modal-open'>
                    <form onSubmit={handleSubmit(onSubmit)} className='modal-box relative max-w-2xl'>
                        <div className='form-control'>
                            <label className='label label-text'>Title</label>
                            <textarea {...register("title")} type="text" className='textarea textarea-bordered' />
                        </div>
                        <div className='form-control'>
                            <label className='label label-text'>Description</label>
                            <textarea {...register("description")} type="text"
                                rows={3} className='textarea textarea-bordered' />
                        </div>
                        <div className='form-control'>
                            <label className='label label-text'>Duration</label>
                            <input {...register("duration")} defaultValue={"00:00:10"} type="text" className='input input-bordered' placeholder='eg. 01:42:34' />
                        </div>
                        <div className='form-control'>
                            <label className='label label-text'>Video File</label>
                            <input {...register("video")} type="file" accept='video/*' className='file-input file-input-bordered' />
                        </div>
                        <div className='form-control'>
                            <label className='label label-text'>Thumbnail</label>
                            <input {...register("thumbnail")} type="file" className='file-input file-input-bordered' />
                        </div>
                        <div className='flex items-center justify-center pt-4'>
                            <button type='submit' className='btn btn-secondary btn-sm rounded'>Upload</button>
                        </div>
                        <CloseModalButton setShowModal={setShowModal} />
                    </form>
                </section>
            }
            {showProgressModal &&
                <div className='fixed bottom-2 right-2 bg-secondary p-4 rounded-md z-40 text-secondary-content text-center'>
                    <div className=''><span className='loading loading-spinner'></span></div>
                    <h3 className='text-lg font-semibold'>File Uploading</h3>
                    <p>Please don't reload this page</p>
                    <progress className="progress border progress-info w-56" value={progress} max={100}></progress>
                </div>
            }
        </div>
    );
};

export default UploadVideoSection;


// https://res.cloudinary.com/dquqygs9h/video/upload/v1721987121/oewev0kijm2vr94lqeqf.mp4