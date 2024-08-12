import React, {FC, useEffect, useState} from 'react';
import {postService} from "../../../services/post.service";
import {useParams} from "react-router-dom";
import {IPost} from "../../../interfaces/post.interface";
import {IUser} from "../../../interfaces/user.interface";
import user from "../../Users/User/User";





const PostsByUserId:FC = () => {


    // const id = useParams()

    const [post, setPost] = useState<IPost[]>([])


    useEffect(() => {
        postService.getAllPostsByUserId('1').then(value => value.data).then(post => setPost(post))
    }, []);



    return (
        <div>
            <div>{post.map(post => <div>{post.title}</div>)}</div>
        </div>
    );
};

export default PostsByUserId;