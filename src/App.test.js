import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders component heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/theme changer/i);
  expect(linkElement).toBeInTheDocument();
});
