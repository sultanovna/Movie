import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

function App() {

  const [movies, setMovies] = useState([])

useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa1dbb6b5dcee530f5fe1abfc8dd145&language=en-US&page=1')
  .then(response => response.json())
  .then(result => setMovies(result.results))
}, [])

  return (
    <div className="App">
      <Routes>
      <Route index element={<Home movies={movies}/>}/>
      <Route path="/movie/:id" element={<Movie movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
