import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactMe from "./components/pages/Contact-me";
import Portfolio from "./components/pages/portfolio";
import Resume from "./components/pages/Resume";
import NavTabs from "./components/NavTabs";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/pages/footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
