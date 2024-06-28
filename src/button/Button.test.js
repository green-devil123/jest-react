import { fireEvent, render, screen } from "@testing-library/react"
import Button1 from "./Button1"

test("button test by id",()=>{
    render(<Button1/>)
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Tarun Agarwal"));
})