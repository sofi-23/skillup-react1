import { useState, useEffect } from "react";
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export default function Results() {
    let query = new URLSearchParams(window.location.search);
    let search = query.get('keyword');
    
    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=16f5e18af20d93bdb56a2da36bfe68b4&language=en-US&page=1&include_adult=false&query=${search}`;
        axios.get(endpoint)
        .then(res => {
            const movies = res.data.resultsif 
            if (movies.length === 0) {
                swAlert(<h3>No movies found</h3>)
            }
            setMoviesResults(movies)
            
        })
        .catch(err => {
            swAlert(<h3>No movies found</h3>);
        })
    }, [query]);
    return (
        <>{ moviesResults !== [] &&
            moviesResults.map((movie) => {
                return (
                    <div>
                        <h1>{movie.original_title}</h1>
                        <button className="btn btn-danger">fav</button>
                    </div>
                )
        })}</>
    )
};
