import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

const SingleProject = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
    <section id="projects">
    <div className="boxcontainer">
    <div className='single-project'>
      <h2>{project.title}</h2>
      <img className='project-title-img' src={`/src/assets/projectPics/${project.imageSrc}`} alt={project.imageAlt} />
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a> {/* open in a new tab + security attributes */}
    </div>
    </div>
    <button className="backButton" onClick={() => window.history.back()}>BACK</button>
    </section>
    </main>
  );
};

export default SingleProject;