import { memo, useCallback, useEffect, useState } from "react";
import CategoryCard from "./category-card";
import { getCategoryReport } from "../api/report.api";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";


const CategoryList = memo(() => {

    const [reports, setReports] = useState([]);
    const { month , year} = useSelector((store : RootState) => store.date);

    const fecthCategoryReport = useCallback( async () => {
       try {
        const data = await getCategoryReport({ month , year});
        console.log(data);
        
        setReports(data?.datas || []);
      } catch (error) {
        console.log(error);
      }
    },[month, year])

    useEffect(() => {
      fecthCategoryReport();
    }, [month, year])

    return(
        <section className="
            py-3 px-4 grid gap-4 grid-cols-1 
            min-[360px]:grid-cols-2 min-[548px]:grid-cols-3 
            min-[716px]:grid-cols-4 min-[912px]:grid-cols-5
            max-[415px]:mb-[52px] min-[415px]:mt-15
        "
        >
          {
           reports.map((cat , index) =>  (
            <CategoryCard key={index} category={cat}/>
           ))
            
          }
        </section>
    )
});

export default CategoryList;