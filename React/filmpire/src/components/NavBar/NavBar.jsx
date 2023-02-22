import React from "react";
import useStyles from "./styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  Button,
  Avatar,
} from "@mui/material";
import {
  Menu,
  Brightness7,
  Brightness4,
  AccountCircle,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

function NavBar() {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              edge="start"
              onClick={() => {}}
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
    </>
  );
}

export default NavBar;
