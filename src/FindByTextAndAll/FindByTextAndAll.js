import { useEffect, useState } from "react"

export default function FindByTextAndAll(){

    const [data, setData] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setData(true);
        }, 4580);
    },[]);
    
    return (
        <>
            <h1>Find By And Find All By</h1>
            {
                data ? "Data Found" : "Not Data Found"
            }
        </>
    )
}