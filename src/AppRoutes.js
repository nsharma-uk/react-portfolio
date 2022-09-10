import { Routes, Route } from "react-router-dom";

import { ContactForm } from "./components/ContactForm";
import { About } from "./containers/About";
import { ProjectCards } from "./containers/ProjectCards";
import { CV } from "./containers/CV";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<About />} />
      <Route path="/project" element={<ProjectCards />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
};
