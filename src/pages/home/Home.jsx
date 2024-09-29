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


function UnfortunatelyModal({ setShowModal }) {
    return (
        <div className='modal modal-open'>
            <div className='modal-box max-w-2xl h-max w-full rounded-lg relative py-8'>
                <div className='rounded-md w-full aspect-video overflow-hidden'>
                    <iframe
                        src={`https://www.youtube.com/embed/WXOMfrcQ72s?si=JdXybLk1ocdxiPSF`}
                        title={`YouTube video player`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className='space-y-2 text-lg mt-4'>
                    <h3>I apologize for the inconvenience. Unfortunately, the live site is currently unavailable due to technical difficulties with hosting the app's server. I was unable to set up hosting without a credit card or similar payment method, which is a requirement for most platforms, even those offering free options.</h3>
                    <h3>In the meantime, I invite you to watch this video for a brief overview of the project I've developed.</h3>
                </div>
                <button onClick={() => setShowModal(false)} className='btn btn-sm hover:btn-error font-bold text-xl absolute top-0 right-0'><GoX /></button>
            </div>
        </div>
    )
}