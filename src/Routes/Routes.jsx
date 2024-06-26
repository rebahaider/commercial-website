import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import SingleEstate from "../Pages/Estates/SingleEstate";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/updateProfile",
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: "/singleEstate/:id",
                element: <PrivateRoutes><SingleEstate></SingleEstate></PrivateRoutes>,
                loader: () => fetch('fakeData.json')
            },
            {
                path: "/contactUs",
                element: <PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>
            }
        ]
    },
]);