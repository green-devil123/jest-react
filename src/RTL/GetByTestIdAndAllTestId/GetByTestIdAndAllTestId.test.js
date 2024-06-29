import { render, screen } from "@testing-library/react";
import GetByTestIdAndAllTestId from "./GetByTestIdAndAllTestId";

test("get By test Id",()=>{
    render(<GetByTestIdAndAllTestId/>);
    const btn1 = screen.getByTestId("btn1");
    const divTest = screen.getByTestId("div-testId");
    const pTest = screen.getByTestId("p-testId");
    expect(btn1).toBeInTheDocument();
    expect(divTest).toBeInTheDocument();
    expect(pTest).toHaveTextContent("p test by id");
})