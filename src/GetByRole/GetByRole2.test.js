import { render, screen } from "@testing-library/react"
import GetByRole2 from "./GetByRole2";

test("getByRole2 Role test",()=>{
    render(<GetByRole2/>)
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