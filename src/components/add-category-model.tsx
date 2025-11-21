import { memo, useCallback, useState } from "react";


const AddCategoryModel = memo(( { text } : { text : string}) => {
    const [open, setOpen] = useState(false);

    const [ categoryData, setCategoryData] = useState({
       name:""
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCategoryData(prev => ({ ...prev, [name]: value }));
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
                                    <label htmlFor="name" className="text-white">Name</label>
                                    <input 
                                        type="text" name="name" id="name"  
                                        className="border border-white p-2 text-white rounded"  
                                        value={categoryData.name}
                                        onChange={handleChange}
                                        placeholder="Enter category name"
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

export default AddCategoryModel;