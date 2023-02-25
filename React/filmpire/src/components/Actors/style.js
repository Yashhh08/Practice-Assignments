import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    containerSpaceAround: {
      display: "flex",
      justifyContent: "space-around",
      textAlign: "center",
      margin: "10px 0 !important",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },
    poster: {
      borderRadius: "20px",
      boxShadow: "0.5em 1em 1em rgb(64,64,70)",
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 auto",
        height: "350px",
        marginBottom: "30px",
      },
    },
  };
});

export default useStyles;
