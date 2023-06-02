import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/About/About";
import ContactMe from "./components/pages/contact/Contact-me";
import Portfolio from "./components/pages/portfolio/portfolio";
import Resume from "./components/pages/resume/Resume";
import NavTabs from "./components/NavTabs/NavTabs";
import NotFound from "./components/pages/notFound/NotFound";
import Footer from "./components/pages/footer/footer";
import background from "./components/assets/untitled shoot-May 28, 2023-06628.jpg";

const body = {
  margin: "0px",
  padding: "0px",
};

const App = () => {
  return (
    <BrowserRouter style={{ body }}>
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
