import { memo, useCallback, useState } from "react";


const AddBudgetModel = memo(( { text } : { text : string}) => {
    const [open, setOpen] = useState(false);

    const [ budgetData, setBudgetdata] = useState({
       categoryId:"",
       limit:0
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBudgetdata(prev => ({ ...prev, [name]: value }));
    }, []);
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
                            <form action="" className="w-full p-4 flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="category" className="text-xs text-white">Category</label>
                                    <select 
                                        name="categoryId" id="category"  
                                        className="border border-white p-2 text-white rounded"
                                         value={budgetData.categoryId}
                                        onChange={handleChange}
                                    >
                                        <option value="Cate">categdqwdq</option>
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