import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // For matchers like toBeInTheDocument
import HeroUiTest from "@/app/heroui/page"; // Adjust the path as needed
import userEvent from "@testing-library/user-event";

test("renders Hero UI Button component", async () => {
  render(<HeroUiTest />);
  // Check if the button is rendered
  const buttonElement = screen.getByRole("button", { name: /button/i });

  await userEvent.click(buttonElement);

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("Button");
  expect(await screen.findByText(/Button clicked/)).toBeInTheDocument();
});
