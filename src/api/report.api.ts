import axiosInstance from "./axiosInstance";

export const getCategoryReport = async ({ month , year} : { month : number, year:number}) => {
    try {
        const {data}= await axiosInstance.get(`/report/category-wise?month=${month}&year=${year}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}