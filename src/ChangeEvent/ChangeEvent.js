import { useState } from "react"

export default function ChangeEvent(){
    const[value, setValue] = useState("");
    return (
        <>
            <h1>{value}</h1>
            <input 
                placeholder="Enter a name"
                defaultValue={value}
                onChange={(e)=>setValue(e.target.value)}
            />
        </>
    )
}