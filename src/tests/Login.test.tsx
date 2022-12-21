/* eslint-disable jest/valid-expect */
import { render, screen, fireEvent} from "@testing-library/react";
import Login from "../components/login/Login";
import { BrowserRouter as Router } from "react-router-dom";

test("username input should rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const userInputEl = screen.getAllByPlaceholderText(/Enter your username/i);
  expect(userInputEl);
});

test("password input should rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const passwordInputEl =
    screen.getAllByPlaceholderText(/Enter your password/i);
  expect(passwordInputEl);
});

test("button input should rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl);
});

// // Username input empty
test("username input should be empty", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const userInputEl = screen.getAllByPlaceholderText(/Enter your username/i);
  expect(userInputEl);
});

test("handle Click", () =>{
  const onClick = jest.fn()
  render(
    <Router>
      <Login  />
    </Router>
  );
  const buttonElement = screen.getByText("Login")
  fireEvent.click(buttonElement);
  expect(onClick).toBeCalledTimes(0)
})
