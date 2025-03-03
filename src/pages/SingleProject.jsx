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
            <img className='project-title-img' src={`/src/assets/projectPics/${project.imageSrc}`} alt={project.imageAlt} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>


            {project.figma && (
              <div className="figma-embed-wrapper">
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="100%"
                  height="450"
                  src={project.figma}
                  allowFullScreen
                />
              </div>
            )}
            {project.video && (
              <div className="video-embed-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={project.video}
                  title="video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {project.pdf && (
              <div className="pdf-embed-wrapper">
                <iframe
                  src={`/src/assets/pdfs/${project.pdf}#view=FitH`}
                  width="100%"
                  height="800px"
                  style={{
                    border: 'none',
                    display: 'block'
                  }}
                  title="PDF document"
                >
                  <p>Your browser does not support iframes. <a href={`/src/assets/pdfs/${project.pdf}`}>Download PDF</a></p>
                </iframe>
              </div>
            )}
            <div>
              <button className="backButton" onClick={() => window.history.back()}>GO BACK</button>
              {project.link && (
                <a className="moreButton" href={project.link} target="_blank" rel="noopener noreferrer">VIEW PROJECT</a> /* open in a new tab + security attributes */
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProject;