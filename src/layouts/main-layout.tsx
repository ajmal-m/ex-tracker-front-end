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
                <div className="flex-1 bg-secondary rounded-2xl p-4 text-secondtext font-rubik overflow-y-auto h-[90vh]">
                    <Outlet/>
                </div>
                <EndSideBar/>
            </div>
            <Navbar/>
        </section>
    )
});


export default MainLayout;