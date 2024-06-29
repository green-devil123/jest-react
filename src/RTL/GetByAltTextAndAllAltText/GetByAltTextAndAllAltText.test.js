import { render, screen } from "@testing-library/react";
import GetByAltTextAndAllAltText from "./GetByAltTextAndAllAltText";

test("getbyalttext test",()=>{
    render(<GetByAltTextAndAllAltText/>);
    const altText = screen.getByAltText("dummy image");
    expect(altText).toBeInTheDocument();
})

test("getAllByAltText test",()=>{
    render(<GetByAltTextAndAllAltText/>);
    const altTexts = screen.getAllByAltText("clone image");
    for(let i=0;i<altTexts.length;i++){
        expect(altTexts[i]).toBeInTheDocument();
    }
    
})