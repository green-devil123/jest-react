import { render, screen } from "@testing-library/react";
import User from "./User";

test("Component Testing",()=>{
    const name = "Anil Kumar";
    render(<User name={name}/>);
    // const ele = screen.getByText(name);
    const ele = screen.getByText(`Username: ${name}`);
    expect(ele).toBeInTheDocument();
})