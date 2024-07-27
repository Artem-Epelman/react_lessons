import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/user";
import {getAllUsers} from "../../services/user.service";
import User from "../User/User";

type IUserType = IUser & {children?: React.ReactNode};

const Users:FC<IUserType> = () => {





    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAllUsers().then(user => user.data)
            .then(users => setUsers(users))

    }, [])


    return (
        <div>
            {
                users.map((user) => <User key={user.id} name={user.name} id={user.id} />)
            }
            </div>
    );
};

export default Users;