import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetActorInfoQuery } from "../../services/TMDB";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Sync } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useStyles from "./style";
import MovieList from "./../MovieList/MovieList";
import { useGetMoviesByActorIdQuery } from "../../services/TMDB";
import Pagination from "../Pagination/Pagination";

const Actors = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState(1);

  const { id } = useParams();

  const { data, error, isFetching } = useGetActorInfoQuery(id);

  const {
    data: actorMovies,
    isFetching: fetchingMoviesByActor,
  } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching || fetchingMoviesByActor) {
    return (
      <Box>
        <Sync />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Link to={"/"}>Something is Wrong, please go back..!!</Link>
      </Box>
    );
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={6} md={6} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
          alt={data?.name}
        />
      </Grid>

      <Grid item container lg={8} direction={"column"} alignItems="center">
        <Typography variant="h4" gutterBottom>
          {data?.name}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Born : {new Date(data?.birthday).toDateString()}
        </Typography>

        <Typography gutterBottom>{data?.biography}</Typography>

        <Button
          target="_blank"
          href={`https://www.imdb.com/name/${data?.imdb_id}`}
          variant="contained"
          size="small"
          style={{ width: "30px" }}
        >
          IMDB
        </Button>
      </Grid>

      <Box marginTop={"5rem"} width="100%">
        <Typography variant="h4" gutterBottom>
          Movies
        </Typography>

        <MovieList movies={actorMovies} numberOfMovies={12} />
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={actorMovies?.total_pages}
        />
      </Box>
    </Grid>
  );
};

export default Actors;
