import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../styles/MovieRow.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function MovieRow({ title, fetchUrl, movies, isLargeRow }) {
    const [fetchedMovies, setFetchedMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (fetchUrl) {
                const request = await axios.get(fetchUrl);
                setFetchedMovies(request.data.results);
            }
        }
        fetchData();
    }, [fetchUrl]);

    const displayedMovies = movies || fetchedMovies;

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {displayedMovies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieRow;


