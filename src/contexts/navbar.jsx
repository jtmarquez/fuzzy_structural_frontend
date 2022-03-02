import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/"><p className="title">Home</p></Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">

            <Link to="/about"><p className='title'>About</p></Link>
            <Link to="/fuzzify"><p className='title'>Use the app!</p></Link>

          </div>
        </div>
      </div>
    </nav>
  );
}