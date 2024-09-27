import React, { useEffect, useState } from 'react';
import HomeVideosSection from '../../components/root-layout-components/HomeVideosSection';
import { GoX } from 'react-icons/go';

const Home = () => {
    const [showUnfortunatelyModal, setShowUnfortunatelyModal] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowUnfortunatelyModal(true)
        }, 1000);

        return () => {
            clearTimeout()
        }
    }, [])


    return (
        <div className='my-container'>
            <HomeVideosSection />
            {showUnfortunatelyModal && <UnfortunatelyModal setShowModal={setShowUnfortunatelyModal} />}
        </div>
    );
};

export default Home;


function UnfortunatelyModal() {
    return (
        <div className='modal modal-open'>
            <div className='modal-box max-w-2xl h-max w-full rounded-lg relative py-8'>
                <div className='rounded-md overflow-hidden'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WXOMfrcQ72s?si=JdXybLk1ocdxiPSF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full'></iframe>
                </div>
                <div className='space-y-2 text-lg mt-4'>
                    <h3>I apologize for the inconvenience. Unfortunately, the live site is currently unavailable due to technical difficulties with hosting the app's server. I was unable to set up hosting without a credit card or similar payment method, which is a requirement for most platforms, even those offering free options.</h3>
                    <h3>In the meantime, I invite you to watch this video for a brief overview of the project I've developed.</h3>
                </div>
                <button className='btn btn-sm btn-error font-bold btn-circle text-xl absolute top-1 right-1'><GoX /></button>
            </div>
        </div>
    )
}