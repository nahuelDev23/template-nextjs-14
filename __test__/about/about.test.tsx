import {render, screen} from "@testing-library/react";

import About from "@/app/about/page";

it("App Router: Works with Server Components", () => {
  render(<About />);

  expect(screen.getByRole("heading")).toHaveTextContent("About");
});
