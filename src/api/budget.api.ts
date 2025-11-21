import axiosInstance from "./axiosInstance";

export const getBudgets = async (
        {  month , year } : 
        { 
            month : number; year: number 
        }
    ) => {
    try {
        const {data} = await axiosInstance.get(`/budget?month=${month}&year=${year}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const createBudgets = async (
        { categoryId , limit , month , year } : 
        { 
            categoryId : string; limit : number ; 
            month : number; year: number 
        }
    ) => {
    try {
        const {data} = await axiosInstance.post("/budget/create", {
            categoryId,
            limit,
            month,
            year
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateBudget = async (
        { categoryId , limit , month , year , id } : 
        { 
            categoryId : string; limit : number ; 
            month : number; year: number ; id: string
        }
    ) => {
    try {
        const {data} = await axiosInstance.put("/budget", {
            categoryId,
            limit,
            month,
            year,
            id
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteBudgets = async (
        { id } : 
        { 
            id: string
        }
    ) => {
    try {
        const {data} = await axiosInstance.delete(`/budget?id=${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};