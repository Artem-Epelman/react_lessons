import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Link to={'users'}>users</Link>
            <br/>
            <Link to={'posts'}>posts</Link>
            <br/>
            <Link to={'comments'}>comments</Link>
        </div>
    );
};

export default Header;