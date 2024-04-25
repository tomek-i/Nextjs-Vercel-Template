import { render, screen } from "@testing-library/react"
import { Checkbox } from "@/components/ui/Checkbox"

test("renders", () => {
  render(<Checkbox id="id" name="" />)
  expect(screen.getByText("Checkbox")).toBeInTheDocument()
})
