import { memo, useCallback, useEffect, useState } from "react";
import { type AppDispatch, type RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { createBudgets, getBudgets, updateBudget } from "../api/budget.api";
import { getCategories } from "../api/category.api";
import toast from "react-hot-toast";
import { setBudgets } from "../store/budgetSlice";

type Budget = {
    _id:string;
    limit: number;
    categoryId:{
        _id:string;
        name: string
    }
};

const AddBudgetModel = memo(( { text  , budget} : { text : string , budget ?: Budget ,   }) => {

    const [open, setOpen] = useState(false);
    const {month, year} = useSelector((store : RootState) => store.date);
    const [categories, setCategories] = useState([]);
    const [ budgetData, setBudgetdata] = useState({
       categoryId: budget?.categoryId?._id || "",
       limit: budget?.limit
    });
    const dispatch = useDispatch<AppDispatch>();


    const fetchCategories = useCallback(async () => {
        try {
            const data = await getCategories({});
            if(data.categories.length){
                setCategories(data.categories);
            }
        } catch (error) {
            console.log(error);
        }
    },[]);


    useEffect(() => {
        fetchCategories();
    } ,[]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        try {
            const { name, value } = e.target;
            setBudgetdata(prev => ({ ...prev, [name]: value }));
        } catch (error) {
            console.log(error);
        }
    }, []);


    const handleSubmit = useCallback( async ( e : React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            let data;
            if(text !== "Edit"){
                data = await createBudgets({ categoryId : budgetData.categoryId , month :Number(month), year : Number(year), limit : Number(budgetData.limit) });
            }else{
                data = await updateBudget({ categoryId : budgetData.categoryId , month :Number(month), year : Number(year), limit : Number(budgetData.limit) , id : budget?._id || "" });
            }
           if(!data){
            return toast.error("This category already has a budget for the selected month and year")
           }
           const res = await getBudgets({ month , year });
           dispatch(setBudgets({ budgets : res?.budgets || [] }));
           setOpen(false);
        } catch (error) {
            console.log(error);
        }
    },[budgetData , month , year , budget])


    return(
        <>
            <button className="
                self-end px-3 py-1 bg-blue-800 text-white 
                rounded font-medium cursor-pointer"
                onClick={() => setOpen(true)}
            >
               {text}
            </button>
            {
                open && (
                    <div  className="fixed inset-0 z-50 flex justify-center items-center bg-black/40" onClick={() => setOpen(false)}>
                        <div className="
                            min-w-80 min-h-10 bg-[#101828] dark:bg-[#101828] 
                            rounded border flex items-center justify-center"
                             onClick={(e) => e.stopPropagation()}
                        >
                            <form onSubmit={handleSubmit} className="w-full p-4 flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="category" className="text-xs text-white">Category</label>
                                    <select 
                                        name="categoryId" id="category"  
                                        className="border border-white bg-blue-800 p-2 text-white rounded"
                                        value={budgetData.categoryId}
                                        onChange={handleChange}
                                    >
                                        {
                                            categories.map((item : { name : string ; _id : string;}) => (
                                                <option value={item._id}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="limit" className="text-xs text-white">Limit</label>
                                     <input 
                                        type="number" name="limit" id="limit"  
                                        className="border border-white p-2 text-white rounded"  
                                        onChange={handleChange}
                                        value={budgetData.limit}
                                    />
                                </div>
                                <button
                                    className="w-full border border-white p-2 bg-[#101828] 
                                        transition-all duration-300 ease-in cursor-pointer rounded 
                                        text-white hover:bg-[#233354] uppercase
                                    "
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
});

export default AddBudgetModel;