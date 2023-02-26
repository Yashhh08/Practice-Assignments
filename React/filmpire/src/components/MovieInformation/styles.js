import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    containerSpaceAround: {
      display: "flex",
      justifyContent: "space-around",
      margin: "10px 0 !important",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },
    poster: {
      borderRadius: "20px",
      boxShadow: "0.5em 1em 1em rgb(64,64,70)",
      width: "80%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
        margin: "0 auto",
        height: "350px",
        display: "flex",
        marginBottom: "30px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 auto",
        height: "350px",
        marginBottom: "30px",
      },
    },
    genresContainer: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      margin: "10px 0 !important",
    },
    genreImage: {
      filter: theme.palette.mode === "dark" && "invert(1)",
      marginRight: "10px",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        padding: "0.5rem 1rem",
      },
      textDecoration: "none",
    },
    castImage: {
      width: "100%",
      height: "8em",
      borderRadius: "10px",
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2rem",
      [theme.breakpoints.down("sm")]: {
        width: "245px",
      },
    },
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    videos: {
      width: "50%",
      height: "50%",
      border: "none",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        height: "40%",
      },
    },
  };
});

export default useStyles;
