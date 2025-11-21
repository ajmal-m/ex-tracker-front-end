import { memo, useState } from "react";
import { months } from "../const";
import { years } from "../const";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";
import { updateDate } from "../store/dateSlice";

const Navbar = memo(() => {

    const {month, year} = useSelector(( store : RootState) => store.date);
    const dispatch = useDispatch<AppDispatch>();

    return(
        <nav className="w-full h-14 bg-[#101828] px-4 flex items-center justify-between fixed max-[415px]:bottom-0">
            <h1 className="text-white text-xl max-[400px]:text-sm">{month} {year}</h1>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-4 max-[414px]:text-[12px]">
                    <Link to={'/'} className="text-white">Home</Link>
                    <Link to={'/setting/category'} className="text-white">Categories</Link>
                    <Link to={'/setting/budgets'}  className="text-white">Budgets</Link>
                </div>
                <div className="flex items-center gap-1">
                    <select 
                        value={month}
                        onChange={(e) => dispatch(updateDate({ name:'month' , value: e.target.value}))} 
                        name="month" id="month" 
                        className="text-white rounded bg-black px-3 py-1 max-[400px]:text-sm"
                    >
                        {
                            months.map((month) => (
                                <option  value={month} key={month}>
                                    {month}
                                </option>
                            ))
                        }
                    </select>

                    <select 
                        value={year}
                        onChange={ (e) => dispatch(updateDate({ name:"year" , value : e.target.value })) } 
                        name="year" id="year" 
                        className="text-white rounded bg-black px-3 py-1 max-[400px]:text-sm"
                    >
                        {
                            years.map((year) => (
                                <option  value={year} key={year}>
                                    {year}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </nav>
    )
});

export default Navbar;