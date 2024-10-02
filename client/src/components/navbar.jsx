import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li className="home"><a href="/">Home</a></li>
          <li className="one-piece"><a href="/">One Piece</a></li>
          <li className="digimon"><a href="/">Digimon</a></li>
          <li className="dbz"><a href="/">Dragonball TCG</a></li>
          <li className="ygo"><a href="/">Yu-Gi-Oh!</a></li>
          <li className="pokemon"><a href="/">Pokemon</a></li>
          <li className="mtg"><a href="/">MTG</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
