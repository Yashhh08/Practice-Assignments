import React from "react";
import useStyles from "./styles";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FeaturedMovie = ({ movie }) => {
  const { classes } = useStyles();

  return (
    <Box
      component={Link}
      to={`/movies/${movie.id}`}
      className={classes.container}
    >
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />

        <Box padding={"20px"}>
          <CardContent
            className={classes.cardContent}
            classes={{ root: classes.cardContentRoot }}
          >
            <Typography variant="h5" gutterBottom>
              {movie?.title}
            </Typography>
            <Typography variant="body2">{movie?.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default FeaturedMovie;
