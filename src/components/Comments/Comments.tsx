import React, {FC, useEffect, useState} from 'react';
import {commentsService} from "../../services/comments.service";
import {IComment} from "../../interfaces/comment.interface";

const Comments:FC = () => {

    const [comments, setComments] = useState<IComment[]>([])


    useEffect(() => {
        commentsService.getAllComments().then(({data}) => setComments(data))
    }, []);



    return (
        <div>
            {comments.map(comment =>
                <div key={comment.id}>

                    commentId. {comment.id} - {comment.body}
                    <hr style={{backgroundColor: 'blue', height: '3px'}}/>

                </div>)}
        </div>
    );
};

export default Comments;