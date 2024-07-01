import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ClickUserEvent from "./ClickUserEvent";

test("click event with user event",async()=>{
    userEvent.setup();
    render(<ClickUserEvent/>);
    const btn = screen.getByText("Click me");
    await userEvent.click(btn);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
})