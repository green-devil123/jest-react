import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <p>First React App Case</p>
      <input
        id="1"
        type='text'
        placeholder='Enter a name'
        name="username"
        readOnly
        value="tarun agarwal"
      />
      <br/>
      <br/>
      <img title='AI generate image' src='https://sm.mashable.com/t/mashable_me/photo/default/new-project-1_tecm.1248.jpg'/>
      <br/>
      <br/>
      {/* <input type="text"
      onChange={(e)=>setData(e.target.value+"test")}/>
      <br/> */}
      {data}
      <br/>
      <br/>
      <button onClick={()=>setValue("Tarun agarwal")}>Update value</button>{value}
    </div>
  );
}

export default App;
