import { memo } from "react";
import Navbar from "../components/navbar";
import CategoryTable from "../components/category-table";
import AddCategoryModel from "../components/add-category-model";

const CategoryPage = memo(() => {
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
            <Navbar/>
            <section className="mt-15 px-4 py-2 flex flex-col">
                 <AddCategoryModel text="Add Category"/>
                <div className="mt-2">
                    <CategoryTable/>
                </div>
            </section>
        </div>
    )
});

export default CategoryPage;