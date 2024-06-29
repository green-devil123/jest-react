import { render, screen } from "@testing-library/react";
import GetTextAndGetAllText from "./GetTextAndGetAllText";

// test('getText test',()=>{
//     render(<GetTextAndGetAllText/>)
//     const btn = screen.getByText('Login');
//     const ptag = screen.getByText('p tag'); 
//     expect(btn).toBeInTheDocument();
//     expect(ptag).toBeInTheDocument();
//     expect(ptag).toHaveClass("paraClass");
// })

test('getAllText test',()=>{
    render(<GetTextAndGetAllText/>)
    const btn = screen.getAllByText('Login');
    for(let i=0;i<btn.length;i++) expect(btn[0]).toBeInTheDocument();
    
})