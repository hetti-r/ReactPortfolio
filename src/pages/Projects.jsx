import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

// Import all images from projectPics directory using correct pattern
const images = import.meta.glob('/src/assets/projectPics/*.{png,jpg,jpeg}', { eager: true });

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageMap = {};
        for (const project of projectsData) {
          const key = `/src/assets/projectPics/${project.imageSrc}`;
          if (images[key]) {
            imageMap[project.imageSrc] = images[key].default;
          } else {
            console.error(`Image not found: ${key}`);
          }
        }
        setLoadedImages(imageMap);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    loadImages();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.type === filter);

  return (
    <>
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
          <button
            className={`filter-tag ${filter === 'application' ? 'active' : ''}`}
            onClick={() => setFilter('application')}
          >
            Apps
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
    </>
  );
};

export default Projects;