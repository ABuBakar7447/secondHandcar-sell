import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const ProductCard = ({ viewProduct, setModalData }) => {
    const { img_url, product_name, location, resale_price, original_price, yearof_use, purchase_year, post_date, condition, seller_name, product_status, seller_email } = viewProduct;
    console.log(seller_email)



    const { data: userDetails = [] } = useQuery({

        queryKey: ['sellerdetails', seller_email],
        queryFn: async () => {
            const res = await fetch(`https://second-hand-product-server.vercel.app/sellerdetails?seller_email=${seller_email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(userDetails)





    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
                <figure><img src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {product_name}</h2>
                    <h3 className='font-bold'>Location: {location}</h3>
                    <h3 className='font-bold'>Resale Price: ${resale_price}</h3>
                    <h3 className='font-bold'>Original Price: ${original_price}</h3>
                    <h3 className='font-bold'>Year of Use: {yearof_use}</h3>
                    <h3 className='font-bold'>Purchase Year: {purchase_year}</h3>
                    <h3 className='font-bold'>Post Date: {post_date}</h3>
                    <h3 className='font-bold'>Condition: {condition}</h3>

                    <h3 className='font-bold'>Product Status: {product_status}</h3>
                    <h3 className='font-bold'>Seller Name: {seller_name}</h3>

                    {
                        userDetails.map(check =>
                            <div key={check._id}>{<div className='flex font-bold'>Seller Status: {check?.verification} {check.verification === 'Verified' && <FaCheckCircle className='mx-2 bg-primary rounded'></FaCheckCircle>}</div>
                            }
                                {<h3 className='font-bold'>Seller Mail: {check?.email}</h3>}</div>
                        )
                    }



                    <label htmlFor="my-modal-3" className="btn" onClick={() => setModalData(viewProduct)}  >Book Now</label>


                </div>
            </div>
        </div>
    );
};

export default ProductCard;