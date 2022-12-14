import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const DashBoardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            {/* dashboard layout creating */}


            <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
            <Header></Header>
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300">
                <div className="flex lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal">
                    {/* <!-- Navbar menu content --> */}
                    {
                        isBuyer && <>
                        <li><Link to='/dashboard/myorder'>Myorder</Link></li>
                        </>
                    }
                    

                    {
                        isAdmin &&
                        <>
                        <li><Link to='/dashboard/allseller'>AllSeller</Link></li>
                        <li><Link to='/dashboard/allbuyer'>AllBuyer</Link></li>
                        <li><Link to='/dashboard/report'>Report</Link></li>
                        </>
                    }


                    {
                        isSeller &&
                        <>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myproduct'>MyProduct</Link></li>
                        </>
                        
                    }
                    
                    
                    </ul>
                </div>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
                
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100">
                {/* <!-- Sidebar content here --> */}
                    
                    {
                        isBuyer && <>
                        <li><Link to='/dashboard/myorder'>Myorder</Link></li>
                        </>
                    }

                    {
                        isAdmin &&
                        <>
                        <li><Link to='/dashboard/allseller'>AllSeller</Link></li>
                        <li><Link to='/dashboard/allbuyer'>AllBuyer</Link></li>
                        <li><Link to='/dashboard/report'>Report</Link></li>
                        </>
                    }


                    {
                        isSeller &&
                        <>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myproduct'>MyProduct</Link></li>
                        </>
                        
                    }

                </ul>
                
            </div>
            
            </div>
            
        </div>
    );
};

export default DashBoardLayout;