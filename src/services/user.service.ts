import {axiosInstance} from "./api.service";
import {AxiosResponse} from "axios";
import {IUser} from "../interfaces/user.interface";


export const userService = {
    getAllUsers: async ():Promise<AxiosResponse<IUser[]>> => {
        return await axiosInstance.get("/users");
    }
}