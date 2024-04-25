import { render, screen } from "@testing-library/react"
import { Select } from "@/components/ui/Select"

test("renders", () => {
  render(<Select id="id" options={[]} />)
  expect(screen.getByText("Select")).toBeInTheDocument()
})
