import { Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const { classes } = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  if (totalPages === 0) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Button
        onClick={() => {
          handlePrev();
        }}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        prev
      </Button>
      <Typography variant="h5" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        onClick={() => {
          handleNext();
        }}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        next
      </Button>
    </div>
  );
};

export default Pagination;
