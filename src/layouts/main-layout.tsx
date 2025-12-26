import { memo } from "react";
import { Outlet } from "react-router";
import Navbar from '../component/navbar';
import Sidebar from "../component/sidebar";
import EndSideBar from "../component/end-sidebar";
const MainLayout = memo(() => {
    return(
        <section className="h-screen flex flex-col bg-primary">
            <Navbar/>
            <div className="flex-1 flex justify-between" >
                <Sidebar/>
                <Outlet/>
                <EndSideBar/>
            </div>
            <Navbar/>
        </section>
    )
});


export default MainLayout;