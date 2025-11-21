import axiosInstance from "./axiosInstance";


export const createExpense = async ({ categoryId , month, year, expense } : {
    categoryId : string;
    month:number;
    year:number;
    expense:number;
}) => {
    try {
        const {data} = await axiosInstance.post("/expense/create", { 
            categoryId,
            month,
            year,
            expense
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}