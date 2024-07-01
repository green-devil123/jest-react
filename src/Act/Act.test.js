import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Act from "./Act";

test("act function test", async () => {
  const user = userEvent.setup();
  render(<Act />);
  const ele = screen.getByRole('textbox');
  await act(async()=>{
    await user.type(ele, "Hello World");
  })
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
