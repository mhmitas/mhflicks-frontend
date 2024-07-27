import { useForm } from "react-hook-form"
import CloseModalButton from "../common/CloseModalButton"
import { axiosInstance } from "../../hooks/useAxios"
import toast from "react-hot-toast"
import { useState } from "react"

function UpdateProfileModal({ user, setShowModal, refetch }) {
    const [processing, setProcessing] = useState(false)
    const { handleSubmit, register } = useForm()

    const formSubmit = async (data) => {
        // console.log(data);
        setProcessing(true)
        try {
            const formData = new FormData()
            formData.append("avatar", data.avatar[0])
            formData.append("coverImage", data.coverImage[0])
            formData.append("fullName", data.fullName)
            const res = await axiosInstance.post(`/users/update-profile/${user?.email}`, formData)
            if (res.data.data.modifiedCount > 0) {
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
                    <input {...register("fullName")} required defaultValue={user?.fullName} type="text" className='input input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label label-text'>Profile Image</label>
                    <input {...register("avatar")} type="file" className='file-input file-input-bordered' />
                </div>
                <div className='form-control'>
                    <label className='label label-text'>Cover Image</label>
                    <input {...register("coverImage")} type="file" className='file-input file-input-bordered' />
                </div>
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