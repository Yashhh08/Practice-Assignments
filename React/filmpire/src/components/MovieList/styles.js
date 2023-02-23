import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    moviesContainer: {
      display: "flex",
      justifyContent: "space-between",
        flexWrap: "wrap",
        overflow: "auto",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  };
});

export default useStyles;
