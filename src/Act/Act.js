import { useState } from "react"

export default function Act(){
    const [value, setValue] = useState("");
    return(
        <>
            {/* Whenever we are the dealing the state we update the state so we use act function */}
            <h1>Act function</h1>
            <h2>{value}</h2>
            <input
                type="text"
                placeholder="Enter a name"
                onChange={(e)=>setValue(e.target.value)}
                defaultValue={value}
            />
        </>
    )
}