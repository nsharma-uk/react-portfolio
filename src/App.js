import { HashRouter as Router } from "react-router-dom";

import { ContactForm } from "./components/ContactForm";

import { Footer } from "./components/Footer";
//import { About } from "./components/About";

import Stack from "@mui/material/Stack";
import { NavBar } from "./components/NavBar";
//import { ProjectCards } from "./components/ProjectCards";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <Router>
      <Stack sx={{ minHeight: "100vh" }} spacing={0}>
        <NavBar
          navItems={[
            {
              label: "About Me",
              href: "/",
            },
            {
              label: "Projects",
              href: "/project",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ]}
        />
        <AppRoutes />
        <ContactForm />
        <Footer />
      </Stack>
    </Router>
  );
};
