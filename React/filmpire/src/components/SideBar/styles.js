import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    imageLink: {
      display: "flex",
      justifyContent: "center",
      padding: "10% 0",
    },
    image: {
      width: "70%",
    },
    links: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    genreImages: {
      filter: theme.palette.mode === "dark" ? "dark" : "invert(1)",
    },
  };
});

export default useStyles;
