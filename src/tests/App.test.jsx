import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "../App";

describe("App", () => {
  it("Renders the correct text content", () => {
    render(<App />);

    expect(screen.getByText(/How did we do?/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!/i,
      ),
    ).toBeInTheDocument();
  });
});
