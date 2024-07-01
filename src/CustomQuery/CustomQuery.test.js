import { render, screen } from "@testing-library/react";
import CustomQuery from "./CustomQuery";

test("custom query or js query testing",()=>{
    render(<CustomQuery/>);
    // const dv = document.querySelector("div");
    const dv = document.querySelector("#testId");
    expect(dv).toBeInTheDocument();
    expect(dv).toHaveTextContent("Hello World");
    expect(dv).toHaveClass("test-style");
})
