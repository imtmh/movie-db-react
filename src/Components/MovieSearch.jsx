import React, { useEffect, useState } from "react";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //searchMovies(query);
  }, []);

  function handleFormClick(e) {
    e.preventDefault();
    searchMovies(query);
  }
  const searchMovies = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0bc3c02dde13a5f871758317d066bdee&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleFormClick} className="form">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    </>
  );
}
function MovieCard({ movie }) {
  return (
    <div className="card">
      <img className="card-image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}></img>
      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        <p>
          <small>Release date: {movie.release_date}</small>
        </p>
        <p>
          <small>Rating: {movie.vote_average}</small>
        </p>
        <p className="card-desc">{movie.overview}</p>
      </div>
    </div>
  );
}
