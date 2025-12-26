import { memo } from "react";
import { Outlet } from "react-router";
import Navbar from "../component/nav-bar";

const MainLayout = memo(() => {
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
});


export default MainLayout;