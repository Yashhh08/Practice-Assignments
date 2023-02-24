import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../index";
import { Typography, Box } from "@mui/material";
import { Sync } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";

const Movies = () => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const [page, setPage] = useState(1);

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
  });

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
