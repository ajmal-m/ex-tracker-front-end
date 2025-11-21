import { memo } from "react";
import Navbar from "../components/navbar";

const CategoryPage = memo(() => {
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
            <Navbar/>
        </div>
    )
});

export default CategoryPage;