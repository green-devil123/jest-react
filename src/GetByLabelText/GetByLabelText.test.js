import { render,screen } from "@testing-library/react";
import GetByLabelText from "./GetByLabelText";

test('label text check',()=>{
    render(<GetByLabelText/>);
    const input = screen.getByLabelText("User name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("hello")
})

test('check box check',()=>{
    render(<GetByLabelText/>);
    const input = screen.getByLabelText("Skills");
    expect(input).toBeInTheDocument();
    expect(input).toBeChecked();
})