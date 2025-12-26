import { memo } from "react";
import { NavLink } from "react-router";


const LINKS = [
    { name:"Home", path:"/"},
    { name:"Expenses" , path:"/expesnes"},
    { name:"Categories", path:"/categories"},
    { name:"Budgets" , path:"/budgets"}
];

const Sidebar = memo(() => {
    return(
        <div className="w-75 h-full bg-primary px-4">
            <div className="flex flex-col items-center">
                <h1 className="text-secondtext font-rubik font-medium text-center text-[16px]">AJMAL M</h1>
                <ul className="mt-6 flex flex-col gap-6">
                    {
                        LINKS.map((link ) => (
                            <NavLink 
                                className={({ isActive } ) => `font-rubik text-[18px] text-secondtext ${isActive && 'bg-[#28282A] px-4 py-2 rounded'}`}
                                to={link.path}
                            >
                                {link.name}
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
});

export default Sidebar;