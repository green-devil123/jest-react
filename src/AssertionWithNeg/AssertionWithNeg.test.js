import { render, screen } from "@testing-library/react";
import AssertionWithNeg from "./AssertionWithNeg";

test("assertion input test",()=>{
    render(<AssertionWithNeg/>);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Tarun Agarwal");
    expect(input).toHaveAttribute("id");
    expect(input).toHaveClass("data");
    expect(input).toHaveClass("test-style");

})

// assertion negative case
test("assertion button test",()=>{
    render(<AssertionWithNeg/>);
    const input = screen.getByRole('button');
    // these all cases run when we failt the case in the component
    // expect(input).not.toBeInTheDocument();
    // expect(input).not.toHaveTextContent("button");
    // expect(input).not.toHaveClass("btn-style");
})