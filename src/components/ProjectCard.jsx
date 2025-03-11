import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, imageSrc, imageAlt, title, description, tags }) => {
  return (
    <div className="box">
      {id ? (
        <Link to={`/project/${id}`} className="project-link">
          <img className="projectimg" src={imageSrc} alt={imageAlt} />
        </Link> //If id is provided, links is added to image
      ) : (
        <img className="projectimg" src={imageSrc} alt={imageAlt} /> //If id is not provided, images will render wihtout links
      )}
      <div className="project-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className='tags-container'>
          {tags && tags.map((tag, index) => (
            <button key={index} className='tag'>
              {tag}
            </button>
          ))}
        </div>
        {id && (
          <Link to={`/project/${id}`} className="project-link see-more">
            See more
          </Link>//The "See more" section only appears when id exists
        )}
      </div>
    </div>
  );
};

export default ProjectCard;