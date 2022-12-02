// import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const CategoryProduct = () => {
    const productdetails = useLoaderData();

    const [modalData, setModalData] = useState('')
    // const [userdata, setuserData] = useState()

    // const {data: userDetails = []} = useQuery({
        
    //     queryKey: ['verifyseller'],
    //     queryFn: async() =>{
    //         const res = await fetch(`http://localhost:5000/verifyseller?email=${viewProduct.seller_email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    
    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-auto my-5 '>
                    {
                        productdetails.map(viewProduct =><ProductCard
                        key={viewProduct._id}
                        
                        viewProduct={viewProduct}
                        setModalData={setModalData}
                        // userDetails={userDetails}
                        ></ProductCard> )
                    }
            </div>

            <ProductModal
            modalData={modalData}
            
            ></ProductModal>


        </div>
    );
};

export default CategoryProduct;