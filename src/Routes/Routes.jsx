import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";
import Contact from "../page/Contact/Contact";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import Product from "../page/Product/Product";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product',
                element: <PrivetRoutes><Product/></PrivetRoutes>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])
