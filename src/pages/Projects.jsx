import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

// Import all images from projectPics directory
const images = import.meta.glob('/src/assets/projectPics/*.{png,jpg,jpeg}');

const Projects = () => {

  // Scroll to the projects section on page load
  useEffect(() => {
    // Disable default scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Ensure DOM is fully loaded before scrolling
    const scrollToProjects = () => {
      const element = document.getElementById('projects');
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      } else {
        requestAnimationFrame(scrollToProjects);
      }
    };
    requestAnimationFrame(scrollToProjects);

    // Cleanup scroll restoration
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  const [filter, setFilter] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageMap = {}; //stores the image key-value pairs
        for (const project of projectsData) {
          const key = `/src/assets/projectPics/${project.imageSrc}`; //get the image key from the project
          if (images[key]) {
            const module = await images[key]();
            imageMap[project.imageSrc] = module.default || module; //store the image in the imageMap with the key as the imageSrc
          } else {
            console.error(`Image not found: ${key}`);
          }
        }
        setLoadedImages(imageMap); //set the loaded images
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    loadImages();
  }, []);

  const getFilteredProjects = () => {
    return filter === 'all'
      ? projectsData
      : projectsData.filter(project => project.type === filter);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <main>
      <section id="projects">
        <div className="filter-tags">
          <button
            className={`filter-tag ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-tag ${filter === 'application' ? 'active' : ''}`}
            onClick={() => setFilter('application')}
          >
            Apps
          </button>
          <button
            className={`filter-tag ${filter === 'game' ? 'active' : ''}`}
            onClick={() => setFilter('game')}
          >
            Games
          </button>
          <button
            className={`filter-tag ${filter === 'film' ? 'active' : ''}`}
            onClick={() => setFilter('film')}
          >
            Films
          </button>
        </div>
        <div className="boxcontainer">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              imageSrc={loadedImages[project.imageSrc]}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;