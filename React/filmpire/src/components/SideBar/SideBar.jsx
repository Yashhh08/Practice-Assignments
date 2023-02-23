import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function SideBar() {
  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

  const theme = useTheme();

  const { classes } = useStyles();

  const categories = [
    { lable: "Popular", value: "popular" },
    { lable: "Top Rated", value: "top_rated" },
    { lable: "Upcoming", value: "upcoming" },
  ];

  const demoCategories = [
    { lable: "Comedy", value: "comedy" },
    { lable: "Action", value: "action" },
    { lable: "Horror", value: "horror" },
    { lable: "Animation", value: "animation" },
  ];

  return (
    <>
      <Link className={classes.imageLink} to="/">
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Filmpire logo"
        />
      </Link>

      <Divider />

      <List>
        <ListSubheader>Categories</ListSubheader>

        {categories.map(({ lable, value }) => {
          return (
            <Link className={classes.links} to="/" key={value}>
              <ListItem>
                <ListItemIcon>
                  <img className={classes.genreImages} src="" alt="" />
                </ListItemIcon>
                <ListItemText>{lable}</ListItemText>
              </ListItem>
            </Link>
          );
        })}
      </List>

      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>

        {demoCategories.map(({ lable, value }) => {
          return (
            <Link className={classes.links} to="/" key={value}>
              <ListItem>
                <ListItemIcon>
                  <img className={classes.genreImages} src="" alt="" />
                </ListItemIcon>
                <ListItemText>{lable}</ListItemText>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
}

export default SideBar;
