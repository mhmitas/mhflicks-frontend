import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home/Home";
import SignInForm from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import UserProfilePage from "../pages/user-pages/UserProfilePage";
import WatchHistory from "../pages/user-pages/WatchHistory";
import LikedVideoPage from "../pages/user-pages/LikedVideoPage";
import SavedPlaylistsPage from "../pages/user-pages/SavedPlaylistsPage";
import PrivetRoute from "./PrivetRoute";
import PlayVideoPage from "../pages/PlayVideoPage";
import ErrorPage from "../error-page";
import UserPublicProfile from "../pages/UserPublicProfile";
import UserPublicProfileVideosSection from "../components/UserPublicProfileComponents/UserPublicProfileVideosSection";
import UserPublicProfilePostsSection from "../components/UserPublicProfileComponents/UserPublicProfilePostsSection";
import Videos from "../pages/videos/Videos";
import Posts from "../pages/posts/Posts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/videos",
                element: <Videos />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: "user-profile",
                element: <PrivetRoute>
                    <UserProfilePage />
                </PrivetRoute>
            },
            {
                path: "profile/:username",
                element: <UserPublicProfile />,
                children: [
                    {
                        index: true,
                        element: <UserPublicProfileVideosSection />
                    },
                    {
                        path: "posts",
                        element: <UserPublicProfilePostsSection />
                    },
                ]
            },
            {
                path: "history",
                element: <WatchHistory />
            },
            {
                path: "liked-videos",
                element: <LikedVideoPage />
            },
            {
                path: "playlists",
                element: <SavedPlaylistsPage />
            },
            {
                path: "play-video/:id",
                element: <PlayVideoPage />
            },
        ]
    },
    {
        path: "/sign-in",
        element: <SignInForm />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    }
])