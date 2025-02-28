import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, imageSrc, imageAlt, title, description }) => {
  return (
    <div className="box">
      {id ? (
        <Link to={`/project/${id}`} className="project-link">
          <img className="projectimg" src={imageSrc} alt={imageAlt} />
        </Link> //If id is provided, links will render normally
      ) : (
        <img className="projectimg" src={imageSrc} alt={imageAlt} /> //If id is not provided, images will render normally
      )}
      <h4>{title}</h4>
      <p>{description}</p>
      {id && (
        <p>
          <Link to={`/project/${id}`} className="project-link">See more</Link>
        </p>//The "See more" section only appears when id exists
      )}
    </div>
  );
};

export default ProjectCard;