import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home/Home";
import SignInForm from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
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