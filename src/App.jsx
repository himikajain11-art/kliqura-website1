import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

import "./App.css";
import Services from "./Pages/Services"; 

function App() {
  return (
    <BrowserRouter>

      {/* HEADER */}
      <Header />

      {/* SEPARATE PAGES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* WORK */}
        <Route
          path="/work"
          element={<Work />}
        />

        {/* BLOG */}
        <Route
          path="/blog"
          element={<Blog />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;