import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";

import { render, screen, cleanup } from "@testing-library/react";
import { RatingResponse } from "../components/RatingResponse";

describe("RatingResponse tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("should render the component", () => {
    render(<RatingResponse />);

    expect(screen.getByText(/Thank you!/i)).toBeInTheDocument();

    expect(
      screen.getByText(
        /We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!/i,
      ),
    ).toBeInTheDocument();
  });
});
