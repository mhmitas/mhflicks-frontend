import React, { useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Player from "../components/Player";

export const VideoPlayer = ({ videoUrl }) => {
    // video player configurations
    const playerRef = useRef(null)
    const videoPlayerOptions = {
        controls: true,
        autoplay: true,
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

    return (
        <div className="rounded-lg overflow-hidden">
            <Player
                options={videoPlayerOptions}
                onReady={handlePlayerReady}
            />
        </div>
    )
};


export default VideoPlayer;