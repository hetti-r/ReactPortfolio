import React from 'react';

const ProjectCard = ({ imageSrc, imageAlt, title, description, link }) => {
  return (
    <div className="box">
      <img className="projectimg" src={imageSrc} alt={imageAlt} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p><a href={link}>See more</a></p>
    </div>
  )
}

export default ProjectCard