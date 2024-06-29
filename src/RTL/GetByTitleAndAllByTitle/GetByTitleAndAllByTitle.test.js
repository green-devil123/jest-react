import { render, screen } from "@testing-library/react";
import GetByTitleAndAllByTitle from "./GetByTitleAndAllByTitle";

test("button Title test",()=>{
    render(<GetByTitleAndAllByTitle/>);
    const btn = screen.getByTitle("click");
    expect(btn).toBeInTheDocument();
})

test("umbrella icon Title test",()=>{
    render(<GetByTitleAndAllByTitle/>);
    const icon = screen.getByTitle("Umbrella");
    expect(icon).toBeInTheDocument();
})

test("CLOUD icon Title test",()=>{
    render(<GetByTitleAndAllByTitle/>);
    const icons = screen.getAllByTitle("CLOUD");
    for(let i=0;i<icons.clientHeight;i++){
        expect(icons[i]).toBeInTheDocument();
    }
})