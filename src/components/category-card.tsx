import { memo } from "react";
import ProgressBar from "./progress-bar";
import Badge from "./badge";


export const CategoryCard = memo(() => {
    return(
         <div
            className="min-w-[120px] max-h-[418px] border border-[#7a8880] 
                rounded flex flex-col items-start justify-center gap-2 shadow
                py-3 text-[12px] px-2 bg-[#101828] text-white
            "
        >
            <h1>Catgeory name</h1>
            <ProgressBar limit={5000} spent={3400}/>
            <p>Remaining : 2000</p>
            <Badge/>
            <button className="self-end px-3 py-1 bg-blue-800 text-white rounded font-medium cursor-pointer">Add Expense</button>
        </div>
    )
});

export default CategoryCard;