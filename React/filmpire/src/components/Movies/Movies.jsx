import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../index";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { Sync } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";

const Movies = () => {
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const [page, setPage] = useState(1);

  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  const numberOfMovies = lg ? 17 : 19;

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
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
      <FeaturedMovie movie={data?.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data?.total_pages}
      />
    </>
  );
};

export default Movies;
