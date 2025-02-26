import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, imageSrc, imageAlt, title, description }) => {
  return (
    <div className="box">
      <Link to={`/project/${id}`} className="project-link">
        <img className="projectimg" src={imageSrc} alt={imageAlt} />
      </Link>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>
        <Link to={`/project/${id}`} className="project-link">See more</Link>
      </p>
    </div>
  );
};

export default ProjectCard;