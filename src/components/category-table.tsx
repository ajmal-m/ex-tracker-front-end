import React, { useCallback, useEffect, useState } from "react";
import AddCategoryModel from "./add-category-model";
import DeleteModel from "./delete-model";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";
import { getCategories  } from "../api/category.api";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";
import { setCategories } from "../store/categorySlice";

type Category = {
    name: string;
    _id:string;
};


const CategoryTable: React.FC = () => {

    const {categories} = useSelector((store : RootState) => store.category);
    const dispatch = useDispatch<AppDispatch>();

    const fetchCategories = useCallback(async () => {
        const data = await getCategories({});
        if(data?.categories?.length){
            dispatch(setCategories({ categories : data.categories }));
        }
    }, []);

    useEffect(() => {
        fetchCategories();
    },[])

    const deleteCategory = useCallback(async (id : string) => {
        try {
            const {data} = await axiosInstance.delete(`/category?id=${id}`);
            toast.success(data.message);
            fetchCategories();
        } catch (error) {
            console.log(error);
        }
    },[]);


    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-blue-950 border-b rounded-base text-white">
                    <tr>
                        <th className="px-6 py-3 font-medium">Category name</th>
                        <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    { categories.length > 0 && categories.map((item : Category, index) => (
                        <tr
                            key={index}
                            className="bg-blue-950 border-b border-default last:border-none text-white"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                            >
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                   <AddCategoryModel text={"Edit"} category={item}/>
                                    <DeleteModel deleteFunction={deleteCategory} id={item._id}/>
                                </div>
                            </td>          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;
