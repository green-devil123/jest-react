import {useState} from 'react';

function Button1(){
    const [data, setData] = useState("");

    const handleButton = () =>{
        setData("Tarun Agarwal");
    }
    return (
        <div>
            <h1>Update Data</h1>
            <button data-testId="btn1" onClick={handleButton}>
                Update data1
            </button>
            <br/>
            <button data-testId="btn2" onClick={handleButton}>
                Update data2
            </button>
            <br/>
            {data}
        </div>
    )
}

export default Button1;