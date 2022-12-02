import React, { useEffect, useState } from 'react';

const AllBuyer = () => {

    const [buyerDetails, setBuyerDetails] = useState([])
    console.log(buyerDetails)

    useEffect(() => {
        fetch('https://second-hand-product-server.vercel.app/buyer')
            .then(res => res.json())
            .then(data => setBuyerDetails(data))
    }, [])

    const handleBuyerDelete = id => {
        const proceed = window.confirm('Do you want to remove this user?');
        if (proceed) {
            fetch(`https://second-hand-product-server.vercel.app/delbuyer/${id}`, {
                method: 'Delete'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('The user has been deleted successfully')
                        const leftUser = buyerDetails.filter(del => del._id !== id);
                        setBuyerDetails(leftUser)
                    }
                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto my-10">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyerDetails.map((details, index) => <tr key={details._id}>
                                <th>{index + 1}</th>
                                <td>{details.user_name}</td>
                                <td>{details.email}</td>
                                <td>{details.role}</td>
                                <td><button onClick={() => handleBuyerDelete(details._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AllBuyer;