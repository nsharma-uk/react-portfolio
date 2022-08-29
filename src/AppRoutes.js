import { Routes, Route } from "react-router-dom";

import { About } from "./components/About";
import { ProjectCards } from "./components/ProjectCards";
import { ContactForm } from "./components/ContactForm";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<About />} />
      <Route path="/projects" element={<ProjectCards />} />
      <Route path="/contactform" element={<ContactForm />} />
    </Routes>
  );
};
