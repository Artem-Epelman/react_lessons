import {axiosInstance} from "./api.service";
import {AxiosResponse} from "axios";
import {IPost} from "../interfaces/post.interface";
import users from "../components/Users/Users";

export const postService = {
    getAllPost: async ():Promise<AxiosResponse<IPost[]>> => {
        return await axiosInstance.get("/posts")
    },

    getAllPostsByUserId: async (userId:string):Promise<AxiosResponse<IPost[]>> => {
        return await axiosInstance.get(`/users/${userId}/posts`)
    }
}

