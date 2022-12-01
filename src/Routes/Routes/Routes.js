import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blogs/Blogs";
import CategoryProduct from "../../Pages/CategoryProduct/CategoryProduct";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import Dashboards from "../../Pages/DashBoard/DashBoards/Dashboards";
import MyProduct from "../../Pages/DashBoard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminPrivate from "../AdminPrivate/AdminPrivate";
import Private from "../Private/Private";

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
                element:<Private><CategoryProduct></CategoryProduct></Private>,
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
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>,
            },
            {
                path:'/dashboard/myproduct',
                element: <MyProduct></MyProduct>,
            },
            {
                path:'/dashboard/allseller',
                element:<AdminPrivate><AllSeller></AllSeller></AdminPrivate>,
            },
            {
                path:'/dashboard/allbuyer',
                element:<AdminPrivate><AllBuyer></AllBuyer></AdminPrivate>,
            },
        ]
        
    }
]);

export default router;