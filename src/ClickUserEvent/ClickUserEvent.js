import { useState } from "react"

export default function ClickUserEvent(){

    const [data, setData] = useState("");

    return(
        <>
            {data}
            <button onClick={()=>setData("Hello world")}>Click me</button>
        </>
    )
}