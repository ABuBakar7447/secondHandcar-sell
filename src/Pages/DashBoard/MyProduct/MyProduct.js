
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';


const MyProduct = () => {
    const { user } = useContext(AuthContext);


    // const [productDetails, setProductDetails] = useState([])
    // console.log(productDetails)

    //collecting data base on user email

    // useEffect(() => {
    //     fetch(`https://second-hand-product-server.vercel.app/product?seller_email=${user?.email}`,{

    //         headers: {
    //                 authorization: `bearer ${localStorage.getItem('tokenForAccess')}`

    //             }
    //         }
    //     )
    //         .then(res => res.json())
    //         .then(data => setProductDetails(data))
    // }, [user?.email])


    const { data: productDetails = [], refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`https://second-hand-product-server.vercel.app/product?seller_email=${user?.email}`, {

                headers: {
                    authorization: `bearer ${localStorage.getItem('tokenForAccess')}`

                }
            });
            const data = await res.json();
            return data;
        }
    })





    const handleDelete = id => {
        const proceed = window.confirm('Do you want to remove your product?');
        if (proceed) {
            fetch(`https://second-hand-product-server.vercel.app/delproduct/${id}`, {
                method: 'Delete'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('your product deleted successfully')

                        refetch()
                    }
                })
        }
    }



    const advertiseHandle = id => {
        fetch(`https://second-hand-product-server.vercel.app/newrole/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                }
            })
    }




    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
                {
                    productDetails?.length && productDetails.map(sellerProduct => <MyProductCard key={sellerProduct._id}
                        sellerProduct={sellerProduct}
                        handleDelete={handleDelete}
                        advertiseHandle={advertiseHandle}
                    ></MyProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default MyProduct;