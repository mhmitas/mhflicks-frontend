import React from 'react';
import UserProfileHeader from '../../components/signed-in-user/UserProfilePageHeader';

const UserProfilePage = () => {
    return (
        <section className='my-container'>
            <UserProfileHeader />
            <div className='max-w-full flex'>
                <div className='flex overflow-x-auto'>
                    <Hello />
                    <Hello />
                    <Hello />
                    <Hello />
                    <Hello />
                    <Hello />
                    <Hello />
                    <Hello />
                    <Hello />
                </div>
            </div>
        </section>
    );
};

export default UserProfilePage;

function Hello() {
    return (
        <div>
            <div className='w-72 h-52 border m-1'>
                lorem200
            </div>
        </div>
    )
}