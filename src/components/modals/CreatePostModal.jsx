import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import CloseModalButton from '../common/CloseModalButton';
import toast from 'react-hot-toast';
import { TextareaAutosize } from '@mui/material';
import { GoX } from 'react-icons/go';
import { axiosInstance } from '../../hooks/useAxios';
axiosInstance

const CreatePostModal = ({ setShowModal, user, refetch }) => {
    const [processing, setProcessing] = useState(false)
    const [image, setImage] = useState("")
    const [imagePreview, setImagePreview] = useState("")
    const [textContentLength, setTextContentLength] = useState(0);
    const [textContent, setTextContent] = useState("");


    function handleImage(e) {
        if (e.target.files[0]?.size > 1000000) {
            return toast("Maximum image size 1 mb")
        }
        setImage(() => e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    function handleTextContent(e) {
        const value = e.target.value
        setTextContentLength(value.length)
        setTextContent(value)
    }

    async function handleSubmit() {
        setProcessing(true)
        try {
            const formData = new FormData()
            formData.append("content", textContent)
            if (image) {
                formData.append("image", image);
            }
            const res = await axiosInstance.post(`/posts/create-post/${user?._id}`, formData)
            console.log(res.data.data);
            setProcessing(false)
            if (res.data.success) {
                toast.success("Congratulations")
            }
            setShowModal(false)
            if (refetch) { refetch() }
        } catch (err) {
            console.error(err);
            setProcessing(false)
        }
    }


    return (
        <section className='modal modal-open overflow-auto'>
            <div className='modal-box relative space-y-2 max-w-xl w-full pt-10'>
                <div className='form-control relative'>
                    <TextareaAutosize
                        value={textContent}
                        onChange={handleTextContent}
                        placeholder={`What's on your mind?`}
                        className='bg-base-100 focus:outline-none text-lg pb-6 rounded-lg'
                        autoFocus
                        minRows={1}
                        maxLength={301}
                    />
                    <span className={`absolute bottom-0 right-0 bg-base-300 px-2 py-1 rounded-tl-sm text-xs font-semibold ${textContent.length > 280 && textContent.length <= 300 ? "text-warning" : textContent.length > 300 && "text-error"}`}>{textContentLength} | 300</span>
                </div>
                <div className={`rounded-lg py-2 relative ${!image && "hidden"}`}>
                    <RemoveImageButton setImage={setImage} setImagePreview={setImagePreview} />
                    <img className='rounded-lg w-full' src={imagePreview} alt="" />
                </div>
                {/* <div className="border-b border-base-300 my-2"></div> */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <ImageInput handleImage={handleImage} />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={!textContent || processing || textContent.length > 300}
                        type='submit'
                        className='btn btn-sm rounded btn-info disabled:bg-blue-900'
                    >
                        {processing ? <span className='gpt-loading-dots text-base-content'>Processing</span> : "Post"}
                    </button>
                </div>
                <CloseModalButton setShowModal={setShowModal} />
            </div>
        </section>
    );
};

export default CreatePostModal;

function ImageInput({ handleImage }) {
    return (
        <div title='Choose image' className="relative w-max">
            <input
                onChange={handleImage}
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept='image/*'
            />
            <div className="size-10 bg-base-300 text-xl text-info rounded-full flex items-center justify-center shadow-md cursor-pointer">
                <FaImage />
            </div>
        </div>
    )
}


function RemoveImageButton({ setImage, setImagePreview }) {

    function handleClick() {
        setImage("")
        setImagePreview("")
    }

    return (
        <button type='button' onClick={handleClick} className='bg-black/60 p-1 rounded-full absolute top-3 right-1 z-10'><GoX /></button>
    )
}