import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProduct = () => {
    const productdetails = useLoaderData()
    console.log(productdetails)
    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-auto my-5 '>
                    {
                        productdetails.map(viewProduct =><ProductCard
                        key={viewProduct._id}
                        viewProduct={viewProduct}
                        ></ProductCard> )
                    }
                </div>
        </div>
    );
};

export default CategoryProduct;