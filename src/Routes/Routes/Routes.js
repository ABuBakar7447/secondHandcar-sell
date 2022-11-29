import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blogs/Blogs";
import CategoryProduct from "../../Pages/CategoryProduct/CategoryProduct";
import Dashboards from "../../Pages/DashBoard/DashBoards/Dashboards";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signin',
                element:<SignUp></SignUp>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            {
                path:'/products/:category_name',
                element:<CategoryProduct></CategoryProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/products?product_category=${params.category_name}`)
            },

        ]
    },
    {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboards></Dashboards>,
            }
        ]
        
    }
]);

export default router;