import React, {FC} from 'react';
import {IUser} from "../../../interfaces/user.interface";
import {Link} from "react-router-dom";

interface Props {
    user:IUser
}

const User:FC<Props> = ({user}) => {
    return (
        <div>
            {
                <Link to={user.id.toString()}>{user.name}</Link>
            }

        </div>
    );
};

export default User;