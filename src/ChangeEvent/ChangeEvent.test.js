import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChangeEvent from "./ChangeEvent";


test("Enter a onchange event",async()=>{
    userEvent.setup();
    render(<ChangeEvent/>);
    const input = screen.getByRole('textbox');
    await userEvent.type(input , "Tarun");
    expect(screen.getByText("Tarun")).toBeInTheDocument();
})