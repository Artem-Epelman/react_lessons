import React, {FC, useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import User from "./User/User";
import {Outlet} from "react-router-dom";

const Users:FC = () => {

    const [users, setUsers] = useState<IUser[]>([])


    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, []);



    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Users;