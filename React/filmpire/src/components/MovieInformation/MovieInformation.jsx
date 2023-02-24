import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/TMDB";
import { Box, Grid, Rating, Typography } from "@mui/material";
import { Sync } from "@mui/icons-material";
import useStyles from "./styles";
import genreIcons from "../../assets/genres";
import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../features/genreOrCategory";

const MovieInformation = () => {
  const { classes } = useStyles();

  const { id } = useParams();

  const { data, error, isFetching } = useGetMovieQuery(id);

  const dispatch = useDispatch();

  console.log(data);

  if (isFetching) {
    return;
    <Box>
      <Sync />
    </Box>;
  }

  if (error) {
    return <Link to={"/"}>Something went wrong, please go back.</Link>;
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={`${data?.title}`}
        />
      </Grid>

      <Grid item container direction={"column"} lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} {data.release_date.split("-")[0]}
        </Typography>

        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>

        <Grid item className={classes.containerSpaceAround}>
          <Box display={"flex"} alignContent={"center"}>
            <Rating readOnly value={data?.vote_average / 2} />

            <Typography
              variant="subtitle1"
              style={{ marginLeft: "10px" }}
              gutterBottom
            >
              {data?.vote_average}/10
            </Typography>
          </Box>

          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}min
            {data?.spoken_languages.length > 0
              ? ` / ${data.spoken_languages[0].name}`
              : ""}
          </Typography>
        </Grid>

        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre, index) => {
            return (
              <Link
                key={genre.name}
                to={"/"}
                onClick={() => {
                  dispatch(selectGenreOrCategory(genre.id));
                }}
                className={classes.links}
              >
                <img
                  src={genreIcons[genre.name.toLowerCase()]}
                  alt={genre.name}
                  height={30}
                  className={classes.genreImage}
                />

                <Typography color={"textPrimary"} variant="subtitle1">
                  {genre?.name}
                </Typography>
              </Link>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
