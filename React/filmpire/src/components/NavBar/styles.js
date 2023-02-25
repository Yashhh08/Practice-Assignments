import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "240px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
    },
    menuButton: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: "240px",
      },
    },
    drawerPaper: {
      width: "240px",
    },
    themeIcon: {
      marginLeft: "10px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
    },
  };
});

export default useStyles;
