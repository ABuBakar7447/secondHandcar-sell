import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        if (email) {
            fetch(`https://second-hand-product-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.tokenForAccess) {
                        localStorage.setItem('tokenForAccess', data.tokenForAccess);
                        setToken(data.tokenForAccess);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;