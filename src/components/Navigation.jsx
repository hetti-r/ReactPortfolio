import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getBannerText = () => {
    switch (location.pathname) {
      case '/projects':
        return 'My Projects';
      default:
        return 'Welcome to My Portfolio';
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header>
        <div className="banner">
          <button className="mobile" onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div id="navbar" className={menuOpen ? 'open' : ''}>
            <h6>
              <a onClick={() => scrollToSection('aboutme')}>About Me</a>
              <a onClick={() => scrollToSection('skills')}>Skills</a>
              <Link to="/projects">Projects</Link>
              <a onClick={() => scrollToSection('bottom')}>Contact Me</a>
            </h6>
          </div>
          <h1 id="name">Hetti Rönnemaa</h1>
          <nav>
            <ul>
              <li><h3><a onClick={() => scrollToSection('aboutme')}>About Me</a></h3></li>
              <li><h3><a onClick={() => scrollToSection('skills')}>Skills</a></h3></li>
              <li><h3><Link to="/projects">Projects</Link></h3></li>
              <li><h3><a onClick={() => scrollToSection('bottom')}>Contact Me</a></h3></li>
            </ul>
          </nav>
          <div className="banner-text">
            <p>{getBannerText()}</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;