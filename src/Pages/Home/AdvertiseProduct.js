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

            {
                advertised.length && <h1 className='text-4xl my-10 underline font-bold text-yellow-400 text-center'>Sell Offer</h1>
            }

            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-2 '>
            

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