
import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: "Bearer YOUR_NEW_TMDB_API_READ_ACCESS_TOKEN",
            },
          }
        );

        const data = await response.json();

        console.log("Status:", response.status);
        console.log("TMDB Response:", data);

        if (!response.ok) {
          setError(
            `TMDB Error ${response.status}: ${
              data.status_message || "Authentication failed"
            }`
          );
          return;
        }

        setMovies(data.results);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>

      {error && <h2>{error}</h2>}

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="200"
          />

          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}

export default Movie;

