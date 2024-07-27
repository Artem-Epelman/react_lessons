import React, {FC} from 'react';
import {IUser} from "../../models/user";





const User:FC<IUser> = ({name}) => {
    return (
        <div>

            {name}
            
            </div>
    );
};

export default User;