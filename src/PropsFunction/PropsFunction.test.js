import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PropsFunction from "./PropsFunction";

test("props function testing",async()=>{
    const testFunction = jest.fn();
    render(<PropsFunction testFunction={testFunction}/>);
    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(testFunction).toBeCalled();
})