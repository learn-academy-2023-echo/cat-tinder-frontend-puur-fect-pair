import { render, screen } from '@testing-library/react';
import CatShow from '../pages/CatShow'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockCats from '../mockCats';

const renderShow = () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
        <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    )
  }

describe("<CatShow />", () => {
    it("renders an image", () => {
      renderShow();
      const catImage = screen.getByRole('img');
      expect(catImage).toBeInTheDocument();
    });
  });