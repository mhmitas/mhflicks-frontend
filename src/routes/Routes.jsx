import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home/Home";
import SignInForm from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import UserProfilePage from "../pages/user-pages/UserProfilePage";


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
            }
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