import { render, screen } from '@testing-library/react';
import CatNew from '../pages/CatNew'
import { BrowserRouter } from 'react-router-dom';

describe("<CatNew />", () => {
    beforeEach(() => {
        render(
        <BrowserRouter>
          <CatNew />
        </BrowserRouter>
        )
    })

    it("renders CatNew page for the user", () => {
        const element = screen.getByText("Enter your Kitty here!")
        expect(element).toBeInTheDocument()
    })

    it("has a form with entry spots for name, age, enjoys, and image", () => {
        const formName = screen.getByText("New meow meow:")
        expect(formName.getAttribute("for")).toEqual("name")

        const formAge = screen.getByText("How old is your kitkat:")
        expect(formAge.getAttribute("for")).toEqual("age")

        const formEnjoys = screen.getByText("what does you kitty enjoy?")
        expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

        const formImage = screen.getByText("what does your cat look like??")
        expect(formImage.getAttribute("for")).toEqual("image")
    })

})

