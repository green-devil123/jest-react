import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Snapshot from './Snapshot';
import Button1 from './button/Button1';
import GetByAllRole from './RTL/GetByRole/GetByRole2';
import GetByRole from './RTL/GetByRole/GetByRole';
import GetByRole2 from './RTL/GetByRole/GetByRole2';
import GetAllByLabelText from './RTL/GetAllByLabelText/GetAllByLabelText';
import GetAllByPlaceholder from './RTL/GetAllByPlaceholder/GetAllByPlaceholder';
import GetTextAndGetAllText from './RTL/GetTextAndGetAllText/GetTextAndGetAllText';
import GetByTestIdAndAllTestId from './RTL/GetByTestIdAndAllTestId/GetByTestIdAndAllTestId';
import OverRideTestId from './RTL/OverRideTestId/OverRideTestId';
import GetByDisplayValAndAllValue from './RTL/GetByDisplayValAndAllValue/GetByDisplayValAndAllValue';
import GetByTitleAndAllByTitle from './RTL/GetByTitleAndAllByTitle/GetByTitleAndAllByTitle';
import GetByAltTextAndAllAltText from './RTL/GetByAltTextAndAllAltText/GetByAltTextAndAllAltText';
import AssertionWithNeg from './AssertionWithNeg/AssertionWithNeg';
import TextMatch from './TextMatch/TextMatch';
import TextMatchWithFunc from './TextMatch/TextMatchWithFunc';

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
    {/* <GetAllByPlaceholder/> */}
    {/* <GetTextAndGetAllText/> */}
    {/* <GetByTestIdAndAllTestId/> */}
    {/* <OverRideTestId/> */}
    {/* <GetByDisplayValAndAllValue/> */}
    {/* <GetByTitleAndAllByTitle/> */}
    {/* <GetByAltTextAndAllAltText/> */}
    {/* <AssertionWithNeg/> */}
    {/* <TextMatch/> */}
    <TextMatchWithFunc/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
