import { useQuery } from "@tanstack/react-query";
import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { axiosInstance } from "../hooks/useAxios";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Player from "../components/Player";

export const VideoPlayerTest = () => {
    const { id } = useParams();
    // fetch video data
    const { data: video = {}, isLoading, error } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            const { data } = await axiosInstance(`/videos/get-video/${id}`)
            // console.log(data.data);
            return data.data
        }
    })

    const videoUrl = video?.video?.playback_url
    // console.log(videoUrl);
    // video player configurations
    const playerRef = useRef(null)
    const videoPlayerOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoUrl,
            type: "application/x-mpegURL" // maybe here, need some trial and error 
        }]
    }
    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on("waiting", () => {
            videojs.log("player is waiting");
        });

        player.on("dispose", () => {
            videojs.log("player will dispose");
        });
    };

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error) {
        console.error(error);
    }

    return (
        <section className="my-container max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden">
                <Player
                    options={videoPlayerOptions}
                    onReady={handlePlayerReady}
                />
            </div>
            <div className='my-2 space-y-1'>
                <h1 className='text-2xl font-semibold'>{video?.title}</h1>
                <h1 className=''>{video?.description}</h1>
            </div>
        </section>
    )
};


export default VideoPlayerTest;