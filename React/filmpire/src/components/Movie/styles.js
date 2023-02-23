import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    Movie: {
      padding: "10px",
    },
    title: {
      color: theme.palette.text.primary,
      textOverflow: "ellipsis",
      // width: "230px",
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "0px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    links: {
      alignItems: "center",
      fontWeight: "bolder",
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
        textDecoration: "none",
      },
    },
    image: {
      borderRadius: "20px",
      height: "260px",
      marginBottom: "10px",
      marginTop: "10px",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  };
});

export default useStyles;
