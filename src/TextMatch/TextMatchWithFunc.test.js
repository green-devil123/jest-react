import { render, screen } from "@testing-library/react";
import TextMatchWithFunc from "./TextMatchWithFunc";


test("getByTextWith function",()=>{
    render(<TextMatchWithFunc/>);
    // const dv = screen.getByText((content,element)=>content.startsWith("Hello"));
    // const dv = screen.getByText((content,element)=>content.endsWith("world"));
    // const dv = screen.getByText((content,element)=>content.endsWith("ld"));
    // const dv = screen.getByText((content,element)=>{return content.includes("ll")});
    const dv = screen.getByText((content,element)=>{return content.length ==11 });
    // these all cases return true in the function
    expect(dv).toBeInTheDocument();
})