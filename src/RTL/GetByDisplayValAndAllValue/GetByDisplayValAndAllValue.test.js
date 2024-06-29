import { render, screen } from "@testing-library/react";
import GetByDisplayValAndAllValue from "./GetByDisplayValAndAllValue";

// test("input test by display value",()=>{
//     render(<GetByDisplayValAndAllValue/>)
//     const input = screen.getByDisplayValue("tarun");
//     expect(input).toBeInTheDocument();
// })

// test("text Area test by display value",()=>{
//     render(<GetByDisplayValAndAllValue/>)
//     const input = screen.getByDisplayValue("agarwal");
//     expect(input).toBeInTheDocument();
// })
// test("text Area test by display value",()=>{
//     render(<GetByDisplayValAndAllValue/>)
//     const input = screen.getByDisplayValue("tarun");
//     expect(input).toBeInTheDocument();
// })

// if the input and text default value is same then use getByAllDisplayValue because above case tarun is conflict with another tarun
test("getByAllDisplayValue test by display",()=>{
    render(<GetByDisplayValAndAllValue/>)
    const inputs = screen.getAllByDisplayValue("tarun");
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument();
    }
})

test("radio Area test by display value",()=>{
    render(<GetByDisplayValAndAllValue/>)
    const input = screen.getByDisplayValue("mail");
    expect(input).toBeInTheDocument();
})