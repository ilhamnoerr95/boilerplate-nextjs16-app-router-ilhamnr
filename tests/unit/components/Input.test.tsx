import Input from "@/components/atom/Input";
import { render } from "@testing-library/react";

/**
 * @Getrole textbox itu adalah role untuk input type text, email, password, search, tel, url
 *
 */
describe("Input Component", () => {
  it("should have a placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" type="text" />);

    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("should render type text", () => {
    const { getByLabelText } = render(
      <Input label="Input text" id="text" placeholder="Enter your input text" />
    );

    expect(getByLabelText(/input text/i)).toHaveAttribute("type", "text");
  });
  it("should render type password", () => {
    const { getByLabelText } = render(
      <Input
        type="password"
        label="Password"
        ariaLabel="password"
        id="pwd"
        placeholder="Enter your password"
      />
    );

    expect(getByLabelText(/password/i)).toHaveAttribute("type", "password");
  });
});
