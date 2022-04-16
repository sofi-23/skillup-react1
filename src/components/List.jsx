import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export default function List() {
    const [moviesList, setMoviesList] = useState([]);
    const navigate = useNavigate();
    let token = sessionStorage.getItem('token');
    const endpoint = "https://api.themoviedb.org/3/discover/movie?api_key=16f5e18af20d93bdb56a2da36bfe68b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    
    useEffect(() => {
        if (token === null) {
            navigate('/');
        }
        }, [navigate]);
    
        useEffect(() => {
        axios.get(endpoint)
        .then(res=> {
            setMoviesList(res.data.results)
            console.log(moviesList)
        })
        .catch(err=> {
            console.log(err)
            swAlert(<h2>An error has ocurred, try again later</h2>)
        })
        }, [token]);

    return (
        <>
            <h1 className="text-center">I'm a list</h1>    
            {moviesList.map((movie, key) => { 
                return (
                    <div key={key} className="d-flex flex-column m-auto w-50">
                        <h3>{movie.original_title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                        <Link className="btn btn-primary" to={`=/detail?movieID=${movie.id}`}>View Details</Link>
                    </div>
                    )
            }   
            )}
        </>
    )
};
