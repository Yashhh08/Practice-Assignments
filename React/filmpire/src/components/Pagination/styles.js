import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      margin: "15px 2px",
    },
    pageNumber: {
      margin: "0px 20px",
      color: theme.palette.text.primary,
    },
  };
});

export default useStyles;
