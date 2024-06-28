import { fireEvent, render, screen } from "@testing-library/react";
import GetAllByPlaceholder from "./GetAllByPlaceholder";

// test("Test getPlaceholder by text",()=>{
//     render(<GetAllByPlaceholder/>);
//     const input = screen.getByPlaceholderText("Enter a username");
//     expect(input).toBeInTheDocument();
// })

test("Test getAllPlaceholder by text",()=>{
    render(<GetAllByPlaceholder/>);
    const inputs = screen.getAllByPlaceholderText("Enter a username");
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument();
    }
})

