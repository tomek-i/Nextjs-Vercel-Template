import { render, screen } from "@testing-library/react"
import { Checkbox } from "components/Checkbox"

test("renders", () => {
    render(<Checkbox />)
    expect(screen.getByText("Checkbox")).toBeInTheDocument()
})