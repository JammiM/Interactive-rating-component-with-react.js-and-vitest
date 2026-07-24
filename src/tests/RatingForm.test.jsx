import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";

import { render, screen, act, cleanup } from "@testing-library/react";
import { RatingForm } from "../components/RatingForm";

describe("RatingForm", () => {
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

    act(() => {
      radioButton.click();
    });

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    expect(submitButtonElement).toBeEnabled();
  });

  it("should render the rating options correctly", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons).toHaveLength(5);
  });

  it("should call handleRatingClick with the selected rating when the form is submitted", () => {
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

  it("should not call handleRatingClick when the form is submitted without selecting a rating", () => {
    render(<RatingForm handleRatingClick={handleRatingClickMock} />);

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    act(() => {
      submitButtonElement.click();
    });

    expect(handleRatingClickMock).not.toHaveBeenCalled();
  });

  it("Each radio button should have the correct value and label", () => {
    render(<RatingForm />);

    //id="ratingForm"
    // https://vitest.dev/api/browser/assertions.html#tohaveformvalues
    const radioButtons = screen.getAllByRole("radio");
    const expectedValues = ["1", "2", "3", "4", "5"];

    radioButtons.forEach((radioButton, index) => {
      // expect(radioButton).toHaveFormValues(expectedValues[index]); // .toHaveFormValues()
      expect(radioButton.labels[0].textContent).toBe(expectedValues[index]);
    });

    // Error: input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead
  });

  it("each radio button should be unchecked initially and only one can be checked at a time", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    // Initially, all radio buttons should be unchecked
    radioButtons.forEach((radioButton) => {
      expect(radioButton).not.toBeChecked();
    });

    // Click on the first radio button
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked();

    // Click on the second radio button
    act(() => {
      radioButtons[1].click();
    });
    expect(radioButtons[1]).toBeChecked();
    expect(radioButtons[0]).not.toBeChecked(); // The first one should now be unchecked
  });

  it("each radio button should have the correct name attribute", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    radioButtons.forEach((radioButton) => {
      expect(radioButton).toHaveAttribute("name", "rating score");
    });
  });

  it("should have a fieldset and legend for the radio buttons", () => {
    render(<RatingForm />);

    const fieldset = screen.getByRole("group", {
      name: /group of radio's buttons/i,
    });
    expect(fieldset).toBeInTheDocument();

    const legend = screen.getByText(/group of radio's buttons/i);
    expect(legend).toBeInTheDocument();
  });

  it("each radio button should have a unique id and the label should be associated with the correct input", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    radioButtons.forEach((radioButton, index) => {
      const expectedId = (index + 1).toString();
      expect(radioButton).toHaveAttribute("id", expectedId);

      const labelEl = screen.getByText(expectedId);

      expect(labelEl.htmlFor).toBe(expectedId);
    });
  });

  it("each radio button should have a label with the correct text content", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");
    const expectedLabels = ["1", "2", "3", "4", "5"];

    radioButtons.forEach((radioButton, index) => {
      const label = screen.getByLabelText(expectedLabels[index]);
      expect(label).toBeInTheDocument();
      expect(label.value).toBe(expectedLabels[index]);
    });
  });

  it("each radio button should have a label", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    radioButtons.forEach((radioButton) => {
      const label = screen.getByLabelText(radioButton.value);
      expect(label).toBeInTheDocument();
    });
  });

  it("should better accessibility: each radio button should have an accessible name and be focusable", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    radioButtons.forEach((radioButton) => {
      // Check if the radio button has an accessible name
      expect(radioButton).toHaveAccessibleName();

      // Check if the radio button is focusable
      expect(radioButton.tabIndex).toBeGreaterThanOrEqual(0);
    });
  });

  it("should have a submit button with an accessible name and be focusable", () => {
    render(<RatingForm />);

    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Check if the submit button has an accessible name
    expect(submitButton).toHaveAccessibleName();

    // Check if the submit button is focusable
    expect(submitButton.tabIndex).toBeGreaterThanOrEqual(0);
  });

  it("should have a fieldset and legend for the radio buttons with accessible name", () => {
    render(<RatingForm />);

    const fieldset = screen.getByRole("group", {
      name: /group of radio's buttons/i,
    });
    expect(fieldset).toBeInTheDocument();

    const legend = screen.getByText(/group of radio's buttons/i);
    expect(legend).toBeInTheDocument();

    // Check if the fieldset has an accessible name
    expect(fieldset).toHaveAccessibleName();
  });

  it("should have a fieldset and legend for the radio buttons with accessible name", () => {
    render(<RatingForm />);

    const fieldset = screen.getByRole("group", {
      name: /group of radio's buttons/i,
    });
    expect(fieldset).toBeInTheDocument();

    const legend = screen.getByText(/group of radio's buttons/i);
    expect(legend).toBeInTheDocument();

    // Check if the fieldset has an accessible name
    expect(fieldset).toHaveAccessibleName();
  });

  it("should have a fieldset and legend for the radio buttons with accessible name", () => {
    render(<RatingForm />);

    const fieldset = screen.getByRole("group", {
      name: /group of radio's buttons/i,
    });
    expect(fieldset).toBeInTheDocument();

    const legend = screen.getByText(/group of radio's buttons/i);
    expect(legend).toBeInTheDocument();

    // Check if the fieldset has an accessible name
    expect(fieldset).toHaveAccessibleName();
  });

  it("should click one radio button and then click another radio button, the first one should be unchecked", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    // Click on the first radio button
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked();

    // Click on the second radio button
    act(() => {
      radioButtons[1].click();
    });
    expect(radioButtons[1]).toBeChecked();
    expect(radioButtons[0]).not.toBeChecked(); // The first one should now be unchecked
  });

  it("should click one radio button and then click the same radio button again, it should remain checked", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    // Click on the first radio button
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked();

    // Click on the first radio button again
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked(); // The first one should remain checked
  });

  it("should click one radio button and then click the same radio button again, it should remain checked", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    // Click on the first radio button
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked();

    // Click on the first radio button again
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked(); // The first one should remain checked
  });

  it("should click one radio button and then click the same radio button again, it should remain checked", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    // Click on the first radio button
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked();

    // Click on the first radio button again
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked(); // The first one should remain checked
  });

  it("should click one radio btn and then another btn and the submit button should be enabled", () => {
    render(<RatingForm />);

    const radioButtons = screen.getAllByRole("radio");

    // Click on the first radio button
    act(() => {
      radioButtons[0].click();
    });
    expect(radioButtons[0]).toBeChecked();

    // Click on the second radio button
    act(() => {
      radioButtons[1].click();
    });
    expect(radioButtons[1]).toBeChecked();
    expect(radioButtons[0]).not.toBeChecked(); // The first one should now be unchecked

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    expect(submitButtonElement).toBeEnabled();
  });
});
