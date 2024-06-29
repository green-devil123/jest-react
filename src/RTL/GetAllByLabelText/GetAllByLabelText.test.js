import { render, screen } from "@testing-library/react";
import GetAllByLabelText from "./GetAllByLabelText";

test("get all by label text check",()=>{

    render(<GetAllByLabelText/>)
    const inputs = screen.getAllByLabelText("userName");
    const checks = screen.getAllByLabelText("skill")
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue("anils");
    }

    for(let i=0;i<checks.length;i++){
        expect(checks[i]).toBeInTheDocument();
        expect(checks[i]).toBeChecked();
    }
    
})