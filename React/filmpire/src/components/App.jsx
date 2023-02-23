import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavBar, Movies, MovieInformation, Actors, Profile } from "./index";
import useStyles from "./styles";

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBar />

      <main className={classes.toolbar}>
        <div className={classes.content}>
          <Routes>
            <Route exact path="/" element={<Movies />} />

            <Route exact path="/movies/:id" element={<MovieInformation />} />

            <Route exact path="/actors/:id" element={<Actors />} />

            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
