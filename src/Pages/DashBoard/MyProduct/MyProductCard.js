import React from 'react';

const MyProductCard = ({sellerProduct}) => {

    const {img_url,product_name, location, resale_price, original_price, post_date, seller_name, product_status, _id} = sellerProduct
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
            <figure><img  src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {product_name}</h2>
                    <h3 className='font-bold'>Seller Name: {seller_name}</h3>
                    <h3 className='font-bold'>Location: {location}</h3>
                    <h3 className='font-bold'>Resale Price: ${resale_price}</h3>
                    <h3 className='font-bold'>Original Price: ${original_price}</h3>
                    
                    <h3 className='font-bold'>Post Date: {post_date}</h3>
                    <h3 className='font-bold'>Product Status: <span className='text-yellow-400'>{product_status}</span></h3>

                    <div className=' md:flex lg:flex-row flex-col m-5 justify-center'>
                    <button className='font-bold btn btn-error m-5'>Delete Product</button>
                    <button className="font-bold btn btn-warning m-5">Advertise Product</button>
                    </div>

                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;