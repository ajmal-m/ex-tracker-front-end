import { memo } from "react";
import Navbar from "../components/navbar";

const BudgetPage = memo(() => {
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
           <Navbar/>
           <section className="mt-25">
           
           </section>
        </div>
    )
});

export default BudgetPage;