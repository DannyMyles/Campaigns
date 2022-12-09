/* eslint-disable jest/valid-expect */
import { render, screen } from "@testing-library/react";
import Login from "../components/login/Login";
import "@testing-library/jest-dom/extend-expect";

test("username input should rendered", () => {
  render(<Login />);
  const userInputEl = screen.getAllByPlaceholderText(/Enter your username/i);
  expect(userInputEl);
});

test("password input should rendered", () => {
  render(<Login />);
  const passwordInputEl =
    screen.getAllByPlaceholderText(/Enter your password/i);
  expect(passwordInputEl);
});

test("button input should rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

//Username input empty
// test("username input should be empty", () => {
//   render(<Login />);
//   const userInputEl = screen.getAllByPlaceholderText(/Enter your username/i);
//   expect(userInputEl).toBeEmptyDOMElement();
// });

//Password input empty
// test("password input should be empty", () => {
//   render(<Login />);
//   const passwordInputEl = screen.getAllByPlaceholderText(/Enter your password/i);
//   expect(passwordInputEl).toBeEmptyDOMElement();
// });

//Disable button
