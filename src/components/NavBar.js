import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
//import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
//import ListItem from "@mui/material/ListItem";
//import ListItemButton from "@mui/material/ListItemButton";
//import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
//import Button from "@mui/material/Button";
//
// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
// const navItems = ["About", "Projects", "Contact"];

export const NavBar = ({ navItems }) => {
  //const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink
            to={item.href}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            {item.label}
          </NavLink>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={[{ display: "flex" }]}>
      <AppBar component="nav" sx={{ backgroundColor: "#c7ddcc" }}>
        <Toolbar>
          <IconButton
            sx={{ color: "#16123f" }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={[
              {
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "#16123f",
              },
            ]}
          >
            Nayan Sharma
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          PaperProps={{ style: { height: "40vh" } }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#c7ddcc",
              color: "#16123f",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
