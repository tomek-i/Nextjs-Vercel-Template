import { render, screen } from "@testing-library/react"
import { Loading } from "components/Loading"

test("renders", () => {
  render(<Loading />)
  expect(screen.getByText("Loading")).toBeInTheDocument()
})
