import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Event Registration Reimagined title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Event Registration Reimagined/i);
  expect(linkElement).toBeInTheDocument();
});
