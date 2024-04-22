import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Details from './components/details';
import Movie from './components/movie';
import PageNotFound from './components/PageNotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import FavouriteMovie from './components/favouriteMovie';


function App() {
  return (
   <BrowserRouter>
          <Navbar/>

      <Routes>
      <Route path="/" element={<Movie />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="favouriteMovie" element={<FavouriteMovie/>}/>
        <Route path="*" element={<PageNotFound />} />

      </Routes>
   </BrowserRouter>
  );
}

export default App;
