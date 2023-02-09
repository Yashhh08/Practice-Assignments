import "./App.css";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const movieApi = `https://omdbapi.com/?apikey=e09d7c1e&s=avenger`;

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("all");

  const searhMovies = async (movie) => {
    try {
      const getMovies = await axios.get(
        `https://omdbapi.com/?apikey=e09d7c1e&s=${movie}`
      );

      setMovies(getMovies.data.Search);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searhMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App text-center">
      <h1>MovieLand</h1>

      <SearchBar setSearchTerm={setSearchTerm} />

      <Movies movies={movies}/>
    </div>
  );
}

export default App;
