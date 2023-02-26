import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
    },
    toolbar: {
      height: "70px",
      width: "100%",
    },
    content: {
      flexGrow: "1",
      padding: "2em",
      marginTop: "30px",
      width: "100%",
    },
  };
});

export default useStyles;
