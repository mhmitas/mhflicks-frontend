import { useForm } from "react-hook-form"
import CloseModalButton from "../common/CloseModalButton"
import { axiosInstance } from "../../hooks/useAxios"
import toast from "react-hot-toast"
import { useState } from "react"

function UpdateProfileModal({ userData, setShowModal, refetch }) {
    const [processing, setProcessing] = useState(false)
    const { handleSubmit, register } = useForm()
    const [avatarPreview, setAvatarPreview] = useState(userData?.avatar || "/default-avatar.jpg")
    const [coverImagePreview, setCoverImagePreview] = useState(userData?.coverImage || "default-cover.png")
    // console.log(userData);

    const formSubmit = async (data) => {
        console.log(data);
        setProcessing(true)
        try {
            const formData = new FormData()
            formData.append("avatar", data.avatar[0])
            formData.append("coverImage", data.coverImage[0])
            formData.append("fullName", data.fullName)
            formData.append("about", data.about)
            const res = await axiosInstance.post(`/users/update-profile/${userData?._id}`, formData)
            console.log(res.data);
            if (res.status === 200) {
                toast.success("Updated")
            }
            refetch()
            setShowModal(false)
            setProcessing(false)
        } catch (err) {
            setProcessing(false)
            console.error(err);
        }
    }

    return (
        <div className='modal modal-open'>
            <form onSubmit={handleSubmit(formSubmit)} className='modal-box space-y-2 relative'>
                <div className='form-control'>
                    <label className='label label-text'>Name</label>
                    <input {...register("fullName")} required defaultValue={userData?.fullName} type="text" className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label label-text'>About</label>
                    <textarea {...register("about")} defaultValue={userData?.about} type="text" className='textarea textarea-bordered mb-4' />
                </div>
                <div className='border border-base-300 p-4 rounded-lg'>
                    <h3 className='text-center w-full'>Profile Image</h3>
                    <img className="w-2/3 overflow-hidden mx-auto my-2 rounded-full aspect-square border" src={avatarPreview} alt="" />
                    <div className="form-control w-full">
                        <input
                            {...register("avatar")}
                            accept="Image/*"
                            onChange={e => {
                                // console.log(e.target.files[0]);
                                setAvatarPreview(URL.createObjectURL(e.target.files[0]));

                            }}
                            type="file"
                            className='file-input file-input-bordered input-sm sm:input-md'
                        />
                    </div>
                </div>
                <div className='border border-base-300 p-4 rounded-lg'>
                    <h3 className='text-center w-full '>Cover Image</h3>
                    <figure className="flex justify-center items-center overflow-hidden rounded-md aspect-[16/4] my-2"><img className="w-full mx-auto rounded-md" src={coverImagePreview} alt="" /></figure>
                    <div className="form-control w-full">
                        <input
                            {...register("coverImage")}
                            accept="Image/*"
                            onChange={e => {
                                // console.log(e.target.files[0]);
                                setCoverImagePreview(URL.createObjectURL(e.target.files[0]));

                            }}
                            type="file"
                            className='file-input file-input-bordered input-sm sm:input-md'
                        />
                    </div>
                </div>
                {/* <div className='form-control'>
                    <label className='label label-text'>Cover Image</label>
                    <input {...register("coverImage")} accept="Image/*" type="file" className='file-input file-input-bordered' />
                </div> */}
                <div className='flex items-center justify-center pt-4'>
                    <button type='submit' disabled={processing} className='btn btn-sm rounded btn-secondary'>{
                        processing ? <span className="loading loading-spinner"></span> : "Update"
                    }</button>
                </div>
                <CloseModalButton setShowModal={setShowModal} />

            </form>
        </div>
    )
}

export default UpdateProfileModal