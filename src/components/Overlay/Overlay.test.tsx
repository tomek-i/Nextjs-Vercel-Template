import { render, screen } from "@testing-library/react"
import { Overlay } from "components/Overlay"

test("renders", () => {
    render(<Overlay />)
    expect(screen.getByText("Overlay")).toBeInTheDocument()
})