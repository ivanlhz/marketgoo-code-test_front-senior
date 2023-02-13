import { render, screen } from "@testing-library/react"
import { App } from "components/App"

describe('App', () => {
    it('should render the application', () => {
        render(<App/>)
        expect(screen.getByText('League Champion')).toBeInTheDocument();
    })
})