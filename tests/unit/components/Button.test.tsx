import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/atom/Button";

// 1 test suites button component that have 4 test cases
// didalam unit test ini, kita akan mengetes beberapa props yang ada pada button component
// seperti props label, onClick, disabled, isLoading
// untuk props isLoading, kita akan menambahkan props dynamic loadingName
// sehingga ketika button dalam keadaan loading, text pada button akan berubah sesuai dengan props loadingName
describe("Button components", () => {
  it("Render with props label", () => {
    const { getByRole } = render(<Button label="Test" />);

    expect(
      getByRole("button", {
        name: /test/i,
      })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button label="Submit" onClick={handleClick} />);
    fireEvent.click(getByRole("button", { name: "Submit" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables the button when disabled prop is true", () => {
    const { getByRole } = render(<Button label="Submit" disabled />);
    expect(getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  it("shows loading state when isLoading prop is true n button disabled", () => {
    const { getByRole } = render(
      <Button
        label="Submit"
        isLoading
        // dynamic loadingName prop
        loadingName="Loading..."
      />
    );
    // button should show "Loading..." text and be disabled
    expect(getByRole("button", { name: /loading.../i })).toBeDisabled();
  });
});
