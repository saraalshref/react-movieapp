import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';

export default function FavouriteMovie() {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const toggleFavorite = (movie) => {
        const isFavorite = favorites.map(favorite => favorite.id && movie.id);
        if (isFavorite) {
            dispatch(removeFavorite(movie));
        } else {
            dispatch(addFavorite(movie));
        }
    };
    return (
        <div>
            <div className="container  text-center my-5 ">
                <div className="card">

                    <div className="card-body">
                        {favorites.length == 0 ? (<p>you don't add any movie</p>) :
                            (
                                <> <h1 className='mt-5'>My Favorite Movies</h1>

                                    <div className='d-flex mtop-90'>
                                        <div className='row mt-5'>
                                            {favorites.map(movie => (
                                                <div key={movie.id} className="col-md-4 mb-3">
                                                    <div className="card h-100">
                                                        <img
                                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                            className="card-img-top "
                                                            alt={movie.title}
                                                        />

                                                        <div className="card-body">
                                                            <h5 className="card-title">{movie.title}</h5>
                                                            <div className='d-flex justify-content-between'>
                                                                <p className="card-text">{movie.release_date}</p>

                                                                <FontAwesomeIcon
                                                                    icon={faHeart}
                                                                    onClick={() => toggleFavorite(movie)}
                                                                    color={favorites.map(favorite => favorite.id).includes(movie.id) ? 'red' : 'gray'}
                                                                />
                                                            </div>                                                            <p className="card-text">{movie.overview}</p>
                                                            <p className="card-text">Rating: {movie.vote_average}</p>


                                                        </div>

                                                        <Link to={`/details/${movie.id}`} className={`btn btn-success w-25 mb-2 ms-2 `}>Details</Link>
                                                        {/* why link donot work without / */}
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                    </div>

                </div>
            </div>
        </div>
    );
}
