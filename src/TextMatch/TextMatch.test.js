import { render, screen } from "@testing-library/react";
import TextMatch from "./TextMatch";


test("string match",()=>{
    render(<TextMatch/>);
    const str = screen.getByText("Hello World");
    expect(str).toBeInTheDocument();
    const str1 = screen.getByText("lo W",{exact:false});
    expect(str1).toBeInTheDocument();
})

test("regex match",()=>{
    render(<TextMatch/>);
    const str = screen.getByText(/hello world/i);
    expect(str).toBeInTheDocument();
    const str2 = screen.getByText(/hello wor?ld/i);
    expect(str2).toBeInTheDocument();
})