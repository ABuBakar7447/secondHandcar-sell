import React from 'react';

const MyOrderCard = ({viewOrder}) => {
    const {product_img, name, email, productname, resaleprice, phone, location} = viewOrder
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
            <figure><img className='h-52'  src={product_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {productname}</h2>
                    <h3 className='font-bold'>Product Price: ${resaleprice}</h3>
                    <h3 className='font-bold'>Your Name: {name}</h3>
                    <h3 className='font-bold'>Your Location: {location}</h3>
                    
                    <h3 className='font-bold'>Your Number: {phone}</h3>
                    <h3 className='font-bold'>Your Email: {email}</h3>

                    <div className=' md:flex lg:flex-row flex m-5 justify-center'>
                    <button className='font-bold btn btn-error m-5'>Proced For Payment</button>
                    </div>

                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;