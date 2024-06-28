import { fireEvent, render, screen } from "@testing-library/react"
import Snapshot from "./Snapshot"

test("snapshot testing with component",()=>{
    const component = render(<Snapshot/>);
    expect(component).toMatchSnapshot();
})