import { useState } from "react"

export default function QueryByAndAll(){
    const [login, setLogin] = useState(true);
    return (
        <>
            <h1>Query Text and Query All By Text</h1>
            {
                login ? 
                (<button>Login</button>)
                :
                (<button>Logout</button>)
            }
        </>
    )
}