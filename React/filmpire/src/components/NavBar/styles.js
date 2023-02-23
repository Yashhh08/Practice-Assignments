import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    toolbar: {
      // height: "80px",
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "240px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
    },
    menuButton: {
      // marginLeft: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

export default useStyles;
