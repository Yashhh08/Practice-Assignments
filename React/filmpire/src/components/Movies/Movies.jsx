import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";

const Movies = () => {
  const { data } = useGetMoviesQuery();

  console.log(data);

  return <>Movies</>;
};

export default Movies;
