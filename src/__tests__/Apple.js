import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("Check first react case",()=>{
  render(<App/>);
  const linkedElement = screen.getByText(/first ReaCt App Case/i);
  const checkTitle = screen.getByTitle("AI generate image");
  expect(linkedElement).toBeInTheDocument();
  expect(checkTitle).toBeInTheDocument();
})

test("check input box",()=>{
  render(<App/>);
  const checkTextBox =screen.getByRole('textbox');
  expect(checkTextBox).toBeInTheDocument(); 
  const checkPlaceholder = screen.getByPlaceholderText('Enter a name');
  expect(checkPlaceholder).toBeInTheDocument(); 
  expect(checkTextBox).toHaveAttribute('id','1');
  expect(checkTextBox).toHaveAttribute('type','text');
  expect(checkTextBox).toHaveAttribute('name','username');
  expect(checkTextBox).toHaveAttribute('value','tarun agarwal');

})

describe("UI test case",()=>{
  test("test case 1",()=>{
    render(<App/>);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toHaveAttribute('name', 'username');
  })
  test("test case 2",()=>{
    render(<App/>);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toHaveAttribute('name', 'username');
  })
  test("test case 3",()=>{
    render(<App/>);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toHaveAttribute('name', 'username');
  })
})

describe("API test case",()=>{
  test("test case 1",()=>{
    render(<App/>);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toHaveAttribute('name', 'username');
  })
  test("test case 2",()=>{
    render(<App/>);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toHaveAttribute('name', 'username');
  })
  test("test case 3",()=>{
    render(<App/>);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toHaveAttribute('name', 'username');
  })

  describe("child test case",()=>{
    test("child case final",()=>{
      render(<App/>);
      const inputBox = screen.getByRole('textbox');
      expect(inputBox).toHaveAttribute('name', 'username');
    })
  })
})

// test("onchange input text",()=>{
//   render(<App/>);
//   const inputBox = screen.getByRole('textbox');
//   fireEvent.change(inputBox,{target:{value: "a"}});
//   expect(inputBox.value).toBe("a");

// })


test("button update click event",()=>{
  render(<App/>);
  const buttonText = screen.getByRole('button');
  fireEvent.click(buttonText);
  expect(screen.getByText("Tarun agarwal")).toBeInTheDocument();
})