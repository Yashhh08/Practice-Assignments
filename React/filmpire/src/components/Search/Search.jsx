import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import { SearchRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { searchMovie } from "../features/genreOrCategory";

const Search = () => {
  const { classes } = useStyles();

  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        variant="standard"
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment>
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
