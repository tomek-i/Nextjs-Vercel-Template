import { render, screen } from "@testing-library/react"
import { Profile } from "components/Profile"

test("renders", () => {
    render(<Profile />)
    expect(screen.getByText("Profile")).toBeInTheDocument()
})