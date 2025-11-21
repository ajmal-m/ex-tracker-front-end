import { memo, useState } from "react";


const DeleteModel = memo(( ) => {
    const [open, setOpen] = useState(false);

    return(
        <>
            <button className="
                self-end px-3 py-1 bg-red-900 text-white 
                rounded font-medium cursor-pointer"
                onClick={() => setOpen(true)}
            >
               Delete
            </button>
            {
                open && (
                    <div  className="fixed inset-0 z-50 flex justify-center items-center bg-black/40" onClick={() => setOpen(false)}>
                        <div className="
                            min-w-80 min-h-10 bg-[#101828] dark:bg-[#101828] 
                            rounded border flex items-center justify-center flex-col gap-2 p-3"
                             onClick={(e) => e.stopPropagation()}
                        >
                            <p>Are you sure you want to delete this?</p>
                            <div className="flex items-center gap-2">

                                 <button className="
                                    self-end px-3 py-1 bg-blue-600 text-white 
                                    rounded font-medium cursor-pointer"
                                    onClick={() => setOpen(false)}
                                >
                                    cancel
                                </button>

                                <button className="
                                    self-end px-3 py-1 bg-red-900 text-white 
                                    rounded font-medium cursor-pointer"
                                    onClick={() => setOpen(true)}
                                >
                                    Delete
                                </button>
                    
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
});

export default DeleteModel;