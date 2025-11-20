import { memo } from "react";
import CategoryCard from "./category-card";


const CategoryList = memo(() => {
    return(
        <section className="
            py-3 px-4 grid gap-4 grid-cols-1 
            min-[360px]:grid-cols-2 min-[548px]:grid-cols-3 
            min-[716px]:grid-cols-4 min-[912px]:grid-cols-5
            max-[415px]:mb-[52px] min-[415px]:mt-15
        "
        >
          {
            new Array(100).fill(8).map((_,i) => (
                <CategoryCard/>
            ))
          }
        </section>
    )
});

export default CategoryList;