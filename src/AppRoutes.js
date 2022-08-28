import { Routes, Route } from "react-router-dom";

import { AboutMe } from "./components/About";
import { Projects } from "./containers/Projects";
import { ContactForm } from "./components/ContactForm";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
};
