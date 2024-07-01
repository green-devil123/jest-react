import { logRoles, prettyDOM, render, screen } from "@testing-library/react"
import Debugging from "./Debugging"

test("debugging component",()=>{
    const {container, debug} = render(<Debugging/>);
    // const ele = screen.getByRole("button");
    // expect(ele).toBeInTheDocument();
    // console.log(container);
    // console.log(prettyDOM(container));
    // debug();
    logRoles(container);
})