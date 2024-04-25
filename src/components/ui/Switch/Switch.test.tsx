import { render, screen } from "@testing-library/react"
import { Switch } from "@/components/ui/Switch"

test("renders", () => {
  render(<Switch />)
  expect(screen.getByText("Switch")).toBeInTheDocument()
})
