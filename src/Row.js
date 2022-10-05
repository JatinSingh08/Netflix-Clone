import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow }) {

  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [url, setUrl] = useState("");
  // A snippet of code which runs based on a specific condition/variable.

  const opts = {
    height: "500",
    width: "100%",
    playerVar: {
      //https://developer.google.com/youtube/player_parameters 
      autoplay: 1
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
        .catch(() => console.log('Temporary Unavailable'))
    }
  }

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.table(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="rows_posters">
        {/* several row_poster(s)*/}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        ))}

      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
}

export default Row;