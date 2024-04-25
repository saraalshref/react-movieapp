import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../store/slices/language'; 

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChangeLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  document.body.dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/favouriteMovie">Favourite</Link>
              </li>
            </ul>
            <select value={language} onChange={handleChangeLanguage} className="form-select" style={{width:100}}>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
