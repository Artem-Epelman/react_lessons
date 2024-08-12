import React, {FC} from 'react';
import {IPost} from "../../../interfaces/post.interface";

interface IPostProps {
    post:IPost
}




const Post:FC<IPostProps> = ({post}) => {
    return (
        <div>
            {post.id} - {post.title}
        </div>
    );
};

export default Post;