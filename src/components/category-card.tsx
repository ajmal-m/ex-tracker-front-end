import { memo } from "react";
import ProgressBar from "./progress-bar";
import Badge from "./badge";
import AddExpenseModel from "./add-expense-model";

export interface Category {
  _id: string;
  name: string;
  userId: string;
  createdAt: string;   // ISO Date string
  updatedAt: string;   // ISO Date string
  __v: number;
}

export interface ExpenseSummary {
  spend: number;
  count: number;
  category: Category;      
  limit: number | null;   
}


export const CategoryCard = memo(({ category } : { category : ExpenseSummary}) => {
    return(
         <div
            className="min-w-[120px] max-h-[418px] border border-[#7a8880] 
                py-3 text-[12px] px-2 bg-[#101828] text-white flex flex-col gap-2
            "
        >
            <h1>{category.category.name}</h1>
            {
                category.limit ? (<ProgressBar limit={Number(category.limit)} spent={Number(category.spend)}/>) : (<p>No Limit</p>)
            }
            <p>Remaining : {
                !category.limit ? (<span>No Limit</span>) :(
                Math.max(0, Number(category.limit) - Number(category.spend) ) )
            }</p>
            {
                category.spend >= Number(category.limit) && (<Badge/>)
            }
            <AddExpenseModel/>
        </div>
    )
});

export default CategoryCard;