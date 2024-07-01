import { render, screen, within } from "@testing-library/react";
import QueryNestedElements from "./QueryNestedElements";

test("test nested element",()=>{
    render(<QueryNestedElements/>);
    const el = screen.getByText("Parent");
    const subEl1 = within(el).getByText("Child Tag 1");
    const subEl2 = within(el).getByText("Child Tag 3");
    expect(el).toBeInTheDocument();
    expect(subEl1).toBeInTheDocument();
    expect(subEl2).toBeInTheDocument();
})