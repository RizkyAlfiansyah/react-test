import axios from "./axios";

export const getData = async () => {
    try{
        const {data} = await axios.get('v1/hiring');
        return data;
    } catch(err){
        console.log(err);
    }
};

export const postData = async (dataForm) => {
    try{
        const {data} = await axios.post('v1/hiring', dataForm);
        return data;
    } catch(err){
        console.log(err);
    }
};

export const deleteData = async (id) => {
    try{
        const {data} = await axios.delete(`v1/hiring/${id}`);
        return data;
    } catch(err){
        console.log(err);
    }
};