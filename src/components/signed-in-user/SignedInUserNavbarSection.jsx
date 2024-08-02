import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import { axiosInstance } from '../../hooks/useAxios';

const SignedInUserNavbarSection = () => {
    const [showModal, setShowModal] = useState(false)
    const { user, loading, setUser } = useAuth()

    async function handleSignOut() {
        try {
            const res = await axiosInstance(`/users/sign-out`)
            if (res.data.success) {
                setUser(null)
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='flex items-center gap-2'>
            <button className='btn hidden sm:flex  btn-sm md:btn-md btn-ghost btn-circle'><FaBell size={20} /></button>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full border border-base-300">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user?.avatar} />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-200 rounded-lg z-[1] mt-3 w-52 p-2 shadow">
                    <li><button onClick={() => setShowModal(true)}>Profile</button></li>
                    <li className='flex sm:hidden'>
                        <a className="justify-between items-center">Notifications<FaBell /></a>
                    </li>
                    <li>
                        <button onClick={handleSignOut} className="justify-between items-center">Sign Out<FaSignOutAlt /></button>
                    </li>
                </ul>
            </div>
            {showModal && <ProfileModal user={user} setShowModal={setShowModal} />}
        </div>
    );
};

export default SignedInUserNavbarSection;


function ProfileModal({ user, setShowModal }) {

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setShowModal(false)
        }
    }

    return (
        <div onClick={handleOverlayClick} className='modal modal-open' >
            <div className='modal-box max-w-96'>
                <figure><img src={user?.avatar} alt={user.fullName} className='w-16 rounded-full h-16 m-auto' /></figure>
                <div className='text-center'>
                    <h3 className='text-xl '>{user?.fullName}</h3>
                    <h3>{user?.email}</h3>
                </div>
            </div>
        </div >
    )
}