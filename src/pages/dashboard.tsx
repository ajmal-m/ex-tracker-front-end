import { memo } from "react";
import Navbar from "../components/navbar";
import CategoryList from "../components/category-list";

const DashboardPage = memo(() => {
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
           <Navbar/>
           <CategoryList/>
        </div>
    )
});

export default DashboardPage;