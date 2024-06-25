import { render, screen } from "@testing-library/react"
import { Table } from "components/Table"

test("renders", () => {
  render(<Table />)
  expect(screen.getByText("Table")).toBeInTheDocument()
})
