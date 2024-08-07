import moment from 'moment';
import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GoAlert } from "react-icons/go";
import EditVideoModal from '../modals/EditVideoModal';


const UserProfileVideosSectionCard = ({ video }) => {
    const { likes, createdAt, thumbnail, title, duration } = video;
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const timestamps = moment(new Date(createdAt), "YYYYMMDD").fromNow();

    return (
        <div className='max-w-4xl mx-auto w-full'>
            <div className="grid grid-cols-4 sm:grid-cols-5 border border-base-300 rounded-md overflow-hidden">
                <figure className="relative aspect-video col-span-2">
                    <Link to={`/play-video/${video?._id}`}>
                        <img
                            src={thumbnail}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover hover:scale-[1.01] duration-500"
                        />
                        <div className="absolute rounded-tr bottom-0 left-0 bg-black bg-opacity-75 text-white px-2 py-1 text-xs">
                            {duration}
                        </div>
                    </Link>
                </figure>
                <div className="p-2 sm:p-4 flex-1 col-span-2 sm:col-span-3 leading-5">
                    <Link to={`/play-video/${video?._id}`}>
                        <h2 className="text-sm sm:text-lg lg:text-xl font-semibold line-clamp-2 sm:line-clamp-3 leading-5 mb-1 sm:mb-2">
                            {title}
                        </h2>
                    </Link>
                    <div className="text-xs sm:text-sm md:text-base text-color-gray flex flex-wrap items-center gap-1 leading-3 mb-2">
                        <span className='flex items-center gap-1'><AiFillLike className='text-info' /> {likes}</span>•
                        <span>{timestamps}</span>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setShowEditModal(true)} title='Edit' className='btn btn-sm rounded btn-neutral'>Edit</button>
                        <button onClick={() => setShowDeleteModal(true)} title='Delete' className='btn btn-sm rounded btn-neutral'>Delete</button>
                    </div>
                </div>
            </div>
            {showDeleteModal && <DeleteModal setShowDeleteModal={setShowDeleteModal} title={title} />}
            {showEditModal && <EditVideoModal videoId={video._id} setShowModal={setShowEditModal} />}
        </div>
    )
};

export default UserProfileVideosSectionCard;


function DeleteModal({ setShowDeleteModal, videoId, title }) {
    const [deleteText, setDeleteText] = useState("")

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'>
            <div className='max-h-[90vh] max-w-md w-full bg-base-100 p-6 rounded-lg mx-4'>
                <div className='text-center text-lg text-error flex items-center gap-1'><GoAlert />Delete video.</div>
                <h3 className='mb-3'>
                    Are you sure? You want to delete <span className='font-semibold'>"{title?.slice(0, 36)}..."</span>.
                    Once deleted it cannot be recovered.
                </h3>
                <div className='space-y-1 mb-3'>
                    <h3>Please write "<span className='font-semibold'>delete video</span>" to delete.</h3>
                    <input
                        onChange={(e) => setDeleteText(e.target.value)}
                        value={deleteText}
                        type="text"
                        className='input input-bordered w-full'
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button onClick={() => setShowDeleteModal(false)} className="btn btn-neutral btn-sm rounded">
                        Cancel
                    </button>
                    <button disabled={!(deleteText === "delete video")} className="btn btn-error btn-sm rounded">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}