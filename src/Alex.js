import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import ContactMe from "./components/pages/contact/Contact-me";
import Portfolio from "./components/pages/portfolio/portfolio";
import Resume from "./components/pages/resume/Resume";
import NavTabs from "./components/NavTabs/NavTabs";
import NotFound from "./components/pages/notFound/NotFound";
import Footer from "./components/pages/footer/footer";

const body = {
  margin: "0px",
  padding: "0px",
};

const App = () => {
  return (
    <BrowserRouter style={{ body }}>
      <NavTabs />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
