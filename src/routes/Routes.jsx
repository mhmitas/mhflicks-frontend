import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home/Home";
import SignInForm from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import UserProfilePage from "../pages/user-pages/UserProfilePage";
import WatchHistory from "../pages/user-pages/WatchHistory";
import LikedVideoPage from "../pages/user-pages/LikedVideoPage";
import SavedPlaylistsPage from "../pages/user-pages/SavedPlaylistsPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/user-profile",
                element: <UserProfilePage />
            },
            {
                path: "/history",
                element: <WatchHistory />
            },
            {
                path: "/liked-videos",
                element: <LikedVideoPage />
            },
            {
                path: "/playlists",
                element: <SavedPlaylistsPage />
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