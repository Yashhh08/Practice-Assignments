import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../index";
import { Typography, Box } from "@mui/material";
import { Sync } from "@mui/icons-material";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <Sync size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography>
          No movies that match that name.
          <br />
          please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return "An error has occured..!!";
  }

  return (
    <>
      <MovieList movies={data} />
    </>
  );
};

export default Movies;
