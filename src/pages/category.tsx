import { memo } from "react";
import Navbar from "../components/navbar";
import CategoryTable from "../components/category-table";

const CategoryPage = memo(() => {
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
            <Navbar/>
            <section className="mt-15 px-4 py-2 flex flex-col">
                 <button
                    className="
                        px-3 py-1 bg-blue-800 text-white 
                        rounded font-medium cursor-pointer self-end
                    "
                >
                    Add Category
                </button>
                <div className="mt-2">
                    <CategoryTable/>
                </div>
            </section>
        </div>
    )
});

export default CategoryPage;