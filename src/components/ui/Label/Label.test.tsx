import { render, screen } from "@testing-library/react"
import { Label } from "@/components/ui/Label"

test("renders", () => {
  render(<Label />)
  expect(screen.getByText("Label")).toBeInTheDocument()
})
