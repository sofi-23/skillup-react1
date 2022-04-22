import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';

export default function Detail() {
    const navigate = useNavigate();    
    const [data, setData] = useState(null);
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        if (token === null) {
            navigate('/');
        }
        }, []);

    
        useEffect(() => {
        let query = new URLSearchParams(window.location.search);
        let movieId = query.get('movieID');
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=16f5e18af20d93bdb56a2da36bfe68b4&language=en-US`;
        console.log("movie id " + movieId)
        axios.get(url)
            .then(res => {
                setData(res.data);
                console.log(res.data)
            })
            .catch(err=>{
                swAlert(<h2>Error</h2>)}
                )
        }, []);
    return (
        <>{data !== null ? 
                <div className="container" >
                    <div className="row">
                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="poster" />
                        </div>
                        <div className="col-md-8">
                            <h1>{data.original_title}</h1>
                            <p>{data.overview}</p>
                            <p>{data.release_date}</p>
                            <p>{data.vote_average}</p>
                            
                        </div>
                    </div>
                </div>
                :
                <h1>Loading...</h1>
            
        }
        </>

    )
};
