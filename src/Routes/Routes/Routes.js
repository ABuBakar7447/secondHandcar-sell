import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blogs/Blogs";
import CategoryProduct from "../../Pages/CategoryProduct/CategoryProduct";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import Dashboards from "../../Pages/DashBoard/DashBoards/Dashboards";
import MyBooking from "../../Pages/DashBoard/MyBookIng/MyBooking";
import MyProduct from "../../Pages/DashBoard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Undirected from "../../Pages/UndirectedPage/Undirected";
import AdminPrivate from "../AdminPrivate/AdminPrivate";
import BuyerPrivate from "../BuyerPrivate/BuyerPrivate";
import Private from "../Private/Private";
import SellerPrivate from "../SellerPrivate/SellerPrivate";

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
            {
                path:'*',
                element:<Undirected></Undirected>
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
                element:<SellerPrivate><AddProduct></AddProduct></SellerPrivate>,
            },
            {
                path:'/dashboard/myproduct',
                element: <SellerPrivate><MyProduct></MyProduct></SellerPrivate>,
            },
            {
                path:'/dashboard/allseller',
                element:<AdminPrivate><AllSeller></AllSeller></AdminPrivate>,
            },
            {
                path:'/dashboard/allbuyer',
                element:<AdminPrivate><AllBuyer></AllBuyer></AdminPrivate>,
            },
            {
                path:'/dashboard/myorder',
                element:<BuyerPrivate><MyBooking></MyBooking></BuyerPrivate>,
            },
        ]
        
    }
]);

export default router;