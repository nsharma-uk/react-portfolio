import { BrowserRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";

import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
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
            {
              label: "Skills/CV",
              href: "/cv",
            },
          ]}
        />
        <AppRoutes />
        <Footer />
      </Stack>
    </BrowserRouter>
  );
};
