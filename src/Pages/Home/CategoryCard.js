import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({singleBrand}) => {
    const {category_name,img_url,total_sell,category_id}=singleBrand
    return (
        <div>
            <div className="card lg:h-72 bg-base-100 shadow-xl image-full">
            <figure><img src={img_url} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-yellow-400">{category_name}</h2>
                <p className="text-white-400 font-bold">Total Sell {total_sell}</p>
                <div className="card-actions justify-end">
                <Link to={`/products/${category_name}`}><button className="btn btn-primary">Visit now</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryCard;