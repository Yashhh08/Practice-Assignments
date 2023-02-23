import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavBar, Movies, MovieInformation, Actors, Profile } from "./index";

function App() {
  return (
    <div>
      <CssBaseline />

      <NavBar />

      <main>
        <div>
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
