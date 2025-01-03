import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../src/Components/HomePage/HomePage";
import AboutsUSDetailed from "./Components/AboutsUSDetailed/AboutsUSDetailed";
import NavBar from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import SubcategoryList from "./Components/CategoriesComponent/CategoriesComponent";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutsUSDetailed />} />
          <Route path="/categories/:categoryId/subcategories" element={<SubcategoryList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
