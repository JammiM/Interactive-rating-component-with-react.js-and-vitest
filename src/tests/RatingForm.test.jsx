import { describe } from "vitest";

import { render, screen } from "@testing-library/react";
import { RatingForm } from "../components/RatingForm";

describe("RatingForm", () => {
  it("should render the component", () => {
    render(<RatingForm />);

    expect(screen.getByText(/How did we do?/i)).toBeInTheDocument();
  });

  it("Renders the Submit button correctly", () => {
    render(<RatingForm />);

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });

    expect(submitButtonElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
  });

  it("should enable the submit button when a rating is selected", () => {
    render(<RatingForm />);

    const radioButton = screen.getByLabelText("3");
    radioButton.click();

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    expect(submitButtonElement).toBeEnabled();
  });

  it("should render the rating options correctly", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(5);
  });
});
