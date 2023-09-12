import { render, screen } from '@testing-library/react';
import CatEdit from '../pages/CatEdit'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockCats from '../mockCats';

const renderEdit = () => {
    render(
      <MemoryRouter initialEntries={["/catedit/1"]}>
        <Routes>
        <Route path="/catedit/:id" element={<CatEdit cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    )
    screen.logTestingPlaygroundURL()
  }

  describe("<CatEdit />", () => {
    it("renders CatEdit page for the user", () => {
      renderEdit();
      const element = screen.getByText(/update your kitties name:/i)
      expect(element).toBeInTheDocument();
    });

    it("has a form with entry spots for name, age, enjoys, and image", () => {
        // const formName = screen.getByText(/update your kitties name:/i)
        // console.log("name")
        // expect(formName.getAttribute("for")).toEqual("name")

        const formAge = screen.getByText(/did your cat have a birthday\?/i)
        console.log(formAge)
        expect(formAge).toBeInTheDocument()

        const formEnjoys = screen.getByText("What new hobbies does your cat have?")
        expect(formEnjoys.getAttribute("for")).toEqual("enjoys")
        const formImage = screen.getByText("New threads? Update your cat:")
        expect(formImage.getAttribute("for")).toEqual("image")

    })

  });
