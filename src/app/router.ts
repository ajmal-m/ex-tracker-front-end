import { lazy } from "react";
import { createBrowserRouter } from "react-router";import MainLayout from "../layouts/main-layout";
import AuthLayout from "../layouts/auth-layout";

const HomePage = lazy(() => import("../pages/home"));
const SignUpPage = lazy(() => import("../pages/sign-up"));
const LoginPage = lazy(() => import("../pages/login"));

const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:HomePage
            }
        ]
    },
    {
        path:"/",
        Component:AuthLayout,
        children:[
            {
                path:"login",
                Component:LoginPage
            },
            {
                path:"sign-up",
                Component:SignUpPage
            }
        ]
    }
]);

export default router;