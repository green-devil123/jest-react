import { render, screen, configure } from "@testing-library/react";
import OverRideTestId from "./OverRideTestId";

configure({testIdAttribute:"element-id"})//Ovrride test Id

test("overrider test id",()=>{
    render(<OverRideTestId/>);
    const divtest = screen.getByTestId("div-test-id");
    expect(divtest).toBeInTheDocument();
    expect(divtest).toHaveTextContent("div Test Id");
})