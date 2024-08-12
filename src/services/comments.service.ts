import {axiosInstance} from "./api.service";
import {AxiosResponse} from "axios";
import {IComment} from "../interfaces/comment.interface";

export const commentsService = {
    getAllComments: async ():Promise<AxiosResponse<IComment[]>> => {
        return await axiosInstance.get("/comments")
    }
}