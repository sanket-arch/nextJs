import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Profile from "@/components/Profile";

describe("Test for props", () => {
  it("should render the component with props", () => {
    render(
      <Profile
        name="Sanket"
        email="sanketrajkumar@gmail.com"
        isVerified={true}
      />
    );

    expect(screen.getByText(/Email is verified/)).toBeInTheDocument();
  });
});
