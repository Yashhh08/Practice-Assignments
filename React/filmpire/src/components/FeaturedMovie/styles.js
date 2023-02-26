import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      height: "490px",
      display: "flex",
      justifyContent: "center",
      marginLeft: "20px",
      marginBottom: "20px",
      marginTop: "20px",
      textDecoration: "none",
    },
    card: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column",
    },
    cardRoot: {
      position: "relative",
    },
    cardMedia: {
      position: "absolute",
      height: "100%",
      width: "100%",
      top: "0",
      right: "0",
      backgroundColor: "rgba(0,0,0,0.575)",
      backgroundBlendMode: "darken",
    },
    cardContent: {
      color: "#fff",
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    cardContentRoot: {
      position: "relative",
      backgroundColor: "transparent",
    },
  };
});

export default useStyles;
