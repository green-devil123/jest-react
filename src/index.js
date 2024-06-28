import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Snapshot from './Snapshot';
import Button1 from './button/Button1';
import GetByAllRole from './GetByRole/GetByRole2';
import GetByRole from './GetByRole/GetByRole';
import GetByRole2 from './GetByRole/GetByRole2';
import GetAllByLabelText from './GetAllByLabelText/GetAllByLabelText';
import GetAllByPlaceholder from './GetAllByPlaceholder/GetAllByPlaceholder';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Snapshot/> */}
    {/* <Button1/> */}
    {/* <GetByRole/> */}
    {/* <GetByRole2/> */}
    {/* <GetByAllRole/> */}
    {/* <GetAllByLabelText/> */}
    <GetAllByPlaceholder/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
