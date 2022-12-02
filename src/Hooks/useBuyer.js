import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setBuyer] = useState(false);
    const [buyerLoading, setBuyerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://second-hand-product-server.vercel.app/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setBuyer(data.isBuyer)
                    setBuyerLoading(false)
                })
        }

    }, [email])
    return [isBuyer, buyerLoading]
}
export default useBuyer;