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
        <hr className="project-divider" />
        <div className='tags-container'>
          {tags ? tags.map((tag, index) => (
            <button key={index} className='tag'>
              {tag}
            </button>
          )) : (
            <button>
              {tags}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;