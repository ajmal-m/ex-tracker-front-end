import { memo } from "react";
import Navbar from "../components/navbar";
import BudgetTable from "../components/budget-table";
import AddBudgetModel from "../components/add-budget-model";

const BudgetPage = memo(() => {
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
           <Navbar/>
           <section className="mt-15 px-4 py-2 flex flex-col max-[415px]:mt-0">
                <AddBudgetModel text="Add Budget"/>
                <div className="mt-2">
                    <BudgetTable/>
                </div>
           </section>
        </div>
    )
});

export default BudgetPage;