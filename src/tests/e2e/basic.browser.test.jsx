import { render } from "vitest-browser-react";
// In browser tests avoid importing from 'vitest' directly (it may bundle the runner into the browser build).
// Vitest provides globals (test, describe, expect) in the test environment — use those instead.
// The playwright `page` is also available via the browser provider when needed.
import { page, userEvent } from "vitest/browser";

import App from "../../App";

test("Renders the correct text content", async () => {
  const screen = await render(<App />);

  await expect.element(screen.getByText(/How did we do?/i)).toBeInTheDocument();

  await expect
    .element(
      screen.getByText(
        /Please let us know how we did with your support request/i,
      ),
    )
    .toBeInTheDocument();

  await expect
    .element(screen.getByRole("button", { name: "Submit" }))
    .toBeVisible();

  const radio = screen.getByRole("radio", { name: "1" });
  await expect.element(radio).toBeVisible();

  // Click the visible label text/span instead of the hidden input itself.
  await screen.getByText("1").click();

  await expect.element(radio).toBeChecked();
});
