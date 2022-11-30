import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const {user} = useContext(AuthContext)

    const {data : product= []} = useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/product?seller_email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
                    {
                        product.map(sellerProduct =><MyProductCard key={sellerProduct._id}
                            sellerProduct={sellerProduct}></MyProductCard>
                        )
                    }
            </div>
        </div>
    );
};

export default MyProduct;