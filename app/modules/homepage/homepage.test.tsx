import { render } from "@testing-library/react"
import { expect, test } from "vitest"

import { HomePage } from "./homepage"

test("renders homepage", async () => {
  const { getByText } = render(<HomePage />)
  expect(getByText("Welcome to Reciprocal")).toBeInTheDocument()
})
