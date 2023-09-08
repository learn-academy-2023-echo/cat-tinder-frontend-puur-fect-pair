import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <Header />
            </BrowserRouter>
        ) 
        screen.logTestingPlaygroundURL()
    })
    it("has a clickable link", () => {
        render(
           <BrowserRouter>
           <Header />
           </BrowserRouter> 
        )
        const link = screen.getByRole('link', {
            name: /home/i
          })
          expect(link).toBeInTheDocument()
    })
})
