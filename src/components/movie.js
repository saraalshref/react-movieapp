import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';
export default function Movie() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [flag,setFlag]=useState(0)
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
        const url="2a1e2e566cb9287d7d3add77e10b1404&"



    useEffect(() => {

        axios
           /* .get(`https://api.themoviedb.org/3/movie/popular?api_key=2a1e2e566cb9287d7d3add77e10b1404&page=${currentPage}`)*/
           .get(`${process.env.REACT_APP_BASE_URL}?api_key=${url}&page=${currentPage}`)
           .then((res) => {
                setMovies(res.data.results);
                console.log(res.data.results);
            })
            .catch((error) => console.log(error));
    }, [currentPage]);

    const handleClick = (value) => {
        if (value > 0 && value < 6) {
            setCurrentPage(value);
        }
    };

    const handleSearch = () => {
        const result = movies.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));
        setSearchResults(result.length > 0 ? result : []);
         setFlag(result.length > 0 ? 0 : -1);
    };
    

    const data = searchResults.length > 0 ? searchResults : movies;

    const toggleFavorite = (movie) => {
        const isFavorite = favorites.map(favorite => favorite.id).includes(movie.id);
        if (isFavorite) {
            dispatch(removeFavorite(movie));
        } else {
            dispatch(addFavorite(movie));
        }
    };



    return (
        <>
            <div className="container mt-5  ">
                <div className="card">
                    <div className="card-body">
                        <div className='d-flex mtop-90'>
                            <input
                                type="text"
                                className="form-control me-2"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                            />
                            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    {
                        flag === -1 ? (
                            <div>No movies found</div>
                        ) : (data.map((movie, index) => (
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
                                        </div>

                                        <p className="card-text">{movie.overview}</p>
                                        <p className="card-text">Rating: {movie.vote_average}</p>
                                    </div>



                                    <button
                                        className={`btn btn-success w-25 mb-2 ms-2 ${currentPage === index + 1 ? 'btn-primary' : 'btn-secondary'}`}
                                        onClick={() => navigate(`details/${movie.id}`)}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        )))}
                </div>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <button className="btn btn-light me-2" onClick={() => handleClick(currentPage - 1)}>{'<'}</button>
                    {arr.map((i) => (
                        <button className={`btn btn-primary me-2 ${i === currentPage ? 'btn-warning' : 'btn-light'}`} onClick={() => handleClick(i)}>{i}</button>
                    ))}
                    <button className="btn btn-light" onClick={() => handleClick(currentPage + 1)}>{'>'}</button>
                </div>
            </div>
        </>
    );
}
