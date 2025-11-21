import { memo, useState } from "react";


const AddExpenseModel = memo(() => {
    const [open, setOpen] = useState(false);
    const today = new Date().toISOString().slice(0, 10);

    const [ expenseData, setExpenseData] = useState({
        categoryId:'',
        amount:0,
        date: today
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setExpenseData(prev => ({ ...prev, [name]: value }));
    };
    return(
        <>
            <button className="
                self-end px-3 py-1 bg-blue-800 text-white 
                rounded font-medium cursor-pointer"
                onClick={() => setOpen(true)}
            >
                Add Expense
            </button>
            {
                open && (
                    <div  className="fixed inset-0 z-50 flex justify-center items-center bg-black/40" onClick={() => setOpen(false)}>
                        <div className="
                            min-w-80 min-h-80 bg-[#101828] dark:bg-[#101828] 
                            rounded border flex items-center justify-center"
                             onClick={(e) => e.stopPropagation()}
                        >
                            <form action="" className="w-full p-4 flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="category" className="text-xs">Category</label>
                                    <select 
                                        name="categoryId" id="category"  
                                        className="border border-white p-2 text-white rounded"
                                         value={expenseData.categoryId}
                                        onChange={handleChange}
                                    >
                                        <option value="Cate">categdqwdq</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="amount">Amount</label>
                                    <input 
                                        type="number" name="amount" id="amount"  
                                        className="border border-white p-2 text-white rounded"  
                                        onChange={handleChange}
                                        value={expenseData.amount}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="date">Date</label>
                                    <input 
                                        type="date" name="date" id="date"  
                                        className="border border-white p-2 text-white rounded"  
                                        value={expenseData.date}
                                        onChange={handleChange}
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

export default AddExpenseModel;