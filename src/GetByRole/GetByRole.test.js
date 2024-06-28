import { render, screen } from "@testing-library/react"
import GetByRole from "./GetByRole";

test("getByRole test",()=>{
    render(<GetByRole/>)
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toBeInTheDocument();
    expect(inputBox).toHaveValue("hello");
    expect(inputBox).toBeDisabled();
})