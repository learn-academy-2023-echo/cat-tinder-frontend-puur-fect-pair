import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"


  import mockCats from "./mockCats.js"

  const App = () => {
    const [cats, setCat] = useState(mockCats)

  return (
  <>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  <Footer />
  </>
)}

export default App;
 