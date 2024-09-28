import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className = "navbar-container">
      <nav className = "navbar">
        <a className="one-piece" href="/"><p>One Piece</p></a>
        <a className="digimon" href="/"><p>Digimon</p></a>
        <a className="dbz" href="/"><p>Dragonball TCG</p></a>
        <a className="ygo" href="/"><p>Yu-Gi-Oh!</p></a>
        <a className="pokemon" href="/"><p>Pokemon</p></a>
        <a className="mtg" href="/"><p>MTG</p></a>
      </nav>
    </div>
  )
}

export default Navbar