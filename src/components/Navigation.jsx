import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <header>
        <div className="banner">
          <div id="navbar">
            <h6>
              <a href="#aboutme">About Me</a>
              <a href="#skills">Skills</a>
              <Link to="/projects">Projects</Link>
              <a href="#bottom">Contact Me</a>
            </h6>
          </div>

          <button className="mobile">
            <span className="material-symbols-outlined">menu</span>
          </button>

          <h1 id="name">Hetti Rönnemaa</h1>
          <nav>
            <ul>
              <li><h3><a href="#aboutme">About Me</a></h3></li>
              <li><h3><a href="#skills">Skills</a></h3></li>
              <li><h3><Link to="/projects">Projects</Link></h3></li>
              <li><h3><a href="#bottom">Contact Me</a></h3></li>
            </ul>
          </nav>

          <div className="banner-text">
            <p>Welcome to My Portfolio</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;