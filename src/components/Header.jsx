import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function Header() {
  return (
    <div id="nav">
      <Link to="/">
        <img className="home" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/home.jpg?raw=true" />
      </Link>
      <Link to="/"><h2>Home</h2></Link>
      <h2>Drills</h2>
      <Link to="/"><h2>おうちでちょこっとEnglish</h2></Link>
      <Link to="/HoppyJapanese"><h2>Hoppy Japanese</h2></Link>
    </div>
  )
}