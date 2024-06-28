import { useState } from 'react';

function Snapshot() {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");
  return (
    <div className="App">
        <h1>Jest Testing</h1>
      <button onClick={()=>setValue("Tarun agarwal")}>Update value</button>{value}
    </div>
  );
}

export default Snapshot;
