
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const {user} = useContext(AuthContext);


    const [productDetails, setProductDetails] = useState([])
    console.log(productDetails)

    //collecting data base on user email
    
    useEffect(() => {
        fetch(`http://localhost:5000/product?seller_email=${user?.email}`,{
            
            headers: {
                    authorization: `bearer ${localStorage.getItem('tokenForAccess')}`
                    
                }
            }
        )
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [user?.email])


    // const {data : productDetails= []} = useQuery({
    //     queryKey: ['product'],
    //     queryFn: async() => {
    //         const res = await fetch(`http://localhost:5000/product?seller_email=${user?.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })


    const handleDelete = id => {
        const proceed = window.confirm('Do you want to remove your product?');
        if (proceed) {
            fetch(`http://localhost:5000/delproduct/${id}`, {
                method: 'Delete'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('your product deleted successfully')
                        const leftProDet = productDetails.filter(del => del._id !== id);
                        setProductDetails(leftProDet)
                    }
                })
        }
    }



    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
                    {
                        productDetails?.length && productDetails.map(sellerProduct =><MyProductCard key={sellerProduct._id}
                            sellerProduct={sellerProduct}
                            handleDelete={handleDelete}
                            ></MyProductCard>
                        )
                    }
            </div>
        </div>
    );
};

export default MyProduct;