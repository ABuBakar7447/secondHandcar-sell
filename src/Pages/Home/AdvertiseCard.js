import React from 'react';

const AdvertiseCard = ({product}) => {
    const {img_url, product_name, location, resale_price, yearof_use, purchase_year, post_date, condition,product_status} = product
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
            <figure><img  src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {product_name}</h2>
                    <h3 className='font-bold'>Product Location: {location}</h3>
 
                    <h3 className='font-bold'>Condition: {condition}</h3>
                    
                    <h3 className='font-bold'>Product Status: {product_status}</h3>
                    <h3 className='font-bold'>Current Price: ${resale_price}</h3>
                    
                    <h3 className='font-bold'>Offer: <span className='text-yellow-400'>20% off</span></h3>
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;