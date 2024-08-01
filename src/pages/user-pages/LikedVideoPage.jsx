import React from 'react';
import useAuth from '../../hooks/useAuth';
import SignInToContinue from '../../components/common/SignInToContinue';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { AiOutlineLike } from 'react-icons/ai';

const LikedVideoPage = () => {
    const { user, loading: authLoading } = useAuth()

    if (!user) {
        return <SignInToContinue Icon={AiOutlineLike} title='Liked videos' message={`Liked videos isn't viewable when you're signed out.`} />
    }
    if (authLoading) {
        return <LoadingSpinner />
    }

    return (
        <section className='my-container'>
            Liked videos
        </section>
    );
};

export default LikedVideoPage;