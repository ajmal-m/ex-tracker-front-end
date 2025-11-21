import { memo, useState } from "react";
import { months } from "../const";
import { years } from "../const";
import { Link } from 'react-router-dom';

const Navbar = memo(() => {

    const currentMonthIndex = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const [selectedMonth, setSelectedMonth] = useState(months[currentMonthIndex]);
    const [selectedYear, setSelectedYear] = useState(currentYear);

    return(
        <nav className="w-full h-14 bg-[#101828] px-4 flex items-center justify-between fixed max-[415px]:bottom-0">
            <h1 className="text-white text-xl max-[400px]:text-sm">{selectedMonth} {selectedYear}</h1>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-4 max-[414px]:text-[12px]">
                    <Link to={'/'} className="text-white">Home</Link>
                    <Link to={'/setting/category'} className="text-white">Categories</Link>
                    <Link to={'/setting/budgets'}  className="text-white">Budgets</Link>
                </div>
                <div className="flex items-center gap-1">
                    <select 
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)} 
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
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))} 
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