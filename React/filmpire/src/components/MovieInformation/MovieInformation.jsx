import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/TMDB";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import { Language, Movie, Sync, Theaters } from "@mui/icons-material";
import useStyles from "./styles";
import genreIcons from "../../assets/genres";
import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../features/genreOrCategory";
import { useGetRecommendedMoviesQuery } from "../../services/TMDB";
import MovieList from "./../MovieList/MovieList";

const MovieInformation = () => {
  const { classes } = useStyles();

  const [modalOpen, setModalOpen] = useState(false);

  const { id } = useParams();

  const { data, error, isFetching } = useGetMovieQuery(id);

  const {
    data: recommendedData,
    isfetching: isFetchingRecommended,
  } = useGetRecommendedMoviesQuery(id);

  const dispatch = useDispatch();

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
        <Typography variant="h4" align="center" gutterBottom>
          {data?.title} {data.release_date.split("-")[0]}
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>
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

        <Typography variant="h5" gutterBottom style={{ marginTop: "10px" }}>
          Overview
        </Typography>

        <Typography style={{ marginBottom: "2rem" }}>
          {data?.overview}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>

        <Grid item container spacing={2}>
          {data &&
            data.credits?.cast
              ?.map((character, index) => {
                return (
                  character.profile_path && (
                    <Grid
                      item
                      key={index}
                      xs={4}
                      md={2}
                      component={Link}
                      to={`actors/${character.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        className={classes.castImage}
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt={character.name}
                      />

                      <Typography
                        color="textPrimary"
                        style={{ textAlign: "center" }}
                      >
                        {character.name}
                      </Typography>

                      <Typography
                        color="textSecondary"
                        style={{ textAlign: "center" }}
                      >
                        {character.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
                );
              })
              .slice(0, 6)}
        </Grid>

        <ButtonGroup className={classes.buttonsContainer} size="small">
          <Button target="_blank" href={data?.homepage} endIcon={<Language />}>
            WEBSITE
          </Button>
          <Button
            target="_blank"
            href={`https://www.imdb.com/title/${data?.imdb_id}`}
            endIcon={<Movie />}
          >
            IMDB
          </Button>
          <Button
            // target="_blank"
            // href="#"
            endIcon={<Theaters />}
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          >
            TRAILER
          </Button>
        </ButtonGroup>
      </Grid>

      <Box marginTop="5rem" width="100%">
        <Typography variant="h4" align="center" gutterBottom>
          You might also like
        </Typography>

        {recommendedData ? (
          <MovieList movies={recommendedData} numberOfMovies={12} />
        ) : (
          <Box marginTop={"2rem"} textAlign={"center"}>
            Sorry, Nothing related found..!!
          </Box>
        )}
      </Box>

      <Modal
        className={classes.modal}
        closeAfterTransition
        open={modalOpen}
        onClose={() => {
          setModalOpen(!modalOpen);
        }}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            className={classes.videos}
            autoPlay
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </Modal>
    </Grid>
  );
};

export default MovieInformation;
