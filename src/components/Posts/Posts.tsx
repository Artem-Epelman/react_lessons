import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";
import Post from "./Post/Post";
import {useParams} from "react-router-dom";


const Posts:FC = () => {

    const {id} = useParams()




    const [posts, setPosts] = useState<IPost[]>([])


    useEffect(() => {


        postService.getAllPost().then(({data}) => setPosts(data))


    });



    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>

    );
};

export default Posts;