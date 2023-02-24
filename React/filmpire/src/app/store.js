import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "./../services/TMDB";
import genreOrCategoryReducer from "../components/features/genreOrCategory";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tmdbApi.middleware,
  ],
});
