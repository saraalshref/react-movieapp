import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {
    const [ movie, setMovieDetails ] = useState({})
    const params = useParams();
  
  useEffect(() => {
    axios
        .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=2a1e2e566cb9287d7d3add77e10b1404`)
        .then((res) => {
            setMovieDetails(res.data);
            console.log(res);
        })
        .catch((err) => console.log(err));
}, []);

  return (
    <>
          <div className="container mt-5">
            <div className="row">
              
                    <div key={movie.id} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                className="card-img-top "
                                alt={movie.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.release_date}</p>
                                <p className="card-text">{movie.overview}</p>
                                <p className="card-text">Rating: {movie.vote_average}</p>
                            </div>
                           
                       </div>
                    </div>
                
            </div>
        </div>
    </>
  )
}
