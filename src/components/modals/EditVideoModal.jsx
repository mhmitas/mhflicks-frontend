import React from 'react';
import CloseModalButton from '../common/CloseModalButton';
import { useForm } from 'react-hook-form';

const EditVideoModal = ({ videoId, setShowModal }) => {
    const { handleSubmit, register } = useForm()

    async function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className='modal modal-open'>
            <form onSubmit={handleSubmit(onSubmit)} className='modal-box relative space-y-1'>
                <div className='form-control'>
                    <label className='label label-text'>Title</label>
                    <textarea {...register("title")} className='textarea textarea-bordered' rows={2}></textarea>
                </div>
                <div className='form-control'>
                    <label className='label label-text'>Description</label>
                    <textarea {...register("description")} className='textarea textarea-bordered' rows={4}></textarea>
                </div>
                <div>
                    <label className='label label-text'>Thumbnail</label>
                    <div className='form-control mb-4 border border-base-300 rounded-lg p-4'>
                        <figure className='aspect-video flex items-center justify-center overflow-hidden rounded-lg m-[2px] bg-gradient-to-br from-rose-600 to-blue-600 mb-3'>
                            <img className='w-full' src="/assets/1.jpg" alt="" />
                        </figure>
                        <input {...register("thumbnail")} accept='image/*' type="file" className='file-input file-input-bordered' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='btn btn-sm rounded btn-secondary'>Update</button>
                </div>
                <CloseModalButton setShowModal={setShowModal} />
            </form>
        </div>
    );
};

export default EditVideoModal;