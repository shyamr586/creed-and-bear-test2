import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import Delete from "./../Delete";

let dummy = [{ id: 1 }, { id: 2 }, { id: 3 }];

afterEach(() => cleanup());

test("test if render", () => {
  render(<Delete dummy={dummy} />);
  const first = screen.getByTestId("first");
  const second = screen.getByTestId("second");
  const third = screen.getByTestId("third");

  expect(first).toBeInTheDocument();
  expect(second).toBeInTheDocument();
  expect(third).toBeInTheDocument();
});

test("test if checking boxes work", () => {
  render(<Delete dummy={dummy} />);
  const first = screen.getByTestId("first");

  fireEvent.click(first)
  expect(first.checked).toBe(true)
  fireEvent.click(first)
  expect(first.checked).toBe(false)
});

test("test if values are added to state on toggle", () => {
  render(<Delete dummy={dummy} />);
  const first = screen.getByTestId("first");
  const data = screen.getByTestId("data");

  fireEvent.click(first)
  expect(first.checked).toBe(true)
  fireEvent.click(first)
  expect(first.checked).toBe(false)

  fireEvent.click(first)
  expect(data).toHaveTextContent("1")
});
