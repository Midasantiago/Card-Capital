import Navbar from "./navbar";
import './navbar.css';
import './header.css';
import throneKing from '../assets/throne-king.png';
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  return (
  <header>
    <div className = "logo-container">
        <img className="main-logo"src={throneKing} alt="king sitting on a throne" />
    </div>
    <div className = "searchBar-container">
      <label htmlFor="search-input" className="search-label">Search</label>
      <input id="search-input" type="text" placeholder="Search for cards here"></input>
    </div>
    <div className="searchButton-container">
      <button type="submit" className="searchButton" aria-label="Search"><FaSearch size={20}/></button>
    </div>
    <div className="accountButtons-container">
      <Link to="/login">
        <button className="loginButton">Login</button>
      </Link>
      <Link to="/register">
        <button className="registerButton">Register</button>
      </Link>
    </div>
    <div>
      <Navbar />
    </div>
  </header>
  /**PlaceHolder for cart component */
  )
}

export default Header