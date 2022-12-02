import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const AdvertiseProduct = () => {

    const {data: advertised = []} = useQuery({
        queryKey: ['advertised'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/advertised');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>

            {
            advertised.length && advertised.map(product =><AdvertiseCard
            key={product._id}
            product={product}
            ></AdvertiseCard>)
            } 

            </div>
           
        </div>
    );
};

export default AdvertiseProduct;