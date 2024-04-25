import { render, screen } from "@testing-library/react"
import { Tag } from "components/Tag"

test("renders", () => {
  render(<Tag />)
  expect(screen.getByText("Tag")).toBeInTheDocument()
})
