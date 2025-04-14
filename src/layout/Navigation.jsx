import React, { useState, useEffect } from 'react';
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
  const [pendingScroll, setPendingScroll] = useState(null);

  useEffect(() => {
    if (pendingScroll) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingScroll(null);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [pendingScroll, location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMenuOpen(false); // Close the menu after clicking a link
    if (location.pathname !== '/') {
      navigate('/');
      setPendingScroll(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior
    setMenuOpen(false);
    navigate('/projects');
  };

  return (
    <div>
      <header>
        <div className="mobile-menu">
          <button className="mobile" onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div id="navbar" className={menuOpen ? 'open' : ''}>
            <h6>
              <a onClick={() => scrollToSection('aboutme')}>About Me</a>
              <a onClick={() => scrollToSection('skills')}>Skills</a>
              <Link to="/projects" onClick={(e) => handleProjectsClick(e)}>Projects</Link>
              <a onClick={() => scrollToSection('bottom')}>Contact Me</a>
            </h6>
          </div>
        </div>
        <div className="banner">
          <h1 id="name">Hetti Rönnemaa</h1>
          <nav>
            <ul>
              <li><h3><a onClick={() => scrollToSection('projects')}>About Me</a></h3></li>
              <li><h3><a onClick={() => scrollToSection('skills')}>Skills</a></h3></li>
              <li><h3><Link to="/projects" onClick={(e) => handleProjectsClick(e)}>Projects</Link></h3></li>
              <li><h3><a onClick={() => scrollToSection('footercontainer')}>Contact Me</a></h3></li>
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