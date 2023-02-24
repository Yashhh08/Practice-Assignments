import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Sync } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useGetGenresQuery } from "../../services/TMDB";
import genresIcons from "../../assets/genres/index";
import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../features/genreOrCategory";

const redLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

const blueLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const categories = [
  { lable: "Popular", value: "popular" },
  { lable: "Top Rated", value: "top_rated" },
  { lable: "Upcoming", value: "upcoming" },
];

function SideBar() {
  const theme = useTheme();

  const { classes } = useStyles();

  const dispatch = useDispatch();

  const { data, isFetching } = useGetGenresQuery();

  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <Sync />
      </Box>
    );
  }

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
              <ListItem
                onClick={() => {
                  dispatch(selectGenreOrCategory(value));
                }}
              >
                <ListItemIcon>
                  <img
                    className={classes.genreImages}
                    src={genresIcons[lable.toLowerCase()]}
                    // src={action}
                    alt=""
                    height={30}
                  />
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

        {data.genres.map(({ name, id }) => {
          return (
            <Link className={classes.links} to="/" key={id}>
              <ListItem
                onClick={() => {
                  dispatch(selectGenreOrCategory(id));
                }}
              >
                <ListItemIcon>
                  <img
                    className={classes.genreImages}
                    src={genresIcons[name.toLowerCase()]}
                    // src={blueLogo}
                    alt=""
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
}

export default SideBar;
