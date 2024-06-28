import sum from "./sum";

it("check sum",()=>{
    let a = 10;
    let b= 20;
    let output = 30;
    expect(sum(a,b)).toBe(output);
})