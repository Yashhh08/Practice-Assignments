import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
    },
    toolbar: {
      height: "70px",
    },
    content: {
      flexGrow: "1",
      padding: "4em",
      marginTop: "10px",
      marginLeft: "20px",
    },
  };
});

export default useStyles;
