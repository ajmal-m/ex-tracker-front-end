import { memo, useCallback, useEffect } from "react";
import Navbar from "../components/navbar";
import CategoryList from "../components/category-list";
import { getCategories } from "../api/category.api";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { setCategories } from "../store/categorySlice";

const DashboardPage = memo(() => {

    const dispatch = useDispatch<AppDispatch>();

    const fecthCategories = useCallback( async () => {
        try {
            const data = await getCategories({});
            dispatch(setCategories({ categories : data?.categories || []}));
        } catch (error) {
            console.log(error);
        }
    },[]);

    useEffect(() => {
        fecthCategories();
    },[])
    return(
        <div className="h-screen bg-[#030712] overflow-y-auto">
           <Navbar/>
           <CategoryList/>
        </div>
    )
});

export default DashboardPage;