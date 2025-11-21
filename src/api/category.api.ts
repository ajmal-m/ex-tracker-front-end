import axiosInstance from "./axiosInstance";

export const getCategories = async ({  }) => {
    try {
        const {data} = await axiosInstance.get('/category');
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategories = async ({ id  } : { id : string}) => {
    try {
        const {data} = await axiosInstance.delete(`/category?id=${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};


export const createCategory = async ({ name } : { name : string}) => {
    try {
         const {data} = await axiosInstance.post('/category/create', { name});
         return data;
    } catch (error) {
        console.log(error);
    }
}

export const updateCategory = async ({ name , id } : { name : string , id : string}) => {
    try {
         const {data} = await axiosInstance.put('/category', { name , id});
         return data;
    } catch (error) {
        console.log(error);
    }
}