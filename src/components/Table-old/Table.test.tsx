import { render, screen } from "@testing-library/react"
import { Table } from "@/components/Table-old"

test("renders", () => {
  render(<Table />)
  expect(screen.getByText("Table")).toBeInTheDocument()
})
