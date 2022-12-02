import { useQuery } from '@tanstack/react-query';
import React from 'react';

const VerifiedCheck = ({seller_email}) => {

    
    const {data: userDetails = []} = useQuery({
        
        queryKey: ['seller'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/verifyseller?email=${seller_email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(userDetails)
    return (
        <div>
            {
                userDetails.length && userDetails.map(check =>
                    <>{check.verification === 'Verified' && <h3>Seller Status: {check.verification}</h3>
                    }
                    { <h3>Seller Mail: {check.email}</h3> }</>
                )
            }
        </div>
    );
};

export default VerifiedCheck;