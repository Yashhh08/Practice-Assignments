import React from "react";
import useStyles from "./styles";
import { Grid, Grow, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Movie = ({ movie, index }) => {
  const { classes } = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in timeout={(index + 1) * 250}>
        <Link to={`/movies/${movie.id}`} className={classes.links}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://www.fillmurray.com/200/300`
            }
            alt={movie.title}
            className={classes.image}
          />

          <Typography className={classes.title} variant="h6">
            {movie.title}
          </Typography>

          <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
