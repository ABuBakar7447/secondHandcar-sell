import React from 'react';

const ProductCard = ({viewProduct}) => {
    const {img_url, product_name, location, resale_price, original_price, yearof_use, purchase_year, post_date, condition, seller_name} = viewProduct
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
            <figure><img  src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {product_name}</h2>
                    <h3 className='font-bold'>Location: {location}</h3>
                    <h3 className='font-bold'>Resale Price: ${resale_price}</h3>
                    <h3 className='font-bold'>Original Price: ${original_price}</h3>
                    <h3 className='font-bold'>Year of Use: {yearof_use}</h3>
                    <h3 className='font-bold'>Purchase Year: {purchase_year}</h3>
                    <h3 className='font-bold'>Post Date: {post_date}</h3>
                    <h3 className='font-bold'>Condition: {condition}</h3>
                    <h3 className='font-bold'>Seller Name: {seller_name}</h3>

                    <button>Book Now</button>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default ProductCard;