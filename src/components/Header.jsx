import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function Header() {
  return (
    <div id="nav">
      <Link to="/"><h1> L.Hoppy!</h1></Link>
      <Link to="/"><h2>Home</h2></Link>
      <h2>Drills</h2>
      <h2>おうちでちょこっとEnglish</h2>
      <h2>Hoppy Japanese</h2>
    </div>
  )
}