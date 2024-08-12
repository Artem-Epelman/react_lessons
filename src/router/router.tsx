import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Posts from "../components/Posts/Posts";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import PostsByUserId from "../components/Posts/Posts-By-User-Id/Posts-By-User-Id";
import UsersPage from "../pages/UsersPage/UsersPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {element:<UsersPage/>, path:'users', children:[
                {path:':id', element:<PostsByUserId/>},
                ]},
            {element:<CommentsPage/>, path:'comments'},
            {element:<PostsPage/>, path:'posts'},
        ]
    },
])