import { Routes, Route } from "react-router-dom";

import { AboutMe } from "./components/About";
import { Portfolio } from "./containers/Projects";
import { ContactForm } from "./components/ContactForm";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
};
