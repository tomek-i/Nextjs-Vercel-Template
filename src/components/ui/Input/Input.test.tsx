import { render, screen } from "@testing-library/react"
import { Input } from "@/components/ui/Input"

test("renders", () => {
  render(<Input />)
  expect(screen.getByText("Input")).toBeInTheDocument()
})
