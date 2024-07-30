import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../hooks/useAxios';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import CommentsSection from '../components/VideoCommentBox';
import moment from 'moment';
import VideoPlayer from '../components/video/VideoPlayer';
import LikeSubscribe from '../components/video/LikeSubscribe';

const PlayVideoPage = () => {
  const { id } = useParams();

  const { data: video = {}, isLoading: isVideoLoading, error: videoFetchError } = useQuery({
    queryKey: [`video-data-${id}`],
    queryFn: async () => {
      const { data } = await axiosInstance(`/videos/get-video/${id}`)
      // console.log(data.data);
      return data.data
    }
  })

  if (isVideoLoading) {
    return <LoadingSkeleton />
  }
  if (videoFetchError) {
    console.error(videoFetchError);
  }

  return (
    <section className="my-container max-w-4xl mx-auto sm:pt-3 pb-10">
      <VideoPlayer videoUrl={video?.video?.playback_url} />
      <div className='space-y-2 sm:space-y-3 my-2 sm:my-4'>
        <div>
          <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>{video?.title}</h1>
        </div>
        <LikeSubscribe id={id} />
      </div>
      <CommentsSection />
    </section>
  );
};

export default PlayVideoPage;



const LoadingSkeleton = () => {
  return (
    <div className="my-container flex w-full flex-col gap-4">
      <div className="skeleton bg-base-200 rounded-lg aspect-video w-full"></div>
      <div className="skeleton bg-base-200 h-6 w-1/2"></div>
      <div className="flex items-center gap-4">
        <div className="skeleton bg-base-200 h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton bg-base-200 h-4 w-20"></div>
          <div className="skeleton bg-base-200 h-4 w-28"></div>
        </div>
      </div>
      <div className="skeleton bg-base-200 h-20 rounded-lg w-full"></div>
    </div>
  )
}