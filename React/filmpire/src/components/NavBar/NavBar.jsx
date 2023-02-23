import React from "react";
import useStyles from "./styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  Button,
  Avatar,
  Drawer,
} from "@mui/material";
import {
  Menu,
  Brightness7,
  Brightness4,
  AccountCircle,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SideBar } from "../index";

function NavBar() {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = false;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              edge="start"
              onClick={() => {
                handleDrawerToggle();
              }}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton color="inherit" onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && "Search..."}

          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={"/profile/:id"}
                onClick={() => {}}
                className={classes.linkButton}
              >
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="profile"
                  src={
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  }
                />
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              className={classes.drawerPaper}
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => {
                handleDrawerToggle();
              }}
            >
              <SideBar />
            </Drawer>
          ) : (
            <Drawer className={classes.drawerPaper} variant="permanent">
              <SideBar />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
