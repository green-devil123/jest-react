import { render, screen } from "@testing-library/react";
import FindByTextAndAll from "./FindByTextAndAll";

test("find by text",async()=>{
    render(<FindByTextAndAll/>);
    const dv = await screen.findByText("Data Found", {}, {timeout: 5000});
    expect(dv).toBeInTheDocument();
})