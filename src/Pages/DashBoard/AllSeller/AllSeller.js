import React, { useEffect, useState } from 'react';


const AllSeller = () => {

    const [userDetails, setUserDetails] = useState([])
    console.log(userDetails)

    useEffect(()=>{
        fetch('http://localhost:5000/seller')
        .then(res => res.json())
        .then(data => setUserDetails(data))
    },[])

    const handleUserDelete = id => {
        const proceed = window.confirm('Do you want to remove this user?');
        if (proceed) {
            fetch(`http://localhost:5000/delseller/${id}`, {
                method: 'Delete'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('The user has been deleted successfully')
                        const leftUser = userDetails.filter(del => del._id !== id);
                        setUserDetails(leftUser)
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
                        userDetails.map((details, index) =><tr key={details._id}>
                        <th>{index+1}</th>
                        <td>{details.user_name}</td>
                        <td>{details.email}</td>
                        <td>{details.role}</td>
                        <td><button onClick={()=>handleUserDelete(details._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                      </tr>)
                    }



                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;