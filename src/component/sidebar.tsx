import { memo } from "react";

const Sidebar = memo(() => {
    return(
        <div className="w-75 h-full bg-primary px-4">
            <div className="flex flex-col items-center">
                <h1 className="text-secondtext font-rubik font-medium text-center text-[16px]">AJMAL M</h1>
            </div>
        </div>
    )
});

export default Sidebar;