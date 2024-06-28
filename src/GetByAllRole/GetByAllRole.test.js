import { render, screen } from "@testing-library/react"
import GetByAllRole from "./GetByAllRole"

test("getByAll Role test",()=>{
    render(<GetByAllRole/>)
    const btn1 = screen.getByRole('button',{name:'Btn 1'});
    const btn2 = screen.getByRole('button',{name:'Btn 2'});
    const inputBox1 = screen.getByRole('textbox',{name:"User Name"});
    const inputBox2 = screen.getByRole('textbox',{name:"User Age"});
    const dv1 = screen.getByRole('dummy');

    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(inputBox1).toBeInTheDocument();
    expect(inputBox2).toBeInTheDocument();
    expect(dv1).toBeInTheDocument();
})