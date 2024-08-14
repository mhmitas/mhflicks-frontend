import React, { useState } from 'react';
import CloseModalButton from '../common/CloseModalButton';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { axiosInstance } from '../../hooks/useAxios';

const EditVideoModal = ({ video, setShowModal, refetchVideos }) => {
    const [processing, setProcessing] = useState(false)
    const [thumbnailPreview, setThumbnailPreview] = useState(video?.thumbnail)
    const { handleSubmit, register } = useForm()

    async function onSubmit(data) {
        if (data?.thumbnail[0]?.size > 1000000) {
            return toast("Thumbnail size must be less than 1 mb")
        }
        const formData = new FormData()
        formData.append("title", data?.title)
        formData.append("description", data?.description)
        formData.append("duration", data?.duration)
        formData.append("thumbnail", data?.thumbnail[0])
        try {
            setProcessing(true)
            const res = await axiosInstance.post(`/videos/update-video/${video?._id}`, formData)
            console.log(res.data);
            if (res.data.success) {
                toast.success("Video Updated")
                refetchVideos()
            }
            setShowModal(false)
            setProcessing(false)
        } catch (error) {
            console.error(error);
            setProcessing(false)
        }

    }

    return (
        <div className='modal modal-open'>
            <form onSubmit={handleSubmit(onSubmit)} className='modal-box relative space-y-1'>
                <div className='form-control'>
                    <label className='label label-text'>Title</label>
                    <textarea {...register("title")} defaultValue={video?.title} required className='textarea textarea-bordered' rows={2}></textarea>
                </div>
                <div className='form-control'>
                    <label className='label label-text'>Description</label>
                    <textarea {...register("description")} defaultValue={video?.description} required className='textarea textarea-bordered' rows={4}></textarea>
                </div>
                <div className='form-control'>
                    <label className='label label-text'>Duration</label>
                    <input {...register("duration")} className='input input-bordered' type="text" defaultValue={video?.duration} />
                </div>
                <div>
                    <label className='label label-text'>Thumbnail</label>
                    <div className='form-control mb-4 border border-base-300 rounded-lg p-4'>
                        <figure className='aspect-video flex items-center justify-center overflow-hidden rounded-lg m-[2px] bg-gradient-to-br from-rose-600 to-blue-600 mb-3'>
                            <img className='w-full' src={thumbnailPreview} alt="" />
                        </figure>
                        <input
                            {...register("thumbnail")}
                            className="file-input file-input-bordered"
                            onChange={(e) => {
                                setThumbnailPreview(URL.createObjectURL(e.target.files[0]))
                            }}
                            type="file"
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button disabled={processing} type='submit' className='btn btn-sm rounded btn-secondary'>{processing ? <span className='gpt-loading-dots text-base-content'>Processing</span> : "Update"}</button>
                </div>
                <CloseModalButton setShowModal={setShowModal} />
            </form>
        </div>
    );
};

export default EditVideoModal;