import axios, {AxiosResponse} from 'axios'
import {IUser} from "../models/user";

let axiosInstance =  axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Accept': 'application/json','Content-Type':'application/json'},
});


const getAllUsers = ():Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance.get('/users')
}



export {
    getAllUsers,
}






