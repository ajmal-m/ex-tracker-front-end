import React, { useCallback, useEffect } from "react";
import DeleteModel from "./delete-model";
import { deleteBudgets, getBudgets } from "../api/budget.api";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { setBudgets } from "../store/budgetSlice";
import AddBudgetModel from "./add-budget-model";

type Budget = {
    _id:string;
    limit: number;
    categoryId:{
        name: string
    }
};


const BudgetTable: React.FC = () => {
    const { budgets } = useSelector((store : RootState ) => store.budget );
    const {month , year} = useSelector((store : RootState) => store.date);
    const dispatch = useDispatch<AppDispatch>();

    const fetchBudgets = useCallback( async () => {
        const data = await getBudgets({
            month,
            year
        });
        if(data?.budgets){
            dispatch(setBudgets({ budgets : data.budgets }));
        }
    },[month, year]);


    useEffect(() => {
        fetchBudgets()
    },[month, year]);

    const deleteBudget = useCallback( async (id : string) => {
        try {
            await deleteBudgets({ id });
            fetchBudgets();
        } catch (error) {
            console.log(error);
        }
    },[])


    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-blue-950 border-b rounded-base text-white">
                    <tr>
                        <th className="px-6 py-3 font-medium">Budget name</th>
                         <th className="px-6 py-3 font-medium">Limit</th>
                        <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {budgets.map((item : Budget, index) => (
                        <tr
                            key={index}
                            className="bg-blue-950 border-b border-default last:border-none text-white"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                            >
                                {item.categoryId.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.limit}
                            </td>  
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                   <AddBudgetModel text="Edit" budget={item}/>
                                    <DeleteModel id={item._id} deleteFunction={deleteBudget}/>
                                </div>
                            </td>          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BudgetTable;
