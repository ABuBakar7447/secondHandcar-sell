// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyBooking = () => {

    const { user } = useContext(AuthContext)

    const [myorders, setMyOrder] = useState([])


    // const {data: myorders = []} = useQuery({
    //     queryKey: ['myorder'],
    //     queryFn: async() =>{
    //         const res = await fetch();
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    useEffect(() => {
        fetch(`https://second-hand-product-server.vercel.app/myorder?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user?.email])





    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
                {
                    myorders.length && myorders.map(viewOrder => <MyOrderCard
                        key={viewOrder._id}
                        viewOrder={viewOrder}
                    ></MyOrderCard>)
                }
            </div>
        </div>
    );
};

export default MyBooking;