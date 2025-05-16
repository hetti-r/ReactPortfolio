import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import FadeInUpMotion from '../components/FadeInUpMotion';

// Import all images from projectPics directory
const images = import.meta.glob('/src/assets/projectPics/*.{png,jpg,jpeg}');

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    // Disable default scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Wait for component to mount and transition to complete
    const timer = setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 500); // Increased delay for smoother transition

    return () => {
      clearTimeout(timer);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []); // Run only on mount

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
        <div className="boxcontainer2">
          {filteredProjects.map((project, index) => (
            <FadeInUpMotion
              key={project.id}
              whileInView={{ y: 0 }}
              delay={index % 3 === 0 ? 0 : 0.2 * (index % 3)} // Reset delay every 3 cards
            >
              <div className="card-wrapper2">
                <ProjectCard
                  id={project.id}
                  imageSrc={loadedImages[project.imageSrc]}
                  imageAlt={project.imageAlt}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  tags={project.tags}
                />
              </div>
            </FadeInUpMotion>
          ))}
        </div>
      </section>
    </main >
  );
};

export default Projects;