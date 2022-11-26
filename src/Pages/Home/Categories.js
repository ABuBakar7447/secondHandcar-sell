import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [category, setCategory] = useState([]);
    console.log(category)
    useEffect(() => {
        fetch('carcategory.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <div className='my-5'>
            <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold text-red-700 text-center underline'>Choose The Brand</h1>
            <h2 className='font-bold text-black-600 text-center'>Hope you will find the best car for you.</h2>

            
            <div >

                <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>
                    {
                        category.map(singleBrand =><CategoryCard
                        key={singleBrand.category_no}
                        singleBrand={singleBrand}
                        ></CategoryCard>)
                    }
                </div>

            </div>
        </div>
        </div>
    );
};

export default Categories;