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
        // Debug: log available image paths
        console.log('Available images:', images);

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
      <section id="projects">
        <h2>Projects</h2>
        <div>
          <label>
            Filter by type:
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="game">Game</option>
              <option value="film">Film</option>
              <option value="application">Application</option>
            </select>
          </label>
        </div>
        <div className="boxcontainer">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={loadedImages[project.imageSrc]}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;