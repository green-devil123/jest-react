import { render, screen } from "@testing-library/react";
import QueryByAndAll from "./QueryByAndAll";

test("Query By And Query All By", ()=>{
    render(<QueryByAndAll/>);

    
    // const btn = screen.not.getByText("Logout");// getBy basically check the dom not code so we can overcome this with the help of query
    // expect(btn).toBeInTheDocument();


    const btn = screen.queryByText("Logout");// it will check the document and the code
    expect(btn).not.toBeInTheDocument();
})