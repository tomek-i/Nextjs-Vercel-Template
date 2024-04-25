import { render, screen } from "@testing-library/react"
import { Radio } from "@/components/ui/Radio"

test("renders", () => {
  render(<Radio />)
  expect(screen.getByText("Radio")).toBeInTheDocument()
})
