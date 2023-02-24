import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    searchContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        width: "40%",
      },
    },
    input: {
      color: theme.palette.mode === "light" && "black",
      filter: theme.palette.mode === "light" && "invert(1)",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
        marginBottom: "10px",
      },
    },
  };
});

export default useStyles;
