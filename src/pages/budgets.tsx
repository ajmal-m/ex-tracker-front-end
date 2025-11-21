import { memo } from "react";
import Navbar from "../components/navbar";
import CategoryTable from "../components/category-table";

const BudgetPage = memo(() => {
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
           <Navbar/>
           <section className="mt-25">
                <CategoryTable/>
           </section>
        </div>
    )
});

export default BudgetPage;