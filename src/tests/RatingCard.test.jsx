import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";

import { render, screen, act, cleanup } from "@testing-library/react";
import { RatingForm } from "../components/RatingForm";
import { RatingCard } from "../components/RatingCard";

describe("RatingCard tests", () => {
  let handleRatingClickMock;

  beforeEach(() => {
    handleRatingClickMock = vi.fn();
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("should render the component", () => {
    render(<RatingCard />);

    expect(screen.getByText(/How did we do?/i)).toBeInTheDocument();
  });

  it("should render the RatingForm component when ratingScore is 0", () => {
    render(<RatingCard />);

    expect(screen.getByText(/How did we do?/i)).toBeInTheDocument();
  });

  it("should render the RatingResponse component when ratingScore is greater than 0", () => {
    render(<RatingCard />);

    const radioButton = screen.getByLabelText("4");
    act(() => {
      radioButton.click();
    });

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    act(() => {
      submitButtonElement.click();
    });

    expect(screen.getByText(/Thank you!/i)).toBeInTheDocument();
  });

  it("should call handleRatingClick when a rating is selected and submitted", () => {
    // render(<RatingCard />);
    render(<RatingForm handleRatingClick={handleRatingClickMock} />);

    const radioButton = screen.getByLabelText("4");
    act(() => {
      radioButton.click();
    });

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    act(() => {
      submitButtonElement.click();
    });

    expect(handleRatingClickMock).toHaveBeenCalledWith("4");
  });

  it("should display the correct rating in RatingResponse after submission", () => {
    render(<RatingCard />);

    const radioButton = screen.getByLabelText("3");
    act(() => {
      radioButton.click();
    });

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    act(() => {
      submitButtonElement.click();
    });

    expect(screen.getByText(/You selected 3 out of 5/i)).toBeInTheDocument();
  });
});
